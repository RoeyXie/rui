<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-09-24 22:42:58
 * @LastEditTime: 2020-09-25 15:20:30
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/src/package/components/hidescroll/RHideScroll.vue
-->
<template>
  <div class="rhidescroll">
    <div class="scroll-main" :style="mainStyle" @scroll="onScroll" ref="main">
      <slot></slot>
    </div>
    <div class="scroll-bar__box" :style="scrollStyle">
      <div class="scroll-bar__inner" :style="barStyle"></div>
    </div>
  </div>
</template>

<script>
import { getPx } from "@/assets/js/common.js";

export default {
  name: "RHideScroll",
  props: {
    maxHeight: {
      type: [Number, String],
      default: "auto"
    }
  },
  data() {
    return {
      clientHeight: 0,
      scrollHeight: 0,
      movePercent: 0,
      show: false,
      timeout: null
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.clientHeight = this.$refs.main.clientHeight;
      this.scrollHeight = this.$refs.main.scrollHeight;
    });
  },
  computed: {
    mainStyle() {
      return {
        maxHeight: getPx(this.maxHeight)
      };
    },
    scrollStyle() {
      return {
        maxHeight: getPx(this.maxHeight),
        opacity: this.show ? 1 : 0
      };
    },
    barHeight() {
      return (this.clientHeight * this.clientHeight) / this.scrollHeight;
    },
    scrollBarY() {
      return this.movePercent * (this.clientHeight - this.barHeight);
    },
    barStyle() {
      return {
        height: `${this.barHeight}px`,
        transform: `translateY(${this.scrollBarY}px)`
      };
    }
  },
  methods: {
    onScroll(e) {
      const currentScrollHeight = e.target.scrollTop;
      this.movePercent = currentScrollHeight / (this.scrollHeight - this.clientHeight);
      // 滚动到底时の关系公式：element.scrollHeight - element.scrollTop === element.clientHeight
      this.show = true;
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        this.show = false;
      }, 600);
    }
  }
};
</script>
<style lang="scss">
/* @import url() */
.rhidescroll {
  position: relative;
  height: 100%;

  .scroll-main {
    overflow: auto;
    height: 100%;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .scroll-bar__box {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.3s;
    pointer-events: none;
    .scroll-bar__inner {
      width: 6px;
      background: rgba(0, 0, 0, 0.5);
      height: 6px;
      right: 0;
      top: 0;
      position: absolute;
      border-radius: 5px;
    }
  }
}
</style>
