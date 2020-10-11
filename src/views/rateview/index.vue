<template>
  <div class="rateviewapp" id="rateviewapp">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <div class="suchas">
      <examplebox :code="demo1.code" :title="demo1.title" :notes="demo1.notes">
        <template v-slot:sourse>
          <div class="block">
            <span class="demonstration">默认不区分颜色</span>
            <r-rate v-model="value1"></r-rate>
          </div>
          <div class="block">
            <span class="demonstration">区分颜色</span>
            <r-rate v-model="value2" :colors="colors"></r-rate>
          </div>
        </template>
      </examplebox>
    </div>
    <div class="suchas">
      <examplebox :code="demo2.code" :title="demo2.title" :notes="demo2.notes">
        <template v-slot:sourse>
          <div class="demoshu">
            <span class="demonstration">默认辅助文字</span>
            <r-rate v-model="value3" show-text></r-rate>
          </div>
          <div class="demoshu">
            <span class="demonstration">自定义辅助文字</span>
            <r-rate v-model="value4" show-text :texts="texts" text-color="#F7BA2A"></r-rate>
          </div>
        </template>
      </examplebox>
    </div>
    <div class="suchas">
      <examplebox :code="demo3.code" :title="demo3.title" :notes="demo3.notes">
        <template v-slot:sourse>
          <r-rate
            v-model="value5"
            :icon-classes="iconClasses"
            void-icon-class="icon-icon_xiaolian-xian"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
          ></r-rate>
        </template>
        <template v-slot:description>
          设置
          <code>icon-classes</code>
          属性可以自定义不同分段的图标。若传入数组，共有 3 个元素，为 3
          个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名。本例还使用
          <code>void-icon-class</code> 指定了未选中时的图标类名。
        </template>
      </examplebox>
    </div>
    <div class="suchas">
      <examplebox :code="demo4.code" :title="demo4.title" :notes="demo4.notes">
        <template v-slot:sourse>
          <div class="block">
            <span class="demonstration">默认显示分数</span>
            <r-rate v-model="value6" show-score disabled></r-rate>
          </div>
          <div class="block">
            <span class="demonstration">设置显示模板</span>
            <r-rate
              v-model="value7"
              :colors="colors"
              show-score
              text-color="#ff9900"
              score-template="您所选中的是:{value}星"
              disabled
            ></r-rate>
          </div>
        </template>
        <template v-slot:description>
          为组件设置
          <code>disabled</code>
          属性表示组件为只读，不支持小数分值。此时若设置
          <code>show-score</code>
          ，则会在右侧显示目前的分值。可以提供
          <code>score-template</code>
          作为显示模板，模板为一个包含了
          <code>{value}</code>
          的字符串，
          <code>{value}</code> 会被解析为分值。还提供
          <code>text-color</code>作为显示值颜色，传入16进制颜色值，默认值为 "#1F2D3D"。
        </template>
      </examplebox>
    </div>
  </div>
</template>

<script>
import Examplebox from "@/components/Examplebox";
import code from "./code";

export default {
  name: "rateviewapp",
  components: {
    Examplebox
  },
  data() {
    return {
      title: "Rate 评分",
      description: "评分组件",
      demo1: {
        title: "基础用法",
        code: code.code1
      },
      demo2: {
        title: "辅助文字",
        notes: "用辅助文字直接地表达对应分数",
        code: code.code2
      },
      demo3: {
        title: "其它 icon",
        notes: "当有多层评价时，可以用不同类型的 icon 区分评分层级",
        code: code.code3
      },
      demo4: {
        title: "只读",
        code: code.code4
      },
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      value5: null,
      value6: 2,
      value7: 4,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      texts: ["D", "C", "B", "A", "S"],
      iconClasses: ["icon-icon_ku-mian", "icon-icon_xiaolian-mian", "icon-biaoqing2"]
    };
  }
};
</script>

<style lang="scss">
.rateviewapp {
  padding-bottom: 200px;
  p {
    margin: 14px 0;
  }
}

.block {
  padding: 30px 0;
  text-align: center;
  display: inline-block;
  width: 49%;
  box-sizing: border-box;
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
}
.demoshu {
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin: 20px 0 10px 0;
  }
}
.demoshu + .demoshu {
  margin-top: 25px;
  border-top: 1px solid #eff2f6;
}
.block + .block {
  border-left: 1px solid #eff2f6;
}
</style>
