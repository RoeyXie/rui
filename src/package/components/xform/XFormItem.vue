<template>
  <el-form-item :prop="propskey" :label="inline ? '' : title" v-bind="formItemProps">
    <!-- 只显示值-->
    <span v-if="type === 'text'" class="disabled-text">
      {{
        getDisabledValue({
          propskey,
          value: params[propskey],
          type,
          options
        })
      }}
    </span>
    <!-- 文本框 -->
    <el-input
      v-else-if="type === 'input'"
      v-model="params[propskey]"
      @keyup.enter.native="$emit('enter')"
      v-bind="otherProps"
    />
    <!-- v-else-if="!type || type === 'input'" -->
    <!-- 富文本框 -->
    <el-input
      v-else-if="type === 'textarea'"
      type="textarea"
      v-model="params[propskey]"
      v-bind="otherProps"
    />
    <!-- 下拉框 -->
    <el-select v-else-if="type === 'select'" v-model="params[propskey]" v-bind="otherProps">
      <el-option
        v-for="option in options"
        :key="option.value"
        :label="option.label"
        :value="option.value"
        >{{ option.label }}</el-option
      >
    </el-select>
    <!-- 单选框 -->
    <el-radio-group v-else-if="type === 'radio'" v-model="params[propskey]" v-bind="otherProps">
      <el-radio v-for="option in options" :key="option.value" :label="option.value">{{
        option.label
      }}</el-radio>
    </el-radio-group>
    <el-radio-group
      v-else-if="type === 'radioButton'"
      v-model="params[propskey]"
      v-bind="otherProps"
    >
      <el-radio-button v-for="option in options" :key="option.value" :label="option.value">{{
        option.label
      }}</el-radio-button>
    </el-radio-group>
    <!-- 多选框 -->
    <el-checkbox-group
      v-else-if="type === 'checkbox'"
      v-model="params[propskey]"
      v-bind="otherProps"
    >
      <el-checkbox v-for="option in options" :label="option.value" :key="option.value">{{
        option.label
      }}</el-checkbox>
    </el-checkbox-group>
    <!-- 日期,默认宽度在css设置,这是iview写法,将v-model拆成value和onChange，因为格式化后的值在onChange回调里拿（element需另外写，element通过value-format设置值） -->
    <el-date-picker
      v-else-if="type === 'date'"
      :type="otherProps.dateType"
      v-model="params[propskey]"
      v-bind="otherProps"
    ></el-date-picker>
    <el-switch
      v-else-if="type === 'switch'"
      v-model="params[propskey]"
      v-bind="otherProps"
    ></el-switch>
    <el-cascader
      v-else-if="type === 'cascader'"
      v-model="params[propskey]"
      v-bind="otherProps"
      :options="options"
    ></el-cascader>
    <el-input-number
      v-else-if="type === 'inputnumber'"
      v-model="params[propskey]"
      v-bind="otherProps"
    ></el-input-number>
    <!-- 插槽 -->
    <template v-else slot-scope="{ value }">
      <slot :name="propskey" :value="params[propskey]"></slot>
    </template>
  </el-form-item>
</template>

<script>
export default {
  name: "XFormItem",
  props: {
    propskey: {
      type: String
    },
    title: {
      type: String
    },
    type: {
      type: String
    },
    options: {
      type: Array
    },
    formItemProps: {
      type: Object
    },
    otherProps: {
      type: Object
    },
    params: {
      type: Object
    },
    inline: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    // 获取disabled时的值
    getDisabledValue({ key, value, type, options }) {
      if (type === "select") {
        const option = options.find(item => item.key === value);
        return (option && option.label) || "";
      } else {
        return value;
      }
    }
  }
};
</script>
<style lang="scss">
/* @import url() */
</style>
