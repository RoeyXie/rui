/*
 * @Author: xry
 * @Description:
 * @Date: 2020-09-01 16:23:07
 * @LastEditTime: 2020-09-01 16:40:02
 * @FilePath: /Hui/rui/src/views/radioview/code.ts
 */
const code1: string = `<template>
  <r-radio v-model="radio" :label="3" @change="test">备选项</r-radio>
  <r-radio v-model="radio" :label="6" @change="test">备选项</r-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: 3
      };
    },
    methods:{
      test (val) {
        console.log(val);
      }
    }
  }
</script>`;
const code2: string = `<r-radio disabled v-model="radio" label="禁用">备选项</r-radio>
<r-radio disabled v-model="radio" label="选中且禁用">备选项</r-radio>

<script>
  export default {
    data () {
      return {
        radio: "选中且禁用"
      };
    }
  }
</script>`;
const code3: string = `<r-radio-group v-model="radio">
  <r-radio :label="3">备选项</r-radio>
  <r-radio :label="6">备选项</r-radio>
  <r-radio :label="9">备选项</r-radio>
</r-radio-group>
<script>
  export default {
    data () {
      return {
        radio: 3
      };
    }
  }
</script>`;
const code4: string = `<r-radio-group v-model="radio1" @change="test">
  <r-radio-button label="1">上海</r-radio-button>
  <r-radio-button label="2">北京</r-radio-button>
  <r-radio-button label="3">广州</r-radio-button>
  <r-radio-button label="4">深圳</r-radio-button>
</r-radio-group>
<r-radio-group v-model="radio2" size="medium">
  <r-radio-button label="1">上海</r-radio-button>
  <r-radio-button label="2">北京</r-radio-button>
  <r-radio-button label="3">广州</r-radio-button>
  <r-radio-button label="4">深圳</r-radio-button>
</r-radio-group>
<r-radio-group v-model="radio3" size="small">
  <r-radio-button label="1">上海</r-radio-button>
  <r-radio-button label="2" disabled>北京</r-radio-button>
  <r-radio-button label="3">广州</r-radio-button>
  <r-radio-button label="4">深圳</r-radio-button>
</r-radio-group>
<r-radio-group v-model="radio4" disabled size="mini">
  <r-radio-button label="1">上海</r-radio-button>
  <r-radio-button label="2">北京</r-radio-button>
  <r-radio-button label="3">广州</r-radio-button>
  <r-radio-button label="4">深圳</r-radio-button>
</r-radio-group>

<script>
  export default {
    data () {
      return {
        radio1: "1"
        radio2: "1"
        radio3: "1"
        radio4: "1"
      };
    },
    methods:{
      test (val) {
        console.log(val);
      }
    }
  }
</script>`;
const code5: string = `<div>
  <r-radio v-model="radio1" label="1" border>备选项1</r-radio>
  <r-radio v-model="radio1" label="2" border>备选项2</r-radio>
</div>
<div>
  <r-radio v-model="radio1" label="1" border size="medium">备选项1</r-radio>
  <r-radio v-model="radio1" label="2" border size="medium">备选项2</r-radio>
</div>
<div>
<r-radio-group v-model="radio3" size="small">
  <r-radio label="1" border>备选项1</r-radio>
  <r-radio label="2" border disabled>备选项2</r-radio>
</r-radio-group>
</div>
<div>
<r-radio-group v-model="radio4" disabled size="mini">
  <r-radio label="1" border>备选项1</r-radio>
  <r-radio label="2" border>备选项2</r-radio>
</r-radio-group>
</div>

<script>
  export default {
    data () {
      return {
        radio1: "2"
        radio2: "1"
        radio3: "1"
        radio4: "1"
      };
    }
  }
</script>`;

export default {
  code1,
  code2,
  code3,
  code4,
  code5
};
