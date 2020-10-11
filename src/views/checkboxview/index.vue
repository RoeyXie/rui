<template>
  <div class="checkboxviewapp" id="checkboxviewapp">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>

    <div class="suchas">
      <examplebox :code="demo1.code" :title="demo1.title" :notes="demo1.notes">
        <template v-slot:sourse>
          <r-checkbox v-model="checked">备选项</r-checkbox>
        </template>
        <template v-slot:description>
          <div>
            在r-checkbox元素中定义
            <code>v-model</code>
            绑定变量，单一的checkbox中，默认绑定变量的值会是
            <code>Boolean</code> ，选中为 <code>true</code> 。
          </div>
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo2.code" :title="demo2.title" :notes="demo2.notes">
        <template v-slot:sourse>
          <r-checkbox v-model="checked1" disabled>备选项1</r-checkbox>
          <r-checkbox v-model="checked2" disabled>备选项2</r-checkbox>
        </template>
        <template v-slot:description>
          <div>设置 <code>disabled</code> 属性即可。</div>
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo3.code" :title="demo3.title" :notes="demo3.notes">
        <template v-slot:sourse>
          <r-checkbox-group v-model="checkList">
            <r-checkbox label="复选框 A"></r-checkbox>
            <r-checkbox label="复选框 B"></r-checkbox>
            <r-checkbox label="复选框 C"></r-checkbox>
            <r-checkbox label="禁用" disabled></r-checkbox>
            <r-checkbox label="选中且禁用" disabled></r-checkbox>
          </r-checkbox-group>
        </template>
        <template v-slot:description>
          <div>
            checkbox-group元素能把多个 checkbox 管理为一组，只需要在 Group 中使用
            <code>v-model</code> 绑定Array类型的变量即可。 r-checkbox 的 <code>label</code> 属性是该
            checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。
            <code>label</code>
            与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。
          </div>
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo4.code" :title="demo4.title" :notes="demo4.notes">
        <template v-slot:sourse>
          <r-checkbox
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            @change="handleCheckAllChange"
            >全选</r-checkbox
          >
          <div style="margin: 15px 0;"></div>
          <r-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <r-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</r-checkbox>
          </r-checkbox-group>
        </template>
        <template v-slot:description></template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo5.code" :title="demo5.title" :notes="demo5.notes">
        <template v-slot:sourse>
          <r-checkbox-group v-model="checkedCities1" :min="1" :max="2">
            <r-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</r-checkbox>
          </r-checkbox-group>
        </template>
        <template v-slot:description></template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo6.code" :title="demo6.title" :notes="demo6.notes">
        <template v-slot:sourse>
          <div>
            <r-checkbox-group v-model="checkboxGroup2">
              <r-checkbox-button v-for="city in cities" :label="city" :key="city">{{
                city
              }}</r-checkbox-button>
            </r-checkbox-group>
          </div>
          <div style="margin-top: 20px">
            <r-checkbox-group v-model="checkboxGroup3" size="medium">
              <r-checkbox-button v-for="city in cities" :label="city" :key="city">{{
                city
              }}</r-checkbox-button>
            </r-checkbox-group>
          </div>
          <div style="margin-top: 20px">
            <r-checkbox-group v-model="checkboxGroup4" size="small">
              <r-checkbox-button
                v-for="city in cities"
                :label="city"
                :disabled="city === '北京'"
                :key="city"
                >{{ city }}</r-checkbox-button
              >
            </r-checkbox-group>
          </div>
          <div style="margin-top: 20px">
            <r-checkbox-group v-model="checkboxGroup5" size="mini" disabled>
              <r-checkbox-button v-for="city in cities" :label="city" :key="city">{{
                city
              }}</r-checkbox-button>
            </r-checkbox-group>
          </div>
        </template>
        <template v-slot:description>
          只需要把r-checkbox元素替换为r-checkbox-button元素即可。此外，Rui 还提供了
          <code>size</code> 属性。
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo7.code" :title="demo7.title" :notes="demo7.notes">
        <template v-slot:sourse>
          <div>
            <r-checkbox v-model="checked3" label="备选项1" border></r-checkbox>
            <r-checkbox v-model="checked4" label="备选项2" border></r-checkbox>
          </div>
          <div style="margin-top: 20px">
            <r-checkbox v-model="checked5" label="备选项1" border size="medium"></r-checkbox>
            <r-checkbox v-model="checked6" label="备选项2" border size="medium"></r-checkbox>
          </div>
          <div style="margin-top: 20px">
            <r-checkbox-group v-model="checkboxGroup6" size="small">
              <r-checkbox label="备选项1" border></r-checkbox>
              <r-checkbox label="备选项2" border disabled></r-checkbox>
            </r-checkbox-group>
          </div>
          <div style="margin-top: 20px">
            <r-checkbox-group v-model="checkboxGroup7" size="mini" disabled>
              <r-checkbox label="备选项1" border></r-checkbox>
              <r-checkbox label="备选项2" border></r-checkbox>
            </r-checkbox-group>
          </div>
        </template>
        <template v-slot:description>
          设置
          <code>border</code> 属性可以渲染为带有边框的多选框。
        </template>
      </examplebox>
    </div>
  </div>
</template>
<script>
import Examplebox from "@/components/Examplebox";
import code from './code.ts'
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  name: "checkboxviewapp",
  components: {
    Examplebox
  },
  data() {
    return {
      title: "Checkbox 多选框",
      description: "一组备选项中进行多选",
      demo1: {
        title: "基础用法",
        notes: "单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。",
        code: code.code1
      },
      demo2: {
        title: "禁用状态",
        notes: "多选框不可用状态。",
        code: code.code2
      },
      demo3: {
        title: "多选框组",
        notes: "适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。",
        code: code.code3
      },
      demo4: {
        title: "indeterminate 状态",
        notes: "indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果",
        code: code.code4
      },
      demo5: {
        title: "可选项目数量的限制",
        notes: "使用 min 和 max 属性能够限制可以被勾选的项目的数量。",
        code: code.code5
      },
      demo6: {
        title: "按钮样式",
        notes: "按钮样式的多选组合。",
        code: code.code6
      },
      demo7: {
        title: "带有边框",
        code: code.code7
      },
      checked: true,
      checked1: false,
      checked2: true,
      checkList: ["选中且禁用", "复选框 A"],
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,
      checkedCities1: ["上海", "北京"],
      checkboxGroup2: ["上海"],
      checkboxGroup3: ["上海"],
      checkboxGroup4: ["上海"],
      checkboxGroup5: ["上海"],
      checked3: true,
      checked4: false,
      checked5: false,
      checked6: true,
      checkboxGroup6: ["备选项1"],
      checkboxGroup7: ["备选项2"],
      citytext: "{{city}}"
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

<style lang="scss">
.checkboxviewapp {
  padding-bottom: 200px;
  p {
    margin: 14px 0;
  }
  .demoCheckbox + .demoCheckbox {
    margin-top: 20px;
  }
  .r_checkbox_group + .r_checkbox_group {
    margin-top: 20px;
  }
}
</style>
