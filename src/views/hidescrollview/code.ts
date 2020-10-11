/*
 * @Author: xry
 * @Description:
 * @Date: 2020-09-02 18:31:59
 * @LastEditTime: 2020-09-25 14:27:13
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/src/views/hidescrollview/code.ts
 */
const string = "`这是${n}首简单的小情歌`";
const code1: string = `<template>
  <div class="scroll-demo__box">
    <r-hide-scroll maxHeight="100%">
      <div class="scroll-demo__content">
        <div v-for="n in 50" :key="n">{{ ${string} }}</div>
      </div>
    </r-hide-scroll>
  </div>
</template>

<style lang="scss">
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
`;

export default {
  code1
};
