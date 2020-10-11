<script>
import { defineComponent, onMounted, reactive, toRefs, computed } from "@vue/composition-api";
export default defineComponent({
  name: "r-radio-button",
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
    }
  },
  customOption: "RRadioButton",
  setup(props, { parent, emit }) {
    let state = reactive({
      radioGroup: null,
      isRadioGroup: false,
      radioLabelClass: computed(() => {
        return [
          "r_radio_button",
          state.model === props.label ? "ischecked" : "",
          state.isDisable ? "isdisabled" : "",
          state.whatSize ? `r_size_${state.whatSize}` : ""
        ];
      }),
      isDisable: computed(() => {
        return state.isRadioGroup ? state.radioGroup.disabled || props.disabled : props.disabled;
      }),
      whatSize: computed(() => {
        return state.isRadioGroup ? state.radioGroup.size : "";
      }),
      model: computed({
        get() {
          return state.isRadioGroup ? state.radioGroup.value : props.value;
        },
        set(val) {
          state.isRadioGroup ? parent.$emit("input", val) : emit("input", val);
          state.isRadioGroup ? parent.$emit("change", val) : emit("change", val);
        }
      })
    });
    const isGroup = () => {
      let _parent = parent;
      while (_parent) {
        if (_parent.$options.customOption !== "RRadioGroup") {
          _parent = _parent.$parent;
        } else {
          state.radioGroup = _parent;
          return true;
        }
      }
      return false;
    };
    onMounted(() => {
      state.isRadioGroup = isGroup();
    });
    return {
      ...toRefs(state, isGroup)
    };
  },
  render() {
    const { radioLabelClass, $slots, label, isDisable } = this;
    const slotDom = !$slots.default ? <span>{label}</span> : null;
    return (
      <label class={radioLabelClass}>
        <input
          class="input_button_inner"
          type="radio"
          value={label}
          vModel={this.model}
          disabled={isDisable}
        />
        <span class="r_radio_button_label">
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
.r_radio_button {
  color: #606266;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  font-size: 14px;
  position: relative;
  outline: none;
  box-sizing: border-box;
  display: inline-block;
  // float: left;
  .input_button_inner {
    opacity: 0;
    outline: none;
    position: absolute;
    z-index: -1;
  }
  .r_radio_button_label {
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
  .r_radio_button_label {
    background-color: $radio-selected-color;
    border-color: $radio-selected-color;
    color: #fff;
    box-shadow: -1px 0 0 0 #409eff;
    &:hover {
      color: #fff;
    }
  }
}

.r_radio_group {
  .r_radio_button {
    &:not(:first-child):not(:last-child) {
      .r_radio_button_label {
        border-radius: 0;
        border-left: 0;
      }
    }
    &:first-child {
      .r_radio_button_label {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
    &:last-child {
      .r_radio_button_label {
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
  .r_radio_button_label {
    &:hover {
      color: $radio-disabled-color;
    }
  }
}

.isdisabled.ischecked {
  .r_radio_button_label {
    color: $radio-disabled-color;
    background-color: $radio-disabled-bgcolor;
    border-color: $radio-boder-color;
    box-shadow: -1px 0 0 0 $radio-boder-color;
  }
}

.r_size_medium {
  .r_radio_button_label {
    padding: 10px 22px;
  }
}

.r_size_small {
  .r_radio_button_label {
    padding: 9px 15px;
    font-size: 12px;
  }
}

.r_size_mini {
  .r_radio_button_label {
    padding: 7px 15px;
    font-size: 12px;
  }
}
</style>
