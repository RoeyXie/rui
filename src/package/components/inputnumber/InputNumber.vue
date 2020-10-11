<script>
import rInput from "../input/Input";

import { defineComponent, reactive, watch, toRefs, computed } from "@vue/composition-api";
export default defineComponent({
  name: "r-input-number",
  components: {
    rInput
  },
  props: {
    value: { type: Number },
    min: {
      type: Number,
      default: -Infinity
    },
    max: {
      type: Number,
      default: Infinity
    },
    step: {
      type: Number,
      default: 1
    },
    stepStrictly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    precision: {
      type: Number,
      validator(val) {
        return val >= 0 && val === parseInt(val, 10);
      }
    },
    size: {
      type: String
    },
    controls: {
      type: Boolean,
      default: true
    },
    controlsPosition: {
      type: String
    },
    name: String,
    label: String,
    placeholder: String
  },
  setup(props, { emit }) {
    let state = reactive({
      currentValue: 0,
      userInput: null,
      boxClass: computed(() => {
        return [
          "inputnumberbox",
          props.disabled ? "r-disabled" : "",
          props.size ? `r-inputnum-${props.size}` : "",
          props.controls === false
            ? "r-inputnum-without"
            : props.controlsPosition === "right"
            ? `r-inputnum-right`
            : ""
        ];
      }),
      displayValue: computed(() => {
        if (state.userInput !== null) {
          return state.userInput;
        } else {
          let currentValue = state.currentValue;
          if (typeof currentValue === "number") {
            if (props.stepStrictly) {
              currentValue = Math.round(currentValue / props.step) * props.step;
            }
            if (props.precision !== undefined) {
              currentValue = currentValue.toFixed(props.precision);
            }
          }
          return currentValue;
        }
      }),
      increaseForbidden: computed(() => {
        return state.currentValue === props.max || props.disabled;
      }),
      descreateForbidden: computed(() => {
        return state.currentValue === props.min || props.disabled;
      })
    });
    const _descreate = (value, step) => {
      return (value -= step);
    };
    const _increase = (value, step) => {
      return (value += step);
    };
    const descreateNumber = () => {
      if (state.descreateForbidden) return;
      const value = props.value || 0;
      const newValue = _descreate(value, props.step);
      setCurrentValue(newValue);
    };
    const increaseNumber = () => {
      if (state.increaseForbidden) return;
      const value = props.value || 0;
      const newValue = _increase(value, props.step);
      setCurrentValue(newValue);
    };
    const handleInput = value => {
      state.userInput = value;
    };
    const handleInputChange = value => {
      const newValue = value === "" ? undefined : Number(value);
      if (!isNaN(newValue) || value === "") {
        setCurrentValue(newValue);
      }
    };
    const setCurrentValue = newValue => {
      const oldVal = state.currentValue;
      if (typeof newValue === "number") {
        if (props.stepStrictly) {
          newValue = Math.round(newValue / props.step) * props.step;
        }
        if (props.precision !== undefined) {
          newValue = toPrecision(newValue, props.precision);
        }
      }
      if (newValue >= props.max) newValue = props.max;
      if (newValue <= props.min) newValue = props.min;
      state.userInput = null;
      emit("input", newValue);
      emit("change", newValue, oldVal);
      state.currentValue = newValue;
    };
    const toPrecision = (num, precision) => {
      return parseFloat(Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision));
    };
    watch(
      () => props.value,
      value => {
        let newValue = value === undefined ? value : Number(value);
        if (newValue >= props.max) newValue = props.max;
        if (newValue <= props.min) newValue = props.min;
        state.currentValue = newValue;
        state.userInput = null;
        emit("input", newValue);
      },
      {
        immediate: true
      }
    );
    return {
      ...toRefs(state),
      descreateNumber,
      increaseNumber,
      handleInput,
      handleInputChange
    };
  },
  render() {
    const {
      boxClass,
      increaseForbidden,
      descreateForbidden,
      increaseNumber,
      descreateNumber,
      displayValue,
      handleInput,
      handleInputChange,
      disabled,
      size,
      name,
      label,
      placeholder,
      controls,
      controlsPosition
    } = this;
    const dom1 =
      controls && !controlsPosition ? (
        <div class="control">
          <span
            class={{ increasebox: true, forbiddenClass: increaseForbidden }}
            onClick={increaseNumber}
          >
            <i class="iconfont icon-jiahao"></i>
          </span>
          <span
            class={{
              descreatebox: true,
              forbiddenClass: descreateForbidden
            }}
            onClick={descreateNumber}
          >
            <i class="iconfont icon-jianhao"></i>
          </span>
        </div>
      ) : null;
    const dom2 =
      controls && controlsPosition === "right" ? (
        <div class="rightControl">
          <span
            class={{
              increasebox_right: true,
              forbiddenClass: increaseForbidden
            }}
            onClick={increaseNumber}
          >
            <i class="iconfont icon-shang"></i>
          </span>
          <span
            class={{
              descreatebox_right: true,
              forbiddenClass: descreateForbidden
            }}
            onClick={descreateNumber}
          >
            <i class="iconfont icon-xia"></i>
          </span>
        </div>
      ) : null;
    return (
      <div class={boxClass}>
        {dom1}
        <r-input
          value={displayValue}
          onInput={handleInput}
          onChange={handleInputChange}
          disabled={disabled}
          size={size}
          type="number"
          name={name}
          label={label}
          placeholder={placeholder}
        ></r-input>
        {dom2}
      </div>
    );
  }
});
</script>

<style lang="scss">
@import "../../scss/var";
@import "../../scss/mixin";

.inputnumberbox {
  position: relative;
  display: inline-block;
  width: 180px;
  .rinput {
    input {
      text-align: center;
      padding-left: 50px;
      padding-right: 50px;
    }
  }
  .descreatebox {
    left: 1px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-right: 1px solid $input-border-color;
  }
  .increasebox {
    right: 1px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-left: 1px solid $input-border-color;
  }

  .increasebox,
  .descreatebox {
    position: absolute;
    line-height: 38px;
    z-index: 1;
    top: 1px;
    width: 40px;
    height: auto;
    text-align: center;
    background: #f5f7fa;
    color: #606266;
    cursor: pointer;
    font-size: 12px;
    i {
      font-size: 12px;
    }
    &:hover {
      color: $color-blue;
    }
  }
  .rightControl {
    display: flex;
    position: absolute;
    right: 1px;
    top: 1px;
    z-index: 1;
    width: 40px;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f5f7fa;
    color: #606266;
    height: 38px;
    line-height: 19px;
    border-left: 1px solid #dcdfe6;
  }
  .increasebox_right,
  .descreatebox_right {
    display: inline-block;
    width: 40px;
    cursor: pointer;
    i {
      font-size: 12px;
    }
    &:hover {
      color: $color-blue;
    }
  }
  .increasebox_right {
    border-radius: 0 4px 0 0;
    border-bottom: 1px solid #dcdfe6;
  }
  .descreatebox_right {
    bottom: 1px;
    border-radius: 0 0 4px 0;
  }

  .forbiddenClass {
    cursor: not-allowed;
    color: #c0c4cc;
    &:hover {
      color: #c0c4cc;
    }
  }
}

.r-disabled {
  .rinput {
    input {
      background-color: #f5f7fa;
    }
  }
}

.r-inputnum-medium {
  .increasebox,
  .descreatebox {
    line-height: 34px;
  }
}
.r-inputnum-small {
  .increasebox,
  .descreatebox {
    line-height: 30px;
  }
}
.r-inputnum-mini {
  .increasebox,
  .descreatebox {
    line-height: 26px;
  }
}

.r-inputnum-right {
  .rinput {
    input {
      text-align: center;
      padding-left: 15px;
      padding-right: 50px;
    }
  }
}

.r-inputnum-without {
  .rinput {
    input {
      text-align: center;
      padding-left: 15px;
      padding-right: 15px;
    }
  }
}

.r-inputnum-medium {
  .rightControl {
    height: 34px;
    line-height: 17px;
  }
}
.r-inputnum-small {
  .rightControl {
    height: 30px;
    line-height: 15px;
  }
}
.r-inputnum-mini {
  .rightControl {
    height: 26px;
    line-height: 13px;
  }
}
</style>
