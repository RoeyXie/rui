/*
 * @Author: xry
 * @Description:
 * @Date: 2020-09-01 16:23:07
 * @LastEditTime: 2020-09-04 19:36:46
 * @FilePath: /Hui/rui/src/views/timelineview/code.ts
 */
const code1: string = `<div>
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
      :timestamp="activity.timestamp">
      {{activity.content}}
    </r-timeline-item>
  </r-timeline>
</div>

<script>
  export default {
    data() {
      return {
        reverse: true,
        activities: [{
          content: '活动按期开始',
          timestamp: '2018-04-15'
        }, {
          content: '通过审核',
          timestamp: '2018-04-13'
        }, {
          content: '创建成功',
          timestamp: '2018-04-11'
        }]
      };
    }
  };
</script>`;
const code2: string = `<div>
  <r-timeline>
    <r-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :icon="activity.icon"
      :type="activity.type"
      :color="activity.color"
      :size="activity.size"
      :timestamp="activity.timestamp">
       {{activity.content}}
    </r-timeline-item>
  </r-timeline>
</div>

<script>
  export default {
    data() {
      return {
        activities: [{
          content: '支持使用图标',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        }, {
          content: '支持自定义颜色',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87'
        }, {
          content: '支持自定义尺寸',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        }, {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46'
        }]
      };
    }
  };
</script>`;
const code3: string = `<div>
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
</div>`;

export default {
  code1,
  code2,
  code3
};
