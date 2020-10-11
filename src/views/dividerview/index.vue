<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-09-04 18:55:18
 * @LastEditTime: 2020-09-25 18:28:37
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/src/views/dividerview/index.vue
-->
<template>
  <div class="dividerviewapp" id="dividerviewapp">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <div class="suchas">
      <examplebox :code="demo1.code" :title="demo1.title" :notes="demo1.notes">
        <template v-slot:sourse>
          <div>
            <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
            <r-divider></r-divider>
            <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
          </div>
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo2.code" :title="demo2.title" :notes="demo2.notes">
        <template v-slot:sourse>
          <div>
            <span>头上一片晴天，心中一个想念</span>
            <r-divider content-position="left">少年包青天</r-divider>
            <span>饿了别叫妈, 叫饿了么</span>
            <r-divider>
              <i class="iconfont icon-bianji"></i>
            </r-divider>
            <span>为了无法计算的价值</span>
            <r-divider content-position="right">阿里云</r-divider>
          </div>
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo3.code" :title="demo3.title" :notes="demo3.notes">
        <template v-slot:sourse>
          <div>
            <span>雨纷纷</span>
            <r-divider direction="vertical"></r-divider>
            <span>旧故里</span>
            <r-divider direction="vertical"></r-divider>
            <span>草木深</span>
          </div>
        </template>
      </examplebox>
    </div>
  </div>
</template>

<script>
import Examplebox from "@/components/Examplebox";
import code from "./code";

export default {
  name: "dividerviewapp",
  components: {
    Examplebox
  },
  data(){
    return {
      title: "Divider 分割线",
      description:
        "区隔内容的分割线。",
      demo1: {
        title: "基础用法",
        notes: "对不同章节的文本段落进行分割。",
        code: code.code1
      },
      demo2: {
        title: "设置文案",
        notes: "可以在分割线上自定义文案内容。",
        code: code.code2
      },
      demo3: {
        title: "垂直分割",
        code: code.code3
      },
    }
  }
};
</script>

<style lang="scss">
.dividerviewapp {
  padding-bottom: 200px;
  p {
    margin: 14px 0;
  }
}
</style>
