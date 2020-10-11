/*
 * @Author: xry
 * @Description:
 * @Date: 2020-09-01 16:23:07
 * @LastEditTime: 2020-09-07 14:24:26
 * @FilePath: /Hui/rui/src/views/messageview/code.ts
 */
const code1: string =`<template>
  <r-btn :plain="true" @click="open">打开消息提示</r-btn>
</template>

<script>
export default {
  methods: {
     open(value) {
      this.$msg("这是一条消息提示");
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
      this.$msg({
        message: "恭喜你，这是一条成功消息",
        type: "success"
      });
    },
    open2(value) {
      this.$msg({
        message: "警告哦，这是一条警告消息",
        type: "warning"
      });
    },
    open3(value) {
      this.$msg("这是一条消息提示");
    },
    open4(value) {
      this.$msg({
        message: "错了哦，这是一条错误消息",
        type: "error"
      });
    }
  }
}
</script>`;
const code3: string = `<template>
  <r-btn :plain="true" @click="open1">成功</r-btn>
  <r-btn :plain="true" @click="open2">警告</r-btn>
  <r-btn :plain="true" @click="open3">消息</r-btn>
  <r-btn :plain="true" @click="open4">错误</r-btn>
</template>

<script>
export default {
  methods: {
    open1(value) {
      this.$msg({
        showClose: true,
        message: "恭喜你，这是一条成功消息",
        type: "success"
      });
    },
    open2(value) {
      this.$msg({
        showClose: true,
        message: "警告哦，这是一条警告消息",
        type: "warning"
      });
    },
    open3(value) {
      this.$msg({
        showClose: true,
        message: "这是一条消息提示"
      });
    },
    open4(value) {
      this.$msg({
        showClose: true,
        message: "错了哦，这是一条错误消息",
        type: "error"
      });
    }
  }
}
</script>`;
const code4: string = `<template>
  <r-btn :plain="true" @click="openCenter">文字居中</r-btn>
</template>

<script>
export default {
  methods: {
     openCenter(value) {
      this.$msg({
        center: true,
        message: "居中的文字"
      });
    }
  }
}
</script>`;
const code5: string = `<template>
  <r-btn :plain="true" @click="openHTML">使用 HTML 片段</r-btn>
</template>

<script>
export default {
  methods: {
     openHTML(value) {
      this.$msg({
        dangerouslyUseHTMLString: true,
        message: "<strong>这是 <i>HTML</i> 片段</strong>"
      });
    }
  }
}
</script>`;

export default {
  code1,
  code2,
  code3,
  code4,
  code5
};
