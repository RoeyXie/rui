<template>
  <div class="cardviewapp" id="cardviewapp">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <div class="suchas">
      <examplebox :code="demo1.code" :title="demo1.title" :notes="demo1.notes">
        <template v-slot:sourse>
          <r-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
              <r-btn style="float: right; padding: 3px 0" type="text">操作按钮</r-btn>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{ "列表内容 " + o }}
            </div>
          </r-card>
        </template>
        <template v-slot:description>
          Card 组件包括
          <code>header</code> 和 <code>body</code> 部分， <code>header</code> 部分需要有显式具名
          slot 分发，同时也是可选的。
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo2.code" :title="demo2.title" :notes="demo2.notes">
        <template v-slot:sourse>
          <r-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
              {{ "列表内容 " + o }}
            </div>
          </r-card>
        </template>
        <template v-slot:description></template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo3.code" :title="demo3.title" :notes="demo3.notes">
        <template v-slot:sourse>
          <r-row>
            <r-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
              <r-card :body-style="{ padding: '0px' }">
                <img
                  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  class="image"
                />
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <r-btn type="text" class="button">操作按钮</r-btn>
                  </div>
                </div>
              </r-card>
            </r-col>
          </r-row>
        </template>
        <template v-slot:description>
          配置
          <code>body-style</code> 属性来自定义 <code>body</code> 部分的
          <code>style</code> ，我们还使用了布局组件。
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo4.code" :title="demo4.title" :notes="demo4.notes">
        <template v-slot:sourse>
          <r-row :gutter="12">
            <r-col :span="8">
              <r-card shadow="always">总是显示</r-card>
            </r-col>
            <r-col :span="8">
              <r-card shadow="hover">鼠标悬浮时显示</r-card>
            </r-col>
            <r-col :span="8">
              <r-card shadow="never">从不显示</r-card>
            </r-col>
          </r-row>
        </template>
        <template v-slot:description>
          通过
          <code>shadow</code> 属性设置卡片阴影出现的时机： <code>always</code>、
          <code>hover</code> 或 <code>never</code> 。
        </template>
      </examplebox>
    </div>
  </div>
</template>

<script>
import code from "./code";

export default {
  name: "cardviewapp",
  data() {
    return {
      title: "Card 卡片",
      description: "将信息聚合在卡片容器中展示。",
      demo1: {
        title: "基础用法",
        notes: "包含标题，内容和操作。",
        code: code.code1
      },
      demo2: {
        title: "简单卡片",
        notes: "卡片可以只有内容区域。",
        code: code.code2
      },
      demo3: {
        title: "带图片",
        notes: "可配置定义更丰富的内容展示。",
        code: code.code3
      },
      demo4: {
        title: "卡片阴影",
        notes: "可对阴影的显示进行配置。",
        code: code.code4
      },
      currentDate: new Date().toISOString(),
      text: "'列表内容 ' + o",
      timetext: "{{ currentDate }}"
    };
  }
};
</script>

<style lang="scss">
.suchas {
  .text {
    font-size: 14px;
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
    clear: both;
  }
  .box-card {
    width: 480px;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }
}

.cardviewapp {
  padding-bottom: 200px;
  p {
    margin: 14px 0;
  }
}
</style>
