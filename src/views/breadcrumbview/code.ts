/*
 * @Author: xry
 * @Description:
 * @Date: 2020-08-31 18:40:27
 * @LastEditTime: 2020-09-04 17:48:16
 * @FilePath: /Hui/rui/src/views/breadcrumbview/code.ts
 */
const code1: string = `<template>
  <r-breadcrumb separator="/">
    <r-breadcrumb-item :to="{ path: '/' }">首页</r-breadcrumb-item>
    <r-breadcrumb-item>
      <a href="/">活动管理</a>
    </r-breadcrumb-item>
    <r-breadcrumb-item>活动列表</r-breadcrumb-item>
    <r-breadcrumb-item>活动详情</r-breadcrumb-item>
  </r-breadcrumb>
</template>`;

const code2: string = `<template>
  <r-breadcrumb separator-class="icon-tubiaozhizuo-1">
    <r-breadcrumb-item :to="{ path: '/' }">首页</r-breadcrumb-item>
    <r-breadcrumb-item>活动管理</r-breadcrumb-item>
    <r-breadcrumb-item>活动列表</r-breadcrumb-item>
    <r-breadcrumb-item>活动详情</r-breadcrumb-item>
  </r-breadcrumb>
</template>`;
export default {
  code1,
  code2
};
