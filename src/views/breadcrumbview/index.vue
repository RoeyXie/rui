<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-09-04 17:26:30
 * @LastEditTime: 2020-09-25 18:23:18
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/src/views/breadcrumbview/index.vue
-->
<template>
  <div id="breadcrumbviewapp" class="breadcrumbviewapp">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <div class="suchas">
      <examplebox :code="demo1.code" :title="demo1.title" :notes="demo1.notes">
        <template v-slot:sourse>
          <r-breadcrumb separator="/">
            <r-breadcrumb-item :to="{ path: '/' }">首页</r-breadcrumb-item>
            <r-breadcrumb-item>
              <a href="/">活动管理</a>
            </r-breadcrumb-item>
            <r-breadcrumb-item>活动列表</r-breadcrumb-item>
            <r-breadcrumb-item>活动详情</r-breadcrumb-item>
          </r-breadcrumb>
        </template>
        <template v-slot:description>
          在 r-breadcrumb 中使用 r-breadcrumb-item 标签表示从首页开始的每一级。Rui 提供了一个
          <code>separator</code>
          属性，在 r-breadcrumb 标签中设置它来决定分隔符，它只能是字符串，默认为斜杠
          <code>/</code> 。
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo2.code" :title="demo2.title" :notes="demo2.notes">
        <template v-slot:sourse>
          <r-breadcrumb separator-class="icon-tubiaozhizuo-1">
            <r-breadcrumb-item :to="{ path: '/' }">首页</r-breadcrumb-item>
            <r-breadcrumb-item>活动管理</r-breadcrumb-item>
            <r-breadcrumb-item>活动列表</r-breadcrumb-item>
            <r-breadcrumb-item>活动详情</r-breadcrumb-item>
          </r-breadcrumb>
        </template>
        <template v-slot:description>
          通过设置
          <code>separator-class</code> 可使用相应的 <code>iconfont</code> 作为分隔符，注意这将使
          <code>separator</code> 设置失效
        </template>
      </examplebox>
    </div>
  </div>
</template>

<script>
import Examplebox from "@/components/Examplebox";
import code from "./code";

export default {
  name: "breadcrumbview",
  components: {
    Examplebox
  },
  data() {
    return {
      title: "Breadcrumb 面包屑",
      description: "显示当前页面的路径，快速返回之前的任意页面。",
      demo1: {
        title: "基础用法",
        notes: "适用广泛的基础用法。",
        code: code.code1
      },
      demo2: {
        title: "图标分隔符",
        code: code.code2
      }
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.breadcrumbviewapp {
  padding-bottom: 200px;
  p {
    margin: 14px 0;
  }
}
</style>
