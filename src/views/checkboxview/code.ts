const code1: string = `<r-checkbox v-model="checked">备选项</r-checkbox>

<script>
  export default {
    data () {
      return {
        checked: true
      };
    }
  }
</script>
`;
const code2: string = `<r-checkbox v-model="checked1" disabled>备选项</r-checkbox>
<r-checkbox v-model="checked2" disabled>备选项</r-checkbox>

<script>
  export default {
    data () {
      return {
        checked1: false
        checked2: true
      };
    }
  }
</script>`;
const code3: string = `<r-checkbox-group v-model="checkList">
  <r-checkbox label="复选框 A">备选项</r-checkbox>
  <r-checkbox label="复选框 B">备选项</r-checkbox>
  <r-checkbox label="复选框 C">备选项</r-checkbox>
  <r-checkbox label="禁用" disabled>备选项</r-checkbox>
  <r-checkbox label="选中且禁用" disabled>备选项</r-checkbox>
</r-checkbox-group>

<script>
  export default {
    data () {
      return {
        checkList: ["选中且禁用","复选框 A"]
      };
    }
  }
</script>`;
const code4: string = `<template>
  <r-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</r-checkbox>
  <div style="margin: 15px 0;"></div>
  <r-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <r-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</r-checkbox>
  </r-checkbox-group>
</template>
<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data() {
      return {
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true
      };
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  };
</script>
`;
const code5: string = `<r-checkbox-group v-model="checkedCities" :min="1" :max="2">
  <r-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</r-checkbox>
</r-checkbox-group>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data () {
      return {
        checkedCities: ["上海","北京"],
        cities: cityOptions
      };
    }
  }
</script>
`;
const code6: string = `<div>
  <r-checkbox-group v-model="checkboxGroup1">
    <r-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</r-checkbox>
  </r-checkbox-group>
</div>
<div style="margin-top: 20px">
  <r-checkbox-group v-model="checkboxGroup2" size="medium">
    <r-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</r-checkbox>
  </r-checkbox-group>
</div>
<div style="margin-top: 20px">
  <r-checkbox-group v-model="checkboxGroup3" size="small">
    <r-checkbox v-for="city in cities" :label="city" :key="city" :disabled="city === '北京'">{{city}}</r-checkbox>
  </r-checkbox-group>
</div>
<div style="margin-top: 20px">
  <r-checkbox-group v-model="checkboxGroup4" size="mini">
    <r-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</r-checkbox>
  </r-checkbox-group>
</div>
<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data () {
      return {
        checkboxGroup1: ["上海"],
        checkboxGroup2: ["上海"],
        checkboxGroup3: ["上海"],
        checkboxGroup4: ["上海"],
        cities: cityOptions
      };
    }
  }
</script>
`;
const code7: string = `<div>
  <r-checkbox v-model="checked1" label="备选项1" border></r-checkbox>
  <r-checkbox v-model="checked2" label="备选项2" border></r-checkbox>
</div>
<div style="margin-top: 20px">
  <r-checkbox v-model="checked3" label="备选项1" border size="medium"></r-checkbox>
  <r-checkbox v-model="checked4" label="备选项2" border size="medium"></r-checkbox>
</div>
<div style="margin-top: 20px">
  <r-checkbox-group v-model="checkboxGroup1" size="small">
    <r-checkbox label="备选项1" border></r-checkbox>
    <r-checkbox label="备选项2" border disabled></r-checkbox>
  </r-checkbox-group>
</div>
<div style="margin-top: 20px">
  <r-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
    <r-checkbox label="备选项1" border></r-checkbox>
    <r-checkbox label="备选项2" border></r-checkbox>
  </r-checkbox-group>
</div>
<script>
  export default {
    data () {
      return {
        checked1: true,
        checked2: false,
        checked3: false,
        checked4: true,
        checkboxGroup1: ["备选项1"],
        checkboxGroup2: ["备选项2"]
      };
    }
  }
</script>
`;

export default {
  code1,
  code2,
  code3,
  code4,
  code5,
  code6,
  code7
};
