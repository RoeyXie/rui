<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-09-24 22:48:19
 * @LastEditTime: 2020-09-27 17:46:47
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/src/views/hidescrollview/index.vue
-->
<template>
  <div class="hidescrollview">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <div class="suchas">
      <examplebox :code="demo1.code" :title="demo1.title" :notes="demo1.notes">
        <template v-slot:sourse>
          <div class="scroll-demo__box">
            <r-hide-scroll maxHeight="100%">
              <div class="scroll-demo__content">
                <div v-for="n in 50" :key="n">{{ `这是${n}首简单的小情歌` }}</div>
              </div>
            </r-hide-scroll>
          </div>
        </template>
        <template v-slot:description> </template>
      </examplebox>
    </div>
  </div>
</template>

<script>
import code from "./code.ts";
export default {
  name: "Hidescrollview",
  data() {
    return {
      title: "HideScroll 隐藏滚动条",
      description:
        "元素必须是可滚动元素：即子元素的高度大于元素的高度，并且元素的 overflow 必须是 auto 或者 scroll 。",
      demo1: {
        title: "基础使用",
        code: code.code1
      }
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss">
/* @import url() */
.scroll-demo__box {
  height: 300px;
}

.scroll-demo__content {
  background: indianred;
  overflow: hidden;
  div {
    color: #ffffff;
    font-size: 12px;
    padding: 10px;
  }
}
</style>
