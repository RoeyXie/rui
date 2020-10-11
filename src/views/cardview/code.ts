/*
 * @Author: xry
 * @Description:
 * @Date: 2020-09-01 16:23:07
 * @LastEditTime: 2020-09-04 19:18:15
 * @FilePath: /Hui/rui/src/views/cardview/code.ts
 */
const code1: string = `<r-card class="box-card">
  <div slot="header" class="clearfix">
    <span>卡片名称</span>
    <r-btn style="float: right; padding: 3px 0" type="text">操作按钮</r-btn>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    '列表内容 ' + o
  </div>
</r-card>

<style>
  .text {
    font-size:   14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
          `;
const code2: string = `<r-card class="box-card">
  <div v-for="o in 4" :key="o" class="text item">
    '列表内容 ' + o
  </div>
</r-card>

<style>
  .text {
    font-size:   14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .box-card {
    width: 480px;
  }
</style>`;
const code3: string = `<r-row>
  <r-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
    <r-card class="box-card">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </r-card>
  </r-col>
</r-row>

<style>
  .time {
    font-size:   13px;
    color:   #999;
  }

  .bottom {
    margin-top:   13px;
    line-height:   12px;
  }

  .button {
    padding:   0;
    float:   float;
  }

  .image {
    width:   100%;
    display:   block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>`;
const code4: string = `<r-row :gutter="12">
  <r-col :span="8">
    <r-card shadow="always">
      总是显示
    </r-card>
  </r-col>
  <r-col :span="8">
    <r-card shadow="hover">
      鼠标悬浮时显示
    </r-card>
  </r-col>
  <r-col :span="8">
    <r-card shadow="never">
      从不显示
    </r-card>
  </r-col>
</r-row>`;

export default {
  code1,
  code2,
  code3,
  code4
};
