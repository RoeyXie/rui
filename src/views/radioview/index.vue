<template>
  <div class="radioviewapp" id="radioviewapp">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>

    <div class="suchas">
      <examplebox :code="demo1.code" :title="demo1.title" :notes="demo1.notes">
        <template v-slot:sourse>
          <r-radio v-model="radio" :label="3" @change="test">备选项</r-radio>
          <r-radio v-model="radio" :label="6" @change="test">备选项</r-radio>
        </template>
        <template v-slot:description>
          要使用 Radio 组件，只需要设置
          <code>v-model</code> 绑定变量，选中意味着变量的值为相应 Radio
          <code>label</code> 属性的值， <code>label</code> 可以是 <code>String</code> 、
          <code>Number</code> 或 <code>Boolean</code> 。
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo2.code" :title="demo2.title" :notes="demo2.notes">
        <template v-slot:sourse>
          <r-radio v-model="radio2" label="禁用" disabled>备选项</r-radio>
          <r-radio v-model="radio2" label="选中且禁用" disabled>备选项</r-radio>
        </template>
        <template v-slot:description>
          只要在
          <code>r-radio</code> 元素中设置 <code>disabled</code> 属性即可，它接受一个
          <code>Boolean</code> ， <code>true</code>为禁用。
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo3.code" :title="demo3.title" :notes="demo3.notes">
        <template v-slot:sourse>
          <r-radio-group v-model="radio1">
            <r-radio :label="3">备选项</r-radio>
            <r-radio :label="6">备选项</r-radio>
            <r-radio :label="9">备选项</r-radio>
          </r-radio-group>
        </template>
        <template v-slot:description>
          结合
          <code>r-radio-group</code> 元素和子元素 <code>r-radio</code> 可以实现单选组，在
          <code>r-radio-group</code> 中绑定 <code>v-model</code> ，在 <code>r-radio</code> 中设置好
          <code>label</code> 即可，无需再给每一个 <code>r-radio</code>绑定变量，另外，还提供了
          <code>change</code> 事件来响应变化，它会传入一个参数 <code>value</code> 。
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo4.code" :title="demo4.title" :notes="demo4.notes">
        <template v-slot:sourse>
          <div>
            <r-radio-group v-model="radio3" @change="test">
              <r-radio-button label="1">上海</r-radio-button>
              <r-radio-button label="2">北京</r-radio-button>
              <r-radio-button label="3">广州</r-radio-button>
              <r-radio-button label="4">深圳</r-radio-button>
            </r-radio-group>
          </div>
          <div style="margin-top: 20px;">
            <r-radio-group v-model="radio4" size="medium">
              <r-radio-button label="1">上海</r-radio-button>
              <r-radio-button label="2">北京</r-radio-button>
              <r-radio-button label="3">广州</r-radio-button>
              <r-radio-button label="4">深圳</r-radio-button>
            </r-radio-group>
          </div>
          <div style="margin-top: 20px;">
            <r-radio-group v-model="radio5" size="small">
              <r-radio-button label="1">上海</r-radio-button>
              <r-radio-button label="2" disabled>北京</r-radio-button>
              <r-radio-button label="3">广州</r-radio-button>
              <r-radio-button label="4">深圳</r-radio-button>
            </r-radio-group>
          </div>
          <div style="margin-top: 20px;">
            <r-radio-group v-model="radio6" size="mini" disabled>
              <r-radio-button label="1">上海</r-radio-button>
              <r-radio-button label="2">北京</r-radio-button>
              <r-radio-button label="3">广州</r-radio-button>
              <r-radio-button label="4">深圳</r-radio-button>
            </r-radio-group>
          </div>
        </template>
        <template v-slot:description>
          只需要把
          <code>r-radio</code> 元素换成 <code>r-radio-button</code> 元素即可，此外，Rui 还提供了
          <code>size</code> 属性。
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo5.code" :title="demo5.title" :notes="demo5.notes">
        <template v-slot:sourse>
          <div>
            <r-radio v-model="radio7" label="1" border>备选项1</r-radio>
            <r-radio v-model="radio7" label="2" border>备选项2</r-radio>
          </div>
          <div style="margin-top: 20px">
            <r-radio v-model="radio8" label="1" border size="medium">备选项1</r-radio>
            <r-radio v-model="radio8" label="2" border size="medium">备选项2</r-radio>
          </div>
          <div style="margin-top: 20px">
            <r-radio-group v-model="radio9" size="small">
              <r-radio label="1" border>备选项1</r-radio>
              <r-radio label="2" border disabled>备选项2</r-radio>
            </r-radio-group>
          </div>
          <div style="margin-top: 20px">
            <r-radio-group v-model="radio10" size="mini" disabled>
              <r-radio label="1" border>备选项1</r-radio>
              <r-radio label="2" border>备选项2</r-radio>
            </r-radio-group>
          </div>
        </template>
        <template v-slot:description>
          设置
          <code>border</code>
          属性可以渲染为带有边框的单选框。r-radio必须设置了
          <code>border</code> 属性，r-radio-group设置 <code>size</code> 属性才有效果
        </template>
      </examplebox>
    </div>
  </div>
</template>

<script>
import Examplebox from "@/components/Examplebox";
import code from "./code";

export default {
  name: "radioviewapp",
  components: {
    Examplebox
  },
  data() {
    return {
      radio: 3,
      radio1: 3,
      radio2: "选中且禁用",
      radio3: "1",
      radio4: "1",
      radio5: "1",
      radio6: "2",
      radio7: "选中且禁用",
      radio8: "1",
      radio9: "1",
      radio10: "1",
      title: "Radio 单选框",
      description: "在一组备选项中进行单选",
      demo1: {
        title: "基础用法",
        notes: "由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。",
        code: code.code1
      },
      demo2: {
        title: "禁用状态",
        notes: "单选框不可用的状态。",
        code: code.code2
      },
      demo3: {
        title: "单选框组",
        notes: "适用于在多个互斥的选项中选择的场景",
        code: code.code3
      },
      demo4: {
        title: "按钮样式",
        notes: "按钮样式的单选组合。",
        code: code.code4
      },
      demo5: {
        title: "带有边框",
        code: code.code5
      }
    };
  },
  methods: {
    test(val) {
      console.log(val);
    }
  }
};
</script>

<style lang="scss">
.radioviewapp {
  padding-bottom: 200px;
  p {
    margin: 14px 0;
  }
  .demoRadio + .demoRadio {
    margin-top: 20px;
  }
  .r_radio_group + .r_radio_group {
    margin-top: 20px;
  }
}
</style>
