<script>
import { defineComponent, onMounted, reactive, toRefs, computed } from "@vue/composition-api";

export default defineComponent({
  name: "r-checkbox-button",
  customOption: "RCheckboxButton",
  props: {
    value: {},
    label: {},
    disabled: {
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
          "r_checkbox_button",
          state.isChecked ? "ischecked" : "",
          state.isDisable ? "isdisabled" : "",
          state.whatSize ? `r_size_${state.whatSize}` : ""
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
        <input
          class="input_button_inner"
          type="checkbox"
          value={label}
          vModel={this.model}
          disabled={isDisable}
        />
        <span class="r_checkbox_button_label">
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
.r_checkbox_button {
  color: #606266;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  font-size: 14px;
  position: relative;
  outline: none;
  box-sizing: border-box;
  display: inline-block;
  .input_button_inner {
    opacity: 0;
    outline: none;
    position: absolute;
    z-index: -1;
  }
  .r_checkbox_button_label {
    transition: all 0.3s;
    background: #fff;
    font-size: 14px;
    line-height: 1;
    padding: 12px 22px;
    border-radius: 4px;
    border: 1px solid $radio-boder-color;
    display: inline-block;
    &:hover {
      color: $radio-selected-color;
    }
    display: inline-block;
  }
}

.ischecked {
  .r_checkbox_button_label {
    background-color: $radio-selected-color;
    border-color: $radio-selected-color;
    color: #fff;
    box-shadow: -1px 0 0 0 #8cc5ff;
    &:hover {
      color: #fff;
    }
  }
}

.r_checkbox_group {
  .r_checkbox_button {
    &:not(:first-child):not(:last-child) {
      .r_checkbox_button_label {
        border-radius: 0;
        border-left: 0;
      }
    }
    &:first-child {
      .r_checkbox_button_label {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
    &:last-child {
      .r_checkbox_button_label {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: 0;
      }
    }
  }
}

.isdisabled {
  color: $radio-disabled-color;
  cursor: not-allowed;
  .r_checkbox_button_label {
    &:hover {
      color: $radio-disabled-color;
    }
  }
}

.isdisabled.ischecked {
  .r_checkbox_button_label {
    color: $radio-disabled-color;
    background-color: $radio-disabled-bgcolor;
    border-color: $radio-boder-color;
    box-shadow: -1px 0 0 0 $radio-boder-color;
  }
}

.r_size_medium {
  .r_checkbox_button_label {
    padding: 10px 22px;
  }
}

.r_size_small {
  .r_checkbox_button_label {
    padding: 9px 15px;
    font-size: 12px;
  }
}

.r_size_mini {
  .r_checkbox_button_label {
    padding: 7px 15px;
    font-size: 12px;
  }
}
</style>
