/*
 * @Author: xry
 * @Description:
 * @Date: 2020-09-02 18:31:59
 * @LastEditTime: 2020-09-25 17:23:33
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/src/views/scrollview/code2.ts
 */
const code1: string = `<template>
  <div style="height: 350px;">
    <r-scroll
      :height="100%"
      :to="scrollTop"
      :el="scrollEl"
      @scroll="onScroll"
      @scroll-end="scrollEnd"
    >
      <el-button @click="scrollTo(200)" size="small" type="primary">跳转到200px</el-button>
      <el-button @click="scrollTo('.d-scroll-minddle')" size="small" type="primary">跳转到中部按钮</el-button>
      <el-button @click="scrollTo('.d-scroll-bottom')" size="small" type="primary">跳转到底部按钮</el-button>
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
          >
          回到顶部（中部按钮）
        </el-button>
      </div>
      <el-button @click="scrollTo(0)" class="d-scroll-bottom" size="small" type="danger">
        回到顶部（底部按钮）
      </el-button>
    </r-scroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollTop: undefined,
      scrollEl: ""
    };
  },
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
    scrollEnd() {
      // 使得可以重复触发滚动事件
      this.scrollTop = undefined;
      this.scrollEl = "";
    }
  }
};
</script>`;

export default {
  code1
};
