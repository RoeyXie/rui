<template>
  <div class="messageview" id="messageview">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>

    <div class="suchas">
      <examplebox :code="demo1.code" :title="demo1.title" :notes="demo1.notes">
        <template v-slot:sourse>
          <r-btn :plain="true" @click="open">打开消息提示</r-btn>
        </template>
        <template v-slot:description>
          Message 在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释，文末有
          options 列表，可以结合 Notification 的文档理解它们。rui 注册了一个
          <code>$msg</code> 方法用于调用
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo2.code" :title="demo2.title" :notes="demo2.notes">
        <template v-slot:sourse>
          <r-btn :plain="true" @click="open1">成功</r-btn>
          <r-btn :plain="true" @click="open2">警告</r-btn>
          <r-btn :plain="true" @click="open3">消息</r-btn>
          <r-btn :plain="true" @click="open4">错误</r-btn>
        </template>
        <template v-slot:description>
          当需要自定义更多属性时，Message 也可以接收一个对象为参数。比如，设置
          <code>type</code> 字段可以定义不同的状态，默认为 <code>info</code> 。此时正文内容以
          <code>message</code> 的值传入。
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo3.code" :title="demo3.title" :notes="demo3.notes">
        <template v-slot:sourse>
          <r-btn :plain="true" @click="open5">成功</r-btn>
          <r-btn :plain="true" @click="open6">警告</r-btn>
          <r-btn :plain="true" @click="open7">消息</r-btn>
          <r-btn :plain="true" @click="open8">错误</r-btn>
        </template>
        <template v-slot:description>
          默认的 Message 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用
          <code>showClose</code> 字段。此外，和 Notification 一样，Message 拥有可控的
          <code>duration</code> ，设置 <code>0</code> 为不会被自动关闭，默认为 3000 毫秒。
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo4.code" :title="demo4.title" :notes="demo4.notes">
        <template v-slot:sourse>
          <r-btn :plain="true" @click="openCenter">文字居中</r-btn>
        </template>
        <template v-slot:description></template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo5.code" :title="demo5.title" :notes="demo5.notes">
        <template v-slot:sourse>
          <r-btn :plain="true" @click="openHTML">使用 HTML 片段</r-btn>
        </template>
        <template v-slot:description>
          将
          <code>dangerouslyUseHTMLString</code> 属性设置为 <code>true</code> ，message 就会被当作
          HTML 片段处理。
        </template>
      </examplebox>
    </div>
  </div>
</template>

<script>
import code from "./code";

export default {
  name: "messageview",
  data() {
    return {
      title: "Message 消息提示",
      description:
        "常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。",
      demo1: {
        title: "基础用法",
        notes: "从顶部出现，3 秒后自动消失。",
        code: code.code1
      },
      demo2: {
        title: "不同状态",
        notes: "用来显示「成功、警告、消息、错误」类的操作反馈。",
        code: code.code2
      },
      demo3: {
        title: "可关闭",
        notes: "可以添加关闭按钮。",
        code: code.code3
      },
      demo4: {
        title: "文字居中",
        notes: "使用 center 属性让文字水平居中。",
        code: code.code4
      },
      demo5: {
        title: "使用 HTML 片段",
        notes: "message 属性支持传入 HTML 片段",
        code: code.code5
      }
    };
  },
  methods: {
    open() {
      this.$msg("这是一条消息提示");
    },
    open1() {
      this.$msg({
        message: "恭喜你，这是一条成功消息",
        type: "success"
      });
    },
    open2() {
      this.$msg({
        message: "警告哦，这是一条警告消息",
        type: "warning"
      });
    },
    open3() {
      this.$msg("这是一条消息提示");
    },
    open4() {
      this.$msg({
        message: "警告哦，这是一条警告消息",
        type: "error"
      });
    },
    open5() {
      this.$msg({
        showClose: true,
        message: "恭喜你，这是一条成功消息",
        type: "success"
      });
    },
    open6() {
      this.$msg({
        showClose: true,
        message: "警告哦，这是一条警告消息",
        type: "warning"
      });
    },
    open7() {
      this.$msg({
        showClose: true,
        message: "这是一条消息提示"
      });
    },
    open8() {
      this.$msg({
        showClose: true,
        message: "警告哦，这是一条警告消息",
        type: "error"
      });
    },
    openCenter() {
      this.$msg({
        message: "居中的文字",
        center: true
      });
    },
    openHTML() {
      this.$msg({
        dangerouslyUseHTMLString: true,
        message: "<strong>这是 <i>HTML</i> 片段</strong>"
      });
    }
  }
};
</script>

<style lang="scss">
.messageview {
  padding-bottom: 200px;
  p {
    margin: 14px 0;
  }
  .demoRadio + .demoRadio {
    margin-top: 20px;
  }
  .r_radio_group + .r_radio_group {
    margin-top: 20px;
  }
  .r-btn + .r-btn {
    margin-left: 10px;
  }
}
</style>
