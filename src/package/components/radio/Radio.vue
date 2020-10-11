<script>
import { defineComponent, onMounted, reactive, toRefs, computed } from "@vue/composition-api";
export default defineComponent({
  name: "r-radio",
  customOption: "RRadio",
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
  setup(props, { parent, emit }) {
    let state = reactive({
      radioGroup: null,
      isRadioGroup: false,
      radioLabelClass: computed(() => {
        return [
          "r_radio",
          state.model === props.label ? "ischecked" : "",
          state.isDisable ? "isdisabled" : "",
          props.border ? "isborder" : "",
          props.border && state.whatSize ? `r_size_${state.whatSize}` : ""
        ];
      }),
      isDisable: computed(() => {
        return state.isRadioGroup ? state.radioGroup.disabled || props.disabled : props.disabled;
      }),
      whatSize: computed(() => {
        return state.isRadioGroup ? state.radioGroup.size || props.size : props.size;
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
    let isGroup = () => {
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
    const { radioLabelClass, label, disabled, $slots } = this;
    const slotDom = !$slots.default ? <span>{label}</span> : null;
    return (
      <label class={radioLabelClass}>
        <span class="r_radio_input">
          <span class="r_radio_input_inner"></span>
          <input
            class="inputinner"
            type="radio"
            value={label}
            vModel={this.model}
            disabled={disabled}
          />
        </span>
        <span class="r_radio_label">
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

.r_radio {
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
  .r_radio_input {
    position: relative;
    display: inline-block;
    vertical-align: -2px;
    .r_radio_input_inner {
      position: relative;
      display: inline-block;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      border: 1px solid #dcdfe6;
      z-index: 1;
      box-sizing: border-box;
      &::after {
        content: "";
        display: inline-block;
        border-radius: 100%;
        width: 4px;
        height: 4px;
        background-color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
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
  .r_radio_label {
    padding: 0 0 0 10px;
    font-size: 14px;
  }
}
.ischecked {
  color: $radio-selected-color;
  .r_radio_input {
    .r_radio_input_inner {
      background-color: $radio-selected-color;
      border: 1px solid $radio-selected-color;
    }
  }
}

.isdisabled {
  color: $radio-disabled-color;
  cursor: not-allowed;
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

.isdisabled.ischecked {
  color: $radio-disabled-color;
  .r_radio_input {
    .r_radio_input_inner {
      background-color: $radio-disabled-color;
      border: 1px solid $radio-disabled-color;
    }
  }
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
  .r_radio_input {
    .r_radio_input_inner {
      width: 12px;
      height: 12px;
      &::after {
        content: "";
        display: inline-block;
        border-radius: 100%;
        width: 3px;
        height: 3px;
      }
    }
  }
  .r_radio_label {
    padding: 0 0 0 8px;
    font-size: 12px;
  }
}
.r_size_mini.isborder {
  padding: 6px 15px 0 10px;
  border-radius: 3px;
  height: 28px;
  .r_radio_input {
    .r_radio_input_inner {
      width: 12px;
      height: 12px;
      &::after {
        content: "";
        display: inline-block;
        border-radius: 100%;
        width: 3px;
        height: 3px;
      }
    }
  }
  .r_radio_label {
    padding: 0 0 0 8px;
    font-size: 12px;
  }
}
</style>
