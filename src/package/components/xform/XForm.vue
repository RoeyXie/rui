<template>
  <el-form
    :class="{ 'x-form': true }"
    ref="form"
    :model="params"
    :label-width="inline === '' ? '0' : $attrs['label-width'] || '80px'"
    v-bind="$attrs"
    @submit.prevent
    :disabled="disabled === true"
    :rules="formRules"
    :inline="inline"
  >
    <template v-if="inline">
      <x-form-item
        v-for="({ key, title, type, options, formItemProps, spans, ...otherProps },
        index) of currentData"
        :key="index"
        :propskey="key"
        :title="title"
        :type="type"
        :options="options"
        :formItemProps="formItemProps"
        :otherProps="otherProps"
        :params="params"
        :inline="inline"
      >
        <!-- 关键：将传入的具名插槽声明透传 -->
        <template
          v-for="(slots, slotKey) of $scopedSlots"
          :slot="slotKey"
          slot-scope="{ row, index }"
        >
          <slot :name="slotKey" :row="row" :index="index"> </slot>
        </template>
      </x-form-item>
    </template>
    <template v-else>
      <el-row :gutter="20" v-for="(row, index) of showData" :key="index">
        <el-col
          v-for="({ key, title, type, options, formItemProps, spans, ...otherProps }, i) of row"
          :key="i + key"
          :span="spans"
        >
          <x-form-item
            :propskey="key"
            :title="title"
            :type="type"
            :options="options"
            :formItemProps="formItemProps"
            :otherProps="otherProps"
            :params="params"
          >
            <!-- 关键：将传入的具名插槽声明透传 -->
            <template
              v-for="(slots, slotKey) of $scopedSlots"
              :slot="slotKey"
              slot-scope="{ row, index }"
            >
              <slot :name="slotKey" :row="row" :index="index"> </slot>
            </template>
          </x-form-item>
        </el-col>
      </el-row>
    </template>
  </el-form>
</template>
<script>
import { deepCopy } from "@/assets/js/common.js";
import XFormItem from "./XFormItem.vue";
export default {
  name: "XForm",
  components: { XFormItem },
  props: {
    cfgdata: {
      type: Array,
      default: () => []
    },
    value: {
      type: Object,
      default: () => ({})
    },
    disabled: {
      type: [Boolean, String],
      default: false
    },
    columns: {
      type: [Number, Array],
      default: 1
    },
    formRules: {
      type: Object,
      default: () => ({})
    },
    inline: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentData: [],
      params: {},
      showData: []
    };
  },
  watch: {
    value: {
      handler(val) {
        this.params = val;
      },
      immediate: true
    },
    params: {
      handler(val) {
        this.$emit("input", val);
      },
      deep: true
    },
    disabled(disabled) {
      this.currentData = this.currentData.map(item => ({
        ...item,
        disabled: !!disabled
      }));
    },
    cfgdata: {
      handler(val) {
        this.handleData(val);
      },
      immediate: true,
      deep: true
    },
    currentData: {
      handler() {
        if (!this.inline) {
          this.handlerCurrentData();
        }
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    // 对传进来的data进行处理
    handleData(data) {
      const _data = deepCopy(data);
      this.currentData = _data.map(item => {
        // 根据类型设置
        switch (item.type) {
          case "input":
            // default:
            item.placeholder = item.placeholder || `请输入${item.title}`;
            item.clearable = item.clearable === undefined ? true : item.clearable;
            break;
          case "select":
            item.placeholder = item.placeholder || `请选择${item.title}`;
            item.clearable = item.clearable === undefined ? true : item.clearable;
            item.filterable = item.filterable === undefined ? true : item.filterable;
            item.options = item.options || [];
            break;
          case "checkbox":
            if (
              (this.params[item.key] && this.params[item.key].length === 0) ||
              !this.params[item.key]
            ) {
              this.params[item.key] = [];
            }
            item.options = item.options || [];
            break;
          case "radio":
            item.options = item.options || [];
            break;
          case "radioButton":
            item.options = item.options || [];
            break;
          case "cascader":
            item.options = item.options || [];
            break;
          case "date":
            item.placeholder = item.placeholder || `请选择${item.title}`;
            item.dateType = item.dateType || "date";
            break;
        }
        return item;
      });
    },
    unFalsy(value) {
      return value || value === 0;
    },
    // 根据传进来的数据，生成双向绑定的初始对象
    resetParams() {
      let params = {};
      for (const item of this.currentData) {
        switch (item.type) {
          case "input":
            // default:
            params[item.key] = "";
            break;
          case "select":
            params[item.key] = item.multiple ? [] : "";
            break;
          case "date":
            switch (item.dateType) {
              case "daterange":
              case "datetimerange":
                params[item.key] = [];
                break;
              default:
                params[item.key] = "";
                break;
            }
            break;
          case "checkbox":
            params[item.key] = [];
            break;
          case "daterange":
            params[item.key] = [];
            break;
          case "switch":
            params[item.key] = false;
            break;
          case "cascader":
            params[item.key] = [];
            break;
        }
        if (this.unFalsy(item.value)) params[item.key] = item.value;
      }
      this.params = params;
    },
    // 该函数提供给外部调用
    resetFields() {
      this.$refs.form.resetFields();
      // this.resetParams()
    },
    // 该函数提供给外部调用
    validate(fun) {
      this.$refs.form.validate(fun);
    },
    handlerCurrentData() {
      const currentData = deepCopy(this.currentData);
      let arr =
        typeof this.columns === "number"
          ? Array.from(
              { length: Math.ceil(this.currentData.length / this.columns) },
              item => this.columns
            )
          : this.columns;
      arr.forEach((item, i) => {
        const children = currentData.splice(0, item);
        // console.log(children)
        // 一共多少 span ；
        const sumSpan = children.reduce((total, item) => {
          return (total += item.cols || 1);
        }, 0);
        // console.log(sumSpan)
        children.forEach(chil => {
          chil.spans = (24 / sumSpan) * (chil.cols || 1);
        });
        this.showData.push(children);
      });
      // console.log(this.showData)
      this.$nextTick(() => this.resetFields());
    }
  }
};
</script>
<style lang="scss">
.x-form {
  input {
    width: 100%;
  }
  .el-select {
    width: 100%;
  }
  .el-date-editor.el-input,
  .el-date-editor.el-input__inner {
    width: 100%;
  }
}
.x-form.el-form--inline {
  .el-row {
    .el-col {
      .el-form-item {
        width: 100%;
        .el-form-item__content {
          width: 100%;
        }
      }
    }
  }
}

.x-form {
  .el-row {
    .el-col {
      .el-form-item {
        .el-form-item__content {
          .el-radio-group {
            .el-radio {
              line-height: 32px;
            }
          }
        }
      }
    }
  }
}
</style>
