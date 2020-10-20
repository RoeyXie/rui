<template>
  <div class="progressviewapp" id="progressviewapp">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>

    <div class="suchas">
      <examplebox :code="demo1.code" :title="demo1.title" :notes="demo1.notes">
        <template v-slot:sourse>
          <div class="demo_progress">
            <r-progress :percentage="50" :format="format"></r-progress>
            <r-progress :percentage="100"></r-progress>
            <r-progress :percentage="100" status="success"></r-progress>
            <r-progress :percentage="100" status="warning"></r-progress>
            <r-progress :percentage="50" status="exception"></r-progress>
          </div>
        </template>
        <template v-slot:description>
          Progress 组件设置
          <code>percentage</code>
          属性即可，表示进度条对应的百分比，必填，必须在 0-100。通过
          <code>format</code> 属性来指定进度条文字内容。
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo2.code" :title="demo2.title" :notes="demo2.notes">
        <template v-slot:sourse>
          <div class="demo_progress">
            <r-progress :text-inside="true" :stroke-width="26" :percentage="70"></r-progress>
            <r-progress
              :text-inside="true"
              :stroke-width="24"
              :percentage="100"
              status="success"
            ></r-progress>
            <r-progress
              :text-inside="true"
              :stroke-width="22"
              :percentage="80"
              status="warning"
            ></r-progress>
            <r-progress
              :text-inside="true"
              :stroke-width="20"
              :percentage="50"
              status="exception"
            ></r-progress>
          </div>
        </template>
        <template v-slot:description>
          Progress 组件可通过
          <code>stroke-width</code> 属性更改进度条的高度，并可通过
          <code>text-inside</code> 属性来将进度条描述置于进度条内部。
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo3.code" :title="demo3.title" :notes="demo3.notes">
        <template v-slot:sourse>
          <div class="demo_progress">
            <r-progress :percentage="percentage" :color="customColor"></r-progress>
            <r-progress :percentage="percentage" :color="customColorMethod"></r-progress>
            <r-progress :percentage="percentage" :color="customColors"></r-progress>
            <div class="btnbox">
              <r-btngroup>
                <r-btn icon="icon-font icon-jianhao" @click="decrease"></r-btn>
                <r-btn icon="icon-font icon-jiahao" @click="increase"></r-btn>
              </r-btngroup>
            </div>
          </div>
        </template>
        <template v-slot:description></template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo4.code" :title="demo4.title" :notes="demo4.notes">
        <template v-slot:sourse>
          <r-progress type="circle" :percentage="0"></r-progress>
          <r-progress type="circle" :percentage="25"></r-progress>
          <r-progress type="circle" :percentage="100" status="success"></r-progress>
          <r-progress type="circle" :percentage="70" status="warning"></r-progress>
          <r-progress type="circle" :percentage="50" status="exception"></r-progress>
        </template>
        <template v-slot:description></template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo5.code" :title="demo5.title" :notes="demo5.notes">
        <template v-slot:sourse>
          <div class="demo_progress">
            <r-progress
              :percentage="circlepercentage"
              :color="customColors"
              type="dashboard"
            ></r-progress>
            <div class="btnbox">
              <r-btngroup>
                <r-btn icon="icon-font icon-jianhao" @click="circledecrease"></r-btn>
                <r-btn icon="icon-font icon-jiahao" @click="circleincrease"></r-btn>
              </r-btngroup>
            </div>
          </div>
        </template>
        <template v-slot:description>
          通过
          <code>type</code> 属性来指定使用仪表盘形进度条。
        </template>
      </examplebox>
    </div>
  </div>
</template>

<script>
import code from "./code";

export default {
  name: "progressviewapp",
  data() {
    return {
      title: "Progress 进度条",
      description: "用于展示操作进度，告知用户当前状态和预期。",
      demo1: {
        title: "线形进度条",
        code: code.code1
      },
      demo2: {
        title: "百分比内显",
        notes: "百分比不占用额外控件，适用于文件上传等场景。",
        code: code.code2
      },
      demo3: {
        title: "自定义颜色",
        notes: "可以通过 color 设置进度条的颜色， color 可以接受颜色字符串，函数和数组。",
        code: code.code3
      },
      demo4: {
        title: "环形进度条",
        notes:
          "Progress 组件可通过 type 属性来指定使用环形进度条，在环形进度条中，还可以通过 width 属性来设置其大小。",
        code: code.code4
      },
      demo5: {
        title: "仪表盘形进度条",
        code: code.code5
      },
      percentage: 20,
      circlepercentage: 10,
      customColor: "#409eff",
      customColors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 }
      ]
    };
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    },
    customColorMethod(percentage) {
      if (percentage < 30) {
        return "#909399";
      } else if (percentage < 70) {
        return "#e6a23c";
      } else {
        return "#67c23a";
      }
    },
    increase() {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    },
    circleincrease() {
      this.circlepercentage += 10;
      if (this.circlepercentage > 100) {
        this.circlepercentage = 100;
      }
    },
    circledecrease() {
      this.circlepercentage -= 10;
      if (this.circlepercentage < 0) {
        this.circlepercentage = 0;
      }
    }
  }
};
</script>

<style lang="scss">
.progressviewapp {
  padding-bottom: 200px;
  p {
    margin: 14px 0;
  }
}

.demo_progress {
  width: 60%;
  .r_progress + .r_progress {
    margin-top: 10px;
  }
}

.btnbox {
  margin-left: 7px;
  margin-top: 20px;
}
</style>
