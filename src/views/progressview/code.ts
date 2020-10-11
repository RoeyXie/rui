/*
 * @Author: xry
 * @Description:
 * @Date: 2020-09-01 16:23:07
 * @LastEditTime: 2020-09-03 18:13:20
 * @FilePath: /Hui/rui/src/views/progressview/code.ts
 */
let text: string = "`${percentage}%`";
const code1: string =
  `<r-progress :percentage="50"></r-progress>
<r-progress :percentage="100" :format="format"></r-progress>
<r-progress :percentage="100" status="success"></r-progress>
<r-progress :percentage="100" status="warning"></r-progress>
<r-progress :percentage="50" status="exception"></r-progress>

<script>
  export default{
    methods: {
      format(percentage) {
        return percentage === 100 ? '满' : ` +
  text +
  `;
      }
    }
  }
</script> `;
const code2: string = `<r-progress :text-insid"true" :stroke-width="26" :percentage="70"></r-progress>
<r-progress :text-insid"true" :stroke-width="24" :percentage="100" status="success"></r-progress>
<r-progress :text-insid"true" :stroke-width="22" :percentage="80" status="warning"></r-progress>
<r-progress :text-insid"true" :stroke-width="20" :percentage="50" status="exception"></r-progress>`;
const code3: string = `<r-progress :percentage="percentage" :color=="customColor"></r-progress>
<r-progress :percentage="percentage" :color="customColorMethod"></r-progress>
<r-progress :percentage="percentage" :color="customColors"></r-progress>

<div class="btnbox">
  <r-btngroup>
    <r-btn icon="icon-font icon-jianhao" @click="decrease"></r-btn>
    <r-btn icon="icon-font icon-jiahao" @click="increase"></r-btn>
  </r-btngroup>
</div>

<script>
  export default{
    data() {
      return {
        percentage: 20,
        customColor: '#409eff',
        customColors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      customColorMethod(percentage) {
        if (percentage < 30) {
          return '#909399';
        } else if (percentage < 70) {
          return '#e6a23c';
        } else {
          return '#67c23a';
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
      }
    }
  }
</script> `;
const code4: string = `<r-progress type"circle" :percentage="0"></r-progress>
<r-progress type"circle" :percentage="25"></r-progress>
<r-progress type"circle" :percentage="100" status="success"></r-progress>
<r-progress type"circle" :percentage="70" status="warning"></r-progress>
<r-progress type"circle" :percentage="50" status="exception"></r-progress>`;
const code5: string = `<r-progress type="dashboard" :percentage="percentage" :color="customColors"></r-progress>

<div class="btnbox">
  <r-btngroup>
    <r-btn icon="icon-font icon-jianhao" @click="decrease"></r-btn>
    <r-btn icon="icon-font icon-jiahao" @click="increase"></r-btn>
  </r-btngroup>
</div>

<script>
  export default{
    data() {
      return {
        percentage: 10,
        customColors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
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
      }
    }
  }
</script> `;

export default {
  code1,
  code2,
  code3,
  code4,
  code5
};
