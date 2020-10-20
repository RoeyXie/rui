<template>
  <div class="switchviewapp">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <div class="suchas">
      <examplebox :code="demo1.code" :title="demo1.title" :notes="demo1.notes">
        <template v-slot:sourse>
          <r-switch v-model="value1" active-color="#13ce66" inactive-color="#ff4949"></r-switch>
        </template>
        <template v-slot:description>
          绑定
          <code>v-model</code> 到一个 <code>Boolean</code> 类型的变量。可以使用
          <code>active-color</code> 属性与 <code>inactive-color</code> 属性来设置开关的背景色。
        </template>
      </examplebox>
    </div>
    <div class="suchas">
      <examplebox :code="demo2.code" :title="demo2.title" :notes="demo2.notes">
        <template v-slot:sourse>
          <div class="demoSwitch">
            <r-switch v-model="value2" active-text="按月付费" inactive-text="按年付费"></r-switch>
          </div>
          <div class="demoSwitch">
            <r-switch
              v-model="value3"
              active-text="按月付费"
              inactive-text="按年付费"
              active-color="#13ce66"
              inactive-color="#ff4949"
            ></r-switch>
          </div>
        </template>
      </examplebox>
    </div>
    <div class="suchas">
      <examplebox :code="demo3.code" :title="demo3.title" :notes="demo3.notes">
        <template v-slot:sourse>
          <div class="demoSwitch">
            <r-switch
              v-model="value4"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-value="100"
              inactive-value="0"
            ></r-switch>
          </div>
        </template>
      </examplebox>
    </div>
    <div class="suchas">
      <examplebox :code="demo4.code" :title="demo4.title" :notes="demo4.notes">
        <template v-slot:sourse>
          <r-switch
            v-model="value5"
            active-color="#13ce66"
            inactive-color="#ff4949"
            disabled
          ></r-switch>
          <r-switch
            v-model="value6"
            active-color="#13ce66"
            inactive-color="#ff4949"
            disabled
          ></r-switch>
        </template>
        <template v-slot:description>
          设置
          <code>disabled</code> 属性，接受一个 <code>Boolean</code> ，设置
          <code>true</code> 即可禁用。
        </template>
      </examplebox>
    </div>
  </div>
</template>

<script>
import code from "./code.ts";

export default {
  name: "switchview",
  data() {
    return {
      title: "Switch 开关",
      description: "表示两种相互对立的状态间的切换，多用于触发「开/关」。",
      demo1: {
        title: "基础用法",
        code: code.code1
      },
      demo2: {
        title: "文字描述",
        code: code.code2
      },
      demo3: {
        title: "扩展的 value 类型",
        code: code.code3
      },
      demo4: {
        title: "禁用状态",
        code: code.code4
      },
      value1: false,
      value2: true,
      value3: true,
      value4: "0",
      value5: true,
      value6: false
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.switchviewapp {
  padding-bottom: 200px;
  p {
    margin: 14px 0;
  }
}

.demoSwitch + .demoSwitch {
  margin-top: 35px;
}

.r_switch + .r_switch {
  margin-left: 35px;
}
</style>
