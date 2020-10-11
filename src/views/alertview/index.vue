<template>
  <div id="alertviewapp" class="alertviewapp">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <div class="suchas">
      <examplebox :code="demo1.code" :title="demo1.title" :notes="demo1.notes">
        <template v-slot:sourse>
          <r-alert title="成功提示的文案" type="success"></r-alert>
          <r-alert title="消息提示的文案" type="info"></r-alert>
          <r-alert title="警告提示的文案" type="warning"></r-alert>
          <r-alert title="错误提示的文案" type="error"></r-alert>
        </template>
        <template v-slot:description>
          Alert 组件提供四种主题，由
          <code>type</code> 属性指定，默认值为 <code>info</code> 。
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo2.code" :title="demo2.title" :notes="demo2.notes">
        <template v-slot:sourse>
          <r-alert title="成功提示的文案" type="success" effect="dark" show-icon></r-alert>
          <r-alert title="消息提示的文案" type="info" effect="dark" show-icon></r-alert>
          <r-alert title="警告提示的文案" type="warning" effect="dark" show-icon></r-alert>
          <r-alert title="错误提示的文案" type="error" effect="dark" show-icon></r-alert>
        </template>
        <template v-slot:description>
          通过设置
          <code>effect</code> 属性来改变主题，默认为 <code>light</code> 。
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo3.code" :title="demo3.title" :notes="demo3.notes">
        <template v-slot:sourse>
          <r-alert title="不可关闭的 alert" type="success" :closable="false"></r-alert>
          <r-alert title="自定义 close-text" type="info" close-text="知道了"></r-alert>
          <r-alert title="设置了回调的 alert" type="warning" @close="hello"></r-alert>
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo4.code" :title="demo4.title" :notes="demo4.notes">
        <template v-slot:sourse>
          <r-alert title="成功提示的文案" type="success" show-icon></r-alert>
          <r-alert title="消息提示的文案" type="info" show-icon></r-alert>
          <r-alert title="警告提示的文案" type="warning" show-icon></r-alert>
          <r-alert title="错误提示的文案" type="error" show-icon></r-alert>
        </template>
        <template v-slot:description>
          通过设置
          <code>show-icon</code> 属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo5.code" :title="demo5.title" :notes="demo5.notes">
        <template v-slot:sourse>
          <r-alert title="成功提示的文案" type="success" center show-icon></r-alert>
          <r-alert title="消息提示的文案" type="info" center show-icon></r-alert>
          <r-alert title="警告提示的文案" type="warning" center show-icon></r-alert>
          <r-alert title="错误提示的文案" type="error" center show-icon></r-alert>
        </template>
        <template v-slot:description></template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo6.code" :title="demo6.title" :notes="demo6.notes">
        <template v-slot:sourse>
          <r-alert
            title="带辅助性文字介绍"
            type="success"
            description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
          ></r-alert>
        </template>
        <template v-slot:description></template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo7.code" :title="demo7.title" :notes="demo7.notes">
        <template v-slot:sourse>
          <r-alert
            title="成功提示的文案"
            type="success"
            description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
            show-icon
          ></r-alert>
          <r-alert
            title="消息提示的文案"
            type="info"
            description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
            show-icon
          ></r-alert>
          <r-alert
            title="警告提示的文案"
            type="warning"
            description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
            show-icon
          ></r-alert>
          <r-alert
            title="错误提示的文案"
            type="error"
            description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
            show-icon
          ></r-alert>
        </template>
        <template v-slot:description></template>
      </examplebox>
    </div>
  </div>
</template>

<script>
import Examplebox from "@/components/Examplebox";
import code from "./code";

export default {
  name: "alertviewapp",
  components: {
    Examplebox
  },
  data() {
    return {
      title: "Alert 警告",
      description: "用于页面中展示重要的提示信息。",
      demo1: {
        title: "基础用法",
        notes: "页面中的非浮层元素，不会自动消失。",
        code: code.code1
      },
      demo2: {
        title: "主题",
        notes: "Alert 组件提供了两个不同的主题： light 和 dark 。",
        code: code.code2
      },
      demo3: {
        title: "自定义关闭按钮",
        notes: "自定义关闭按钮为文字或其他符号。",
        code: code.code3
      },
      demo4: {
        title: "带有 icon",
        notes: "表示某种状态时提升可读性。",
        code: code.code4
      },
      demo5: {
        title: "文字居中",
        notes: "使用 center 属性让文字水平居中。",
        code: code.code5
      },
      demo6: {
        title: "带有辅助性文字介绍",
        notes: "包含标题和内容，解释更详细的警告。",
        code: code.code6
      },
      demo7: {
        title: "带有 icon 和辅助性文字介绍",
        code: code.code7
      }
    };
  },
  methods: {
    hello() {
      window.alert("Hello World!");
    }
  }
};
</script>

<style lang="scss">
.alertviewapp {
  padding-bottom: 200px;
  p {
    margin: 14px 0;
  }
}

.description {
  pre {
    margin: 0;
  }
}

.alertapp + .alertapp {
  margin-top: 20px;
}
</style>
