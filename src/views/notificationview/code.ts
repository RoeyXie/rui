/*
 * @Author: xry
 * @Description:
 * @Date: 2020-09-01 16:23:07
 * @LastEditTime: 2020-09-07 14:31:18
 * @FilePath: /Hui/rui/src/views/notificationview/code.ts
 */
const code1: string =`<template>
  <r-btn :plain="true" @click="open1">可自动关闭</r-btn>
  <r-btn :plain="true" @click="open2">不可自动关闭</r-btn>
</template>

<script>
export default {
  methods: {
    open1(value) {
      this.$ntf({
        title: "标题名称",
        message: "<i style='color:teal'>这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案</i>"
        dangerouslyUseHTMLString: true
      });
    }
    open2(value) {
      this.$ntf({
        title: "提示",
        message: "这是一条不会自动关闭的消息",
        duration: 0
    }
  }
}
</script>`;
const code2: string = `<template>
  <r-btn :plain="true" @click="open1">成功</r-btn>
  <r-btn :plain="true" @click="open2">警告</r-btn>
  <r-btn :plain="true" @click="open3">消息</r-btn>
  <r-btn :plain="true" @click="open4">错误</r-btn>
</template>

<script>
export default {
  methods: {
    open1(value) {
      this.$ntf({
        title: "成功",
        message: "这是一条成功的提示消息",
        type: "success"
      });
    },
    open2(value) {
      this.$ntf({
        title: "警告",
        message: "这是一条警告的提示消息",
        type: "warning"
      });
    },
    open3(value) {
      this.$ntf({
        title: "提示",
        message: "这是一条消息的提示消息",
        type: "info"
      });
    },
    open4(value) {
      this.$ntf({
        title: "错误",
        message: "这是一条错误的提示消息",
        type: "error"
      });
    }
  }
}
</script>`;
const code3: string = `<template>
  <r-btn :plain="true" @click="open1">右上角</r-btn>
  <r-btn :plain="true" @click="open2">右下角</r-btn>
  <r-btn :plain="true" @click="open3">左下角</r-btn>
  <r-btn :plain="true" @click="open4">左上角</r-btn>
</template>

<script>
export default {
  methods: {
    open1(value) {
      this.$ntf({
        title: "自定义位置",
        message: "右上角弹出的消息",
        position: "top-right"
      });
    },
    open2(value) {
      this.$ntf({
        title: "自定义位置",
        message: "右下角弹出的消息",
        position: "bottom-right"
      });
    },
    open3(value) {
      this.$ntf({
        title: "自定义位置",
        message: "左下角弹出的消息",
        position: "bottom-left"
      });
    },
    open4(value) {
      this.$ntf({
        title: "自定义位置",
        message: "左上角弹出的消息",
        position: "top-left"
      });
    }
  }
}
</script>`;
const code4: string = `<template>
  <r-btn :plain="true" @click="open">偏移的消息</r-btn>
</template>

<script>
export default {
  methods: {
    open(value) {
      this.$ntf({
        title: "偏移",
        message: "这是一条带有偏移的提示消息",
        offset: 100
    }
  }
}
</script>`;
const code5: string = `<template>
  <r-btn :plain="true" @click="open">使用 HTML 片段</r-btn>
</template>

<script>
export default {
  methods: {
    open(value) {
      this.$ntf({
        title: "HTML 片段",
        message: "<strong>这是 <i style='color:teal'>HTML</i> 片段</strong>",
        dangerouslyUseHTMLString: true
    }
  }
}
</script>`;
const code6: string = `<template>
  <r-btn :plain="true" @click="open">隐藏关闭按钮</r-btn>
</template>

<script>
export default {
  methods: {
    open(value) {
      this.$ntf({
        title: "info",
        message: "这是一条没有关闭按钮的消息",
        showClose: false,
        type: "success"
    }
  }
}
</script>`;

export default {
  code1,
  code2,
  code3,
  code4,
  code5,
  code6
};
