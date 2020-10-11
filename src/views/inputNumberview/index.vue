<template>
  <div class="inputNumberviewbox">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>

    <div class="suchas">
      <examplebox :code="demo1.code" :title="demo1.title" :notes="demo1.notes">
        <template v-slot:sourse>
          <div class="demoInput">
            <r-input-number
              v-model="num1"
              label="描述内容"
              @change="handleChange"
              :min="1"
              :max="10"
            ></r-input-number>
          </div>
        </template>
        <template v-slot:description>
          要使用它，只需要在
          <code>el-input-number</code> 元素中使用
          <code>v-model</code>
          绑定变量即可，变量的初始值即为默认值。如果你只需要控制数值在某一范围内，可以设置
          <code>min</code> 属性和 <code>max</code> 属性。
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo2.code" :title="demo2.title" :notes="demo2.notes">
        <template v-slot:sourse>
          <div class="demoInput">
            <r-input-number v-model="num2" @change="handleChange" disabled></r-input-number>
          </div>
        </template>
        <template v-slot:description>
          disabled属性接受一个
          <code>Boolean</code> ，设置为 <code>true</code> 即可禁用整个组件。
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo3.code" :title="demo3.title" :notes="demo3.notes">
        <template v-slot:sourse>
          <div class="demoInput">
            <r-input-number v-model="num3" @change="handleChange" :step="2"></r-input-number>
          </div>
        </template>
        <template v-slot:description>
          设置
          <code>step</code>
          属性可以控制步长，接受一个
          <code>Number</code>
          。
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo4.code" :title="demo4.title" :notes="demo4.notes">
        <template v-slot:sourse>
          <div class="demoInput">
            <r-input-number
              v-model="num4"
              @change="handleChange"
              :step="2"
              step-strictly
            ></r-input-number>
          </div>
        </template>
        <template v-slot:description>
          <code>step-strictly</code>
          属性接受一个
          <code>Boolean</code>
          。如果这个属性被设置为
          <code>true</code>
          ，则只能输入步数的倍数。
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo5.code" :title="demo5.title" :notes="demo5.notes">
        <template v-slot:sourse>
          <div class="demoInput">
            <r-input-number
              v-model="num5"
              @change="handleChange"
              :step="0.03"
              :precision="2"
              step-strictly
            ></r-input-number>
          </div>
        </template>
        <template v-slot:description>
          设置
          <code>precision</code>
          属性可以控制数值精度，接收一个
          <code>Number</code> 。
        </template>
      </examplebox>
    </div>
    <div class="tips">
      <p>
        <code>precision</code> 的值必须是一个非负整数，并且不能小于 <code>step</code> 的小数位数。
      </p>
    </div>

    <div class="suchas">
      <examplebox :code="demo6.code" :title="demo6.title" :notes="demo6.notes">
        <template v-slot:sourse>
          <div class="demoInput">
            <r-input-number v-model="num6" @change="handleChange"></r-input-number>
            <r-input-number v-model="num7" @change="handleChange" size="medium"></r-input-number>
          </div>
          <div class="demoInput">
            <r-input-number v-model="num8" @change="handleChange" size="small"></r-input-number>
            <r-input-number v-model="num9" @change="handleChange" size="mini"></r-input-number>
          </div>
        </template>
        <template v-slot:description></template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo7.code" :title="demo7.title" :notes="demo7.notes">
        <template v-slot:sourse>
          <div class="demoInput">
            <r-input-number
              v-model="num10"
              controls-position="right"
              :min="1"
              :max="10"
            ></r-input-number>
            <r-input-number
              v-model="num11"
              size="medium"
              controls-position="right"
              :min="1"
              :max="10"
            ></r-input-number>
          </div>
          <div class="demoInput">
            <r-input-number
              v-model="num12"
              size="small"
              controls-position="right"
              :min="1"
              :max="10"
            ></r-input-number>
            <r-input-number
              v-model="num13"
              size="mini"
              controls-position="right"
              :min="1"
              :max="10"
            ></r-input-number>
          </div>
        </template>
        <template v-slot:description>
          设置
          <code>controls-position</code> 属性可以控制按钮位置。
        </template>
      </examplebox>
    </div>
  </div>
</template>

<script>
import Examplebox from "@/components/Examplebox";
import code from "./code";

export default {
  name: "inputNumberviewapp",
  components: {
    Examplebox
  },
  data() {
    return {
      title: "InputNumber 计数器",
      description: "仅允许输入标准的数字值，可定义范围",
      demo1: {
        title: "基础用法",
        code: code.code1
      },
      demo2: {
        title: "禁用状态",
        code: code.code2
      },
      demo3: {
        title: "步数",
        notes: "允许定义递增递减的步数控制",
        code: code.code3
      },
      demo4: {
        title: "严格步数",
        code: code.code4
      },
      demo5: {
        title: "精度",
        code: code.code5
      },
      demo6: {
        title: "尺寸",
        notes:
          "可通过 size 属性指定输入框的尺寸，除了默认的大小外，还提供了 medium 、 small 和 mini 三种尺寸。",
        code: code.code6
      },
      demo7: {
        title: "按钮位置",
        code: code.code7
      },
      num: 1,
      num1: 1,
      num2: 1,
      num3: 1,
      num4: 1,
      num5: 1,
      num6: 1,
      num7: 1,
      num8: 1,
      num9: 1,
      num10: 1,
      num11: 1,
      num12: 1,
      num13: 1
    };
  },
  methods: {
    handleChange(value) {
      console.log(value, typeof value);
    }
  }
};
</script>

<style lang="scss">
.inputNumberviewbox {
  padding-bottom: 200px;
  p {
    margin: 14px 0;
  }
}

.demoInput + .demoInput {
  margin-top: 20px;
}

.inputnumberbox + .inputnumberbox {
  margin-left: 15px;
}
</style>
