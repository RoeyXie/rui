<template>
  <div id="stepviewapp" class="stepviewapp">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>

    <div class="suchas">
      <examplebox :code="demo1.code" :title="demo1.title" :notes="demo1.notes">
        <template v-slot:sourse>
          <r-steps :active="active" finish-status="success">
            <r-step title="步骤 1"></r-step>
            <r-step title="步骤 2"></r-step>
            <r-step title="步骤 3"></r-step>
          </r-steps>
          <r-btn style="margin-top: 12px;" @click="next">下一步</r-btn>
        </template>
        <template v-slot:description>
          <div>
            设置 <code>active</code> 属性，接受一个 <code>Number</code> ，表明步骤的 index，从 0
            开始。需要定宽的步骤条时，设置 <code>space</code> 属性即可，它接受
            <code>Boolean</code>
            ，单位为px，如果不设置，则为自适应。设置
            <code>finish-status</code>
            属性可以改变已经完成的步骤的状态。
          </div>
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo2.code" :title="demo2.title" :notes="demo2.notes">
        <template v-slot:sourse>
          <r-steps :space="200" :active="active" finish-status="success">
            <r-step title="已完成"></r-step>
            <r-step title="进行中"></r-step>
            <r-step title="步骤 3"></r-step>
          </r-steps>
        </template>
        <template v-slot:description
          ><div>
            也可以使用
            <code>title</code>
            具名分发，可以用slot的方式来取代属性的设置，在本文档最后的列表中有所有的 slot name
            可供参考。
          </div>
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo3.code" :title="demo3.title" :notes="demo3.notes">
        <template v-slot:sourse>
          <r-steps :active="active">
            <r-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></r-step>
            <r-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></r-step>
            <r-step title="步骤 3" description="这段就没那么长了"></r-step>
          </r-steps>
        </template>
        <template v-slot:description></template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo4.code" :title="demo4.title" :notes="demo4.notes">
        <template v-slot:sourse>
          <r-steps :active="active" align-center>
            <r-step title="步骤1" description="这是一段很长很长很长的描述性文字"></r-step>
            <r-step title="步骤2" description="这是一段很长很长很长的描述性文字"></r-step>
            <r-step title="步骤3" description="这是一段很长很长很长的描述性文字"></r-step>
          </r-steps>
        </template>
        <template v-slot:description></template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo5.code" :title="demo5.title" :notes="demo5.notes">
        <template v-slot:sourse>
          <r-steps :active="active">
            <r-step title="步骤 1" icon="icon-shuxiebianji"></r-step>
            <r-step title="步骤 2" icon="icon-shangchuan"></r-step>
            <r-step title="步骤 3" icon="icon-tupianxuanzhong"></r-step>
          </r-steps>
        </template>
        <template v-slot:description
          ><div>
            通过
            <code>icon</code> 属性来设置图标，图标的类型可以参考 Icon
            组件的文档，除此以外，还能通过具名slot来使用自定义的图标。
          </div>
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo6.code" :title="demo6.title" :notes="demo6.notes">
        <template v-slot:sourse>
          <div style="height: 300px;">
            <r-steps direction="vertical" :active="active">
              <r-step title="步骤 1"></r-step>
              <r-step title="步骤 2"></r-step>
              <r-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></r-step>
            </r-steps>
          </div>
        </template>
        <template v-slot:description>
          <div>
            只需要在r-steps元素中设置 <code>direction</code> 属性为 <code>vertical</code> 即可。
          </div>
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo7.code" :title="demo7.title" :notes="demo7.notes">
        <template v-slot:sourse>
          <r-steps :active="active" simple>
            <r-step title="步骤 1" icon="el-icon-edit"></r-step>
            <r-step title="步骤 2" icon="el-icon-upload"></r-step>
            <r-step title="步骤 3" icon="el-icon-picture"></r-step>
          </r-steps>
          <r-steps
            :active="active"
            finish-status="success"
            description="vertical"
            simple
            style="margin-top: 20px"
          >
            <r-step title="步骤 1"></r-step>
            <r-step title="步骤 2"></r-step>
            <r-step title="步骤 3"></r-step>
          </r-steps>
        </template>
        <template v-slot:description></template>
      </examplebox>
    </div>
  </div>
</template>

<script>
import Examplebox from "@/components/Examplebox";
import code from "./code";

export default {
  name: "stepview",
  components: {
    Examplebox
  },
  data() {
    return {
      title: "Steps 步骤条",
      description:
        "引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。",
      demo1: {
        title: "基础用法",
        notes: "简单的步骤条。",
        code: code.code1
      },
      demo2: {
        title: "含状态步骤条",
        notes: "每一步骤显示出该步骤的状态。",
        code: code.code2
      },
      demo3: {
        title: "有描述的步骤条",
        notes: "每个步骤有其对应的步骤状态描述。",
        code: code.code3
      },
      demo4: {
        title: "居中的步骤条",
        notes: "标题和描述都将居中。",
        code: code.code4
      },
      demo5: {
        title: "带图标的步骤条",
        notes: "步骤条内可以启用各种自定义的图标。",
        code: code.code5
      },
      demo6: {
        title: "竖式步骤条",
        notes: "竖直方向的步骤条。设置竖式步骤条，该条件下 center 将失效。",
        code: code.code6
      },
      demo7: {
        title: "简洁风格的步骤条",
        notes:
          "设置 simple 可应用简洁风格，该条件下 align-center / description / direction / space 都将失效。",
        code: code.code7
      },
      active: 1
    };
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    }
  }
};
</script>

<style lang="scss">
.stepviewapp {
  padding-bottom: 200px;
  p {
    margin: 14px 0;
  }
}
</style>
