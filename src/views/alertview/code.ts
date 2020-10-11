/*
 * @Author: xry
 * @Description:
 * @Date: 2020-09-01 16:23:07
 * @LastEditTime: 2020-09-03 18:36:06
 * @FilePath: /Hui/rui/src/views/alertview/code.ts
 */
const code1: string = `<r-alert title="成功提示的文案" type="success"></r-alert>
<r-alert title="消息提示的文案" type="info"></r-alert>
<r-alert title="警告提示的文案" type="warning"></r-alert>
<r-alert title="错误提示的文案" type="error"></r-alert>`;

const code2: string = `<r-alert title="成功提示的文案" type="success" effect="dark"></r-alert>
<r-alert title="消息提示的文案" type="info" effect="dark"></r-alert>
<r-alert title="警告提示的文案" type="warning" effect="dark"></r-alert>
<r-alert title="错误提示的文案" type="error" effect="dark"></r-alert>`;

const code3: string = `<template>
  <r-alert title="不可关闭的 alert" type="success" :closable="false"></r-alert>
  <r-alert title="自定义 close-text" type="info" close-text="知道了"></r-alert>
  <r-alert title="设置了回调的 alert" type="warning" @close="hello"></r-alert>
</template>

<script>
export default {
  methods: {
     hello() {
      alert('Hello World!');
    }
  }
}
</script>`;

const code4: string = `<r-alert title="成功提示的文案" type="success" show-icon></r-alert>
<r-alert title="消息提示的文案" type="info" show-icon></r-alert>
<r-alert title="警告提示的文案" type="warning" show-icon></r-alert>
<r-alert title="错误提示的文案" type="error" show-icon></r-alert>`;

const code5: string = `<r-alert title="成功提示的文案" type="success" center show-icon></r-alert>
<r-alert title="消息提示的文案" type="info" center show-icon></r-alert>
<r-alert title="警告提示的文案" type="warning" center show-icon></r-alert>
<r-alert title="错误提示的文案" type="error" center show-icon></r-alert>`;

const code6: string = `<r-alert
  title="带辅助性文字介绍"
  type="success"
  description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
</r-alert>`;

const code7: string = `<r-alert
  title="成功提示的文案"
  type="success"
  description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
  show-icon>
</r-alert>

<r-alert
  title="消息提示的文案"
  type="info"
  description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
  show-icon>
</r-alert>

<r-alert
  title="警告提示的文案"
  type="warning"
  description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
  show-icon>
</r-alert>

<r-alert
  title="错误提示的文案"
  type="error"
  description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
  show-icon>
</r-alert>`;

export default {
  code1,
  code2,
  code3,
  code4,
  code5,
  code6,
  code7
};
