<script>
import { defineComponent, onMounted, reactive, toRefs, computed } from "@vue/composition-api";
export default defineComponent({
  name: "r-checkbox",
  customOption: "RCheckbox",
  props: {
    value: {},
    label: {},
    disabled: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    indeterminate: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { parent, emit }) {
    let state = reactive({
      checkboxGroup: null,
      isCheckboxGroup: false,
      checkboxLabelClass: computed(() => {
        return [
          "r_checkbox",
          state.isChecked ? "ischecked" : "",
          state.isDisable ? "isdisabled" : "",
          props.indeterminate ? "isindeterminated" : "",
          props.border ? "isborder" : "",
          props.border && state.whatSize ? `r_size_${state.whatSize}` : ""
        ];
      }),
      isDisable: computed(() => {
        return state.isCheckboxGroup
          ? state.checkboxGroup.disabled ||
              props.disabled ||
              state.isMinLimited ||
              state.isMaxLimited
          : props.disabled;
      }),
      isChecked: computed(() => {
        return state.isCheckboxGroup
          ? state.checkboxGroup.value.indexOf(props.label) > -1
          : state.model === true;
      }),
      isMinLimited: computed(() => {
        if (state.isCheckboxGroup && state.checkboxGroup.min) {
          return state.checkboxGroup.value.length <= state.checkboxGroup.min
            ? state.isChecked
            : false;
        } else {
          return false;
        }
      }),
      isMaxLimited: computed(() => {
        if (state.isCheckboxGroup && state.checkboxGroup.max) {
          return state.checkboxGroup.value.length >= state.checkboxGroup.max
            ? !state.isChecked
            : false;
        } else {
          return false;
        }
      }),
      whatSize: computed(() => {
        return state.isCheckboxGroup ? state.checkboxGroup.size || props.size : props.size;
      }),
      model: computed({
        get() {
          return state.isCheckboxGroup ? state.checkboxGroup.value : props.value;
        },
        set(val) {
          state.isCheckboxGroup ? parent.$emit("input", val) : emit("input", val);
          state.isCheckboxGroup ? parent.$emit("change", val) : emit("change", val);
        }
      })
    });
    const isGroup = () => {
      let _parent = parent;
      while (_parent) {
        if (_parent.$options.customOption !== "RCheckboxGroup") {
          _parent = _parent.$parent;
        } else {
          state.checkboxGroup = _parent;
          return true;
        }
      }
      return false;
    };
    onMounted(() => {
      state.isCheckboxGroup = isGroup();
    });
    return {
      ...toRefs(state)
    };
  },
  render() {
    const { checkboxLabelClass, label, isDisable, $slots } = this;
    const slotDom = !$slots.default ? <span>{label}</span> : null;
    return (
      <label class={checkboxLabelClass}>
        <span class="r_checkbox_input">
          <span class="r_checkbox_input_inner"></span>
          <input
            class="inputinner"
            type="checkbox"
            value={label}
            vModel={this.model}
            disabled={isDisable}
          />
        </span>
        <span class="r_checkbox_label">
          {$slots.default}
          {slotDom}
        </span>
      </label>
    );
  }
});
</script>

<style lang="scss">
@import "../../scss/var";
@import "../../scss/mixin";

.r_checkbox {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  transition: all 0.3s;
  .r_checkbox_input {
    position: relative;
    display: inline-block;
    vertical-align: -2px;
    .r_checkbox_input_inner {
      position: relative;
      display: inline-block;
      border-radius: 2px;
      width: 14px;
      height: 14px;
      border: 1px solid #dcdfe6;
      z-index: 1;
      box-sizing: border-box;
    }
    .inputinner {
      position: absolute;
      opacity: 0;
      padding: 0;
      margin: 0;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }
  .r_checkbox_label {
    padding: 0 0 0 10px;
    font-size: 14px;
  }
}

.ischecked {
  color: $radio-selected-color;
  .r_checkbox_input {
    .r_checkbox_input_inner {
      background-color: $radio-selected-color;
      border: 1px solid $radio-selected-color;
      &::after {
        content: "";
        display: inline-block;
        height: 7px;
        width: 4px;
        border: 1px solid #ffffff;
        border-left: 0;
        border-top: 0;
        position: absolute;
        left: 3px;
        top: 1px;
        transform: rotate(45deg);
        transition: all 0.3s;
      }
    }
  }
}

.isdisabled {
  color: $radio-disabled-color;
  cursor: not-allowed;
}

.isdisabled.ischecked {
  color: $radio-disabled-color;
  .r_checkbox_input {
    .r_checkbox_input_inner {
      background-color: $radio-disabled-color;
      border: 1px solid $radio-disabled-color;
    }
  }
}

.isindeterminated {
  .r_checkbox_input {
    .r_checkbox_input_inner {
      background-color: $radio-selected-color;
      border: 1px solid $radio-selected-color;
      &::after {
        content: "";
        position: absolute;
        display: block;
        background-color: rgb(255, 255, 255);
        height: 2px;
        transform: scale(0.5);
        left: 0px;
        right: 0px;
        top: 5px;
      }
    }
  }
}

.isborder {
  padding: 13px 20px 0 10px;
  box-sizing: border-box;
  height: 40px;
  border-radius: 4px;
  border: 1px solid $radio-disabled-color;
}

.isborder.ischecked {
  border: 1px solid $radio-selected-color;
}

.isborder.isdisabled {
  border: 1px solid $radio-disabled-color;
}

.r_size_medium.isborder {
  padding: 10px 20px 0 10px;
  border-radius: 4px;
  height: 36px;
}
.r_size_small.isborder {
  padding: 8px 15px 0 10px;
  border-radius: 3px;
  height: 32px;
}
.r_size_mini.isborder {
  padding: 6px 15px 0 10px;
  border-radius: 3px;
  height: 28px;
}
.r_size_small.isborder,
.r_size_mini.isborder {
  .r_checkbox_input {
    .r_checkbox_input_inner {
      width: 12px;
      height: 12px;
      &::after {
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 3px;
        position: absolute;
        top: 0px;
        transform: rotate(45deg);
        width: 3px;
      }
    }
  }
  .r_checkbox_label {
    padding: 0 0 0 8px;
    font-size: 12px;
  }
}
</style>
