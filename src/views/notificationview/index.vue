<template>
  <div class="notificationviewapp" id="notificationviewapp">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>

    <div class="suchas">
      <examplebox :code="demo1.code" :title="demo1.title" :notes="demo1.notes">
        <template v-slot:sourse>
          <r-btn plain @click="open">可自动关闭</r-btn>
          <r-btn plain @click="open1">不可自动关闭</r-btn>
        </template>
        <template v-slot:description>
          <div>
            Notification 组件提供通知功能，rui 注册了
            <code>$notify</code> 方法，接收一个
            <code>options</code>
            字面量参数，在最简单的情况下，你可以设置
            <code>title</code> 字段和
            <code>message</code>
            字段，用于设置通知的标题和正文。默认情况下，经过一段时间后 Notification
            组件会自动关闭，但是通过设置
            <code>duration</code>
            ，可以控制关闭的时间间隔，特别的是，如果设置为
            <code>0</code> ，则不会自动关闭。注意： <code>duration</code> 接收一个
            <code>Number</code> ，单位为毫秒，默认为 <code>4500</code> 。
          </div>
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo2.code" :title="demo2.title" :notes="demo2.notes">
        <template v-slot:sourse>
          <r-btn :plain="true" @click="open2">成功</r-btn>
          <r-btn :plain="true" @click="open3">警告</r-btn>
          <r-btn :plain="true" @click="open4">消息</r-btn>
          <r-btn :plain="true" @click="open5">错误</r-btn>
        </template>
        <template v-slot:description>
          <div>
            rui 为 Notification 组件准备了四种通知类型：
            <code>success</code> , <code>warning</code> , <code>info</code> ,
            <code>error</code> 。通过 <code>type</code> 字段来设置，除此以外的值将被忽略。
          </div>
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo3.code" :title="demo3.title" :notes="demo3.notes">
        <template v-slot:sourse>
          <r-btn :plain="true" @click="open6">右上角</r-btn>
          <r-btn :plain="true" @click="open7">右下角</r-btn>
          <r-btn :plain="true" @click="open8">左下角</r-btn>
          <r-btn :plain="true" @click="open9">左上角</r-btn>
        </template>
        <template v-slot:description>
          <div>
            使用 <code>position</code> 属性定义 Notification 的弹出位置，支持四个选项：
            <code>top-right</code> 、 <code>top-left</code> 、 <code>bottom-right</code> 、
            <code>bottom-left</code> ，默认为 <code>top-right</code> 。
          </div>
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo4.code" :title="demo4.title" :notes="demo4.notes">
        <template v-slot:sourse>
          <r-btn :plain="true" @click="open10">偏移的消息</r-btn>
        </template>
        <template v-slot:description>
          <div>
            Notification 提供设置偏移量的功能，通过设置
            <code>offset</code>
            字段，可以使弹出的消息距屏幕边缘偏移一段距离。注意在同一时刻，所有的 Notification
            实例应当具有一个相同的偏移量。
          </div>
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo5.code" :title="demo5.title" :notes="demo5.notes">
        <template v-slot:sourse>
          <r-btn :plain="true" @click="openHTML">使用 HTML 片段</r-btn>
        </template>
        <template v-slot:description>
          <div>
            将 <code>dangerouslyUseHTMLString</code> 属性设置为 <code>true</code> ，message
            就会被当作 HTML 片段处理。
          </div>
        </template>
      </examplebox>
    </div>
    <div class="warning">
      <p>
        <code>message</code> 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML
        是非常危险的，因为容易导致 <span style="color:#409eff">XSS</span> 攻击。
      </p>
      <p>
        因此在
        <code>dangerouslyUseHTMLString</code> 打开的情况下，请确保
        <code>message</code> 的内容是可信的， <b>永远不要</b> 将用户提交的内容赋值给
        <code>message</code> 属性。
      </p>
    </div>

    <div class="suchas">
      <examplebox :code="demo6.code" :title="demo6.title" :notes="demo6.notes">
        <template v-slot:sourse>
          <r-btn :plain="true" @click="open11">隐藏关闭按钮</r-btn>
        </template>
        <template v-slot:description>
          <code> 将 <code>showClose</code> 属性设置为 <code>false</code> 即可隐藏关闭按钮。</code>
        </template>
      </examplebox>
    </div>
  </div>
</template>

<script>
import code from "./code";

export default {
  name: "notificationviewapp",
  data() {
    return {
      title: "Notification 通知",
      description: "悬浮出现在页面角落，显示全局的通知提醒消息。",
      demo1: {
        title: "基础用法",
        notes: "适用性广泛的通知栏",
        code: code.code1
      },
      demo2: {
        title: "带有倾向性",
        notes: "带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息",
        code: code.code2
      },
      demo3: {
        title: "自定义弹出位置",
        notes: "可以让 Notification 从屏幕四角中的任意一角弹出",
        code: code.code3
      },
      demo4: {
        title: "带有偏移",
        notes: "让 Notification 偏移一些位置",
        code: code.code4
      },
      demo5: {
        title: "使用 HTML 片段",
        notes: "message 属性支持传入 HTML 片段",
        code: code.code5
      },
      demo6: {
        title: "隐藏关闭按钮",
        notes: "可以不显示关闭按钮",
        code: code.code5
      }
    };
  },
  methods: {
    open() {
      this.$ntf({
        title: "提示",
        dangerouslyUseHTMLString: true,
        message:
          "<i style='color: teal'>这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案</i>"
      });
    },
    open1() {
      this.$ntf({
        title: "提示",
        message: "这是一条不会自动关闭的消息",
        duration: 0
      });
    },
    open2() {
      this.$ntf({
        title: "成功",
        message: "这是一条成功的提示消息",
        type: "success"
      });
    },
    open3() {
      this.$ntf({
        title: "警告",
        message: "这是一条警告的提示消息",
        type: "warning"
      });
    },
    open4() {
      this.$ntf({
        title: "消息",
        message: "这是一条消息的提示消息",
        type: "info"
      });
    },
    open5() {
      this.$ntf({
        title: "错误",
        message: "这是一条错误的提示消息",
        type: "error"
      });
    },
    open6() {
      this.$ntf({
        title: "自定义位置",
        message: "右上角弹出的消息"
      });
    },
    open7() {
      this.$ntf({
        title: "自定义位置",
        message: "右下角弹出的消息",
        position: "bottom-right"
      });
    },
    open8() {
      this.$ntf({
        title: "自定义位置",
        message: "左下角弹出的消息",
        position: "bottom-left"
      });
    },
    open9() {
      this.$ntf({
        title: "自定义位置",
        message: "左上角弹出的消息",
        position: "top-left"
      });
    },
    open10() {
      this.$ntf({
        title: "偏移",
        message: "这是一条带有偏移的提示消息",
        offset: 100
      });
    },
    openHTML() {
      this.$ntf({
        title: "HTML 片段",
        dangerouslyUseHTMLString: true,
        message: "<strong>这是 <i style = 'color: teal'>HTML</i> 片段</strong>"
      });
    },
    open11() {
      this.$ntf({
        title: "Info",
        message: "这是一条没有关闭按钮的消息",
        showClose: false,
        type: "success"
      });
    }
  }
};
</script>

<style lang="scss">
.notificationviewapp {
  padding-bottom: 200px;
  p {
    margin: 14px 0;
  }
  .r-btn + .r-btn {
    margin-left: 10px;
  }
}
</style>
