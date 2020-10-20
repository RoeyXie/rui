<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-09-25 15:51:42
 * @LastEditTime: 2020-10-20 15:44:24
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/src/views/scrollview/index.vue
-->
<template>
  <div class="scrollview">
    <h2>{{ title }}</h2>
    <div class="suchas">
      <examplebox :code="demo1.code" :title="demo1.title" :notes="demo1.notes">
        <template v-slot:sourse>
          <div style="height: 350px; overflow: auto;">
            <r-scroll
              height="100%"
              :to="scrollTop"
              :el="scrollEl"
              @scroll="onScroll"
              @scroll-end="scrollEnd"
            >
              <el-button @click="scrollTo(200)" size="small" type="primary">跳转到200px</el-button>
              <el-button @click="scrollTo('.d-scroll-minddle')" size="small" type="primary"
                >跳转到中部按钮</el-button
              >
              <el-button @click="scrollTo('.d-scroll-bottom')" size="small" type="primary"
                >跳转到底部按钮</el-button
              >
              <div v-for="n of 7" :key="n" class="d-scroll-text">
                <p>这是</p>
                <p>很长的</p>
                <p>文字</p>
                <p>~</p>
                <p>~</p>
                <p>~</p>
                <el-button
                  v-if="n === 3"
                  @click="scrollTo(0)"
                  class="d-scroll-minddle"
                  size="small"
                  type="warning"
                  >回到顶部（中部按钮）</el-button
                >
              </div>
              <el-button @click="scrollTo(0)" class="d-scroll-bottom" size="small" type="danger"
                >回到顶部（底部按钮）</el-button
              >
            </r-scroll>
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
  name: "scrollview",
  data() {
    return {
      title: "Scroll 滚动",
      demo1: {
        title: "基础使用",
        notes:
          "在保证元素可以滚动的情况下（默认设置height:100%，通过height属性修改），通过输入 scrollTop 或一个元素的 selector ，或者调用 scrollTo(target)实现跳转",
        code: code.code1
      },
      scrollTop: undefined,
      scrollEl: ""
    };
  },
  created() {},
  mounted() {},
  methods: {
    scrollTo(target) {
      if (typeof target === "number") {
        this.scrollTop = target;
      } else if (typeof target === "string") {
        this.scrollEl = target;
      }
    },
    onScroll(scrollTop) {
      // console.log(scrollTop);
    },
    scrollEnd(e) {
      // 使得可以重复触发滚动事件
      this.scrollTop = undefined;
      this.scrollEl = "";
      // console.log(e);
    }
  }
};
</script>
<style lang="scss">
/* @import url() */
.d-scroll-text {
  p {
    font-size: 12px;
  }
}
</style>
