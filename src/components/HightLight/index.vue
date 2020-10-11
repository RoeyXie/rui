<!--
 * @Author: Hang
 * @Date: 2020-07-13 16:43:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-30 18:30:02
 * @FilePath: /Hui/rui/src/components/HightLight/index.vue
 * @Description: 暂无描述
-->
<template>
  <pre class="h-hight-light">
      <code  class="javascript html xml" :style="codeStyle" ref="code"></code>
  </pre>
</template>

<script>
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
// import { getPx } from '@utils/common';

export default {
  name: "HightLight",
  props: {
    code: {
      required: true
    },
    minHeight: {
      type: [Number, String],
      default: 150
    }
  },
  data() {
    return {};
  },
  computed: {
    codeStyle() {
      return {
        minHeight: this.minHeight // getPx(this.minHeight)
      };
    }
  },
  watch: {
    code: {
      handler() {
        this.render();
      }
    }
  },
  mounted() {
    this.render();
  },
  methods: {
    getCode(obj) {
      return typeof obj === "object" ? JSON.stringify(obj, null, 2) : obj;
    },
    render() {
      this.$refs.code.textContent = this.getCode(this.code);
      this.$nextTick().then(() => {
        hljs.highlightBlock(this.$refs.code);
      });
    }
  }
};
</script>
<style lang="scss">
/* @import url() */
.h-hight-light {
  margin: 0;
  code {
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
}
</style>
