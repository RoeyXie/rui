<template>
  <div class="timelineviewapp">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <div class="suchas">
      <examplebox :code="demo1.code" :title="demo1.title" :notes="demo1.notes">
        <template v-slot:sourse>
          <div>
            <div class="radio">
              排序：
              <r-radio-group v-model="reverse">
                <r-radio :label="true">倒序</r-radio>
                <r-radio :label="false">正序</r-radio>
              </r-radio-group>
            </div>
            <r-timeline :reverse="reverse">
              <r-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.timestamp"
                >{{ activity.content }}</r-timeline-item
              >
            </r-timeline>
          </div>
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo2.code" :title="demo2.title" :notes="demo2.notes">
        <template v-slot:sourse>
          <div>
            <r-timeline>
              <r-timeline-item
                v-for="(activity, index) in activities1"
                :key="index"
                :icon="activity.icon"
                :type="activity.type"
                :color="activity.color"
                :size="activity.size"
                :timestamp="activity.timestamp"
                >{{ activity.content }}</r-timeline-item
              >
            </r-timeline>
          </div>
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo3.code" :title="demo3.title" :notes="demo3.notes">
        <template v-slot:sourse>
          <div>
            <r-timeline>
              <r-timeline-item timestamp="2018/4/12" placement="top">
                <r-card>
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/12 20:46</p>
                </r-card>
              </r-timeline-item>
              <r-timeline-item timestamp="2018/4/3" placement="top">
                <r-card>
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/3 20:46</p>
                </r-card>
              </r-timeline-item>
              <r-timeline-item timestamp="2018/4/2" placement="top">
                <r-card>
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/2 20:46</p>
                </r-card>
              </r-timeline-item>
            </r-timeline>
          </div>
        </template>
      </examplebox>
    </div>
  </div>
</template>
<script>
import code from "./code";

export default {
  name: "timelineview",
  data() {
    return {
      title: "Timeline 时间线",
      description: "可视化地呈现时间流信息。",
      demo1: {
        title: "基础用法",
        notes: "Timeline 可拆分成多个按照时间戳正序或倒序排列的 activity，时间戳是其区分于其他控件的重要特征，使⽤时注意与 Steps 步骤条等区分。",
        code: code.code1
      },
      demo2: {
        title: "⾃定义节点样式",
        notes: "可根据实际场景⾃定义节点尺⼨、颜⾊，或直接使⽤图标。",
        code: code.code2
      },
      demo3: {
        title: "⾃定义时间戳",
        notes: "当内容在垂直⽅向上过⾼时，可将时间戳置于内容之上。",
        code: code.code3
      },
      text1: "{{activity.content}}",
      reverse: true,
      activities: [
        {
          content: "活动按期开始",
          timestamp: "2018-04-15"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "创建成功",
          timestamp: "2018-04-11"
        }
      ],
      activities1: [
        {
          content: "支持使用图标",
          timestamp: "2018-04-12 20:46",
          size: "large",
          type: "primary",
          icon: "iconfont icon-more"
        },
        {
          content: "支持自定义颜色",
          timestamp: "2018-04-03 20:46",
          color: "#0bbd87"
        },
        {
          content: "支持自定义尺寸",
          timestamp: "2018-04-03 20:46",
          size: "large"
        },
        {
          content: "默认样式的节点",
          timestamp: "2018-04-03 20:46"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.timelineviewapp {
  padding-bottom: 200px;
  p {
    margin: 14px 0;
  }
}
.radio {
  margin-bottom: 20px;
}
</style>
