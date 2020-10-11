/*
 * @Author: xry
 * @Description:
 * @Date: 2020-08-30 18:24:15
 * @LastEditTime: 2020-08-31 17:20:53
 * @FilePath: /Hui/rui/src/views/layoutview/code.ts
 */
const code1: string = `<r-row>
  <r-col :span="24"><div class="grid-content bg-purple-dark"></div></r-col>
</r-row>
<r-row>
  <r-col :span="12"><div class="grid-content bg-purple"></div></r-col>
  <r-col :span="12"><div class="grid-content bg-purple-light"></div></r-col>
</r-row>
<r-row>
  <r-col :span="8"><div class="grid-content bg-purple"></div></r-col>
  <r-col :span="8"><div class="grid-content bg-purple-light"></div></r-col>
  <r-col :span="8"><div class="grid-content bg-purple"></div></r-col>
</r-row>
<r-row>
  <r-col :span="6"><div class="grid-content bg-purple"></div></r-col>
  <r-col :span="6"><div class="grid-content bg-purple-light"></div></r-col>
  <r-col :span="6"><div class="grid-content bg-purple"></div></r-col>
  <r-col :span="6"><div class="grid-content bg-purple-light"></div></r-col>
</r-row>
<r-row>
  <r-col :span="4"><div class="grid-content bg-purple"></div></r-col>
  <r-col :span="4"><div class="grid-content bg-purple-light"></div></r-col>
  <r-col :span="4"><div class="grid-content bg-purple"></div></r-col>
  <r-col :span="4"><div class="grid-content bg-purple-light"></div></r-col>
  <r-col :span="4"><div class="grid-content bg-purple"></div></r-col>
  <r-col :span="4"><div class="grid-content bg-purple-light"></div></r-col>
</r-row>

<style>
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>`;

const code2: string = `<r-row :gutter="20">
  <r-col :span="4"><div class="grid-content bg-purple"></div></r-col>
  <r-col :span="4"><div class="grid-content bg-purple"></div></r-col>
  <r-col :span="4"><div class="grid-content bg-purple"></div></r-col>
  <r-col :span="4"><div class="grid-content bg-purple"></div></r-col>
</r-row>

<style>
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>`;

const code3: string = `<r-row :gutter="20">
  <r-col :span="16"><div class="grid-content bg-purple"></div></r-col>
  <r-col :span="8"><div class="grid-content bg-purple"></div></r-col>
</r-row>
<r-row :gutter="20">
  <r-col :span="8"><div class="grid-content bg-purple"></div></r-col>
  <r-col :span="8"><div class="grid-content bg-purple"></div></r-col>
  <r-col :span="4"><div class="grid-content bg-purple"></div></r-col>
  <r-col :span="4"><div class="grid-content bg-purple"></div></r-col>
</r-row>
<r-row :gutter="20">
  <r-col :span="4"><div class="grid-content bg-purple"></div></r-col>
  <r-col :span="16"><div class="grid-content bg-purple"></div></r-col>
  <r-col :span="4"><div class="grid-content bg-purple"></div></r-col>
</r-row>

<style>
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>`;

const code4: string = `<r-row :gutter="20">
  <r-col :span="6"><div class="grid-content bg-purple"></div></r-col>
  <r-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></r-col>
</r-row>
<r-row :gutter="20">
  <r-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></r-col>
  <r-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></r-col>
</r-row>
<r-row :gutter="20">
  <r-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></r-col>
</r-row>

<style>
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>`;

const code5: string = `<r-row type="flex" class="row-bg">
  <r-col :span="6"><div class="grid-content bg-purple"></div></r-col>
  <r-col :span="6"><div class="grid-content bg-purple"></div></r-col>
  <r-col :span="6"><div class="grid-content bg-purple"></div></r-col>
</r-row>
<r-row type="flex" class="row-bg" justify="center">
  <r-col :span="6"><div class="grid-content bg-purple"></div></r-col>
  <r-col :span="6"><div class="grid-content bg-purple"></div></r-col>
  <r-col :span="6"><div class="grid-content bg-purple"></div></r-col>
</r-row>
<r-row type="flex" class="row-bg" justify="end">
  <r-col :span="6"><div class="grid-content bg-purple"></div></r-col>
  <r-col :span="6"><div class="grid-content bg-purple"></div></r-col>
  <r-col :span="6"><div class="grid-content bg-purple"></div></r-col>
</r-row>
<r-row type="flex" class="row-bg" justify="space-between">
  <r-col :span="6"><div class="grid-content bg-purple"></div></r-col>
  <r-col :span="6"><div class="grid-content bg-purple"></div></r-col>
  <r-col :span="6"><div class="grid-content bg-purple"></div></r-col>
</r-row>
<r-row type="flex" class="row-bg" justify="space-around">
  <r-col :span="6"><div class="grid-content bg-purple"></div></r-col>
  <r-col :span="6"><div class="grid-content bg-purple"></div></r-col>
  <r-col :span="6"><div class="grid-content bg-purple"></div></r-col>
</r-row>

<style>
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>`;

export default {
  code1,
  code2,
  code3,
  code4,
  code5
};
