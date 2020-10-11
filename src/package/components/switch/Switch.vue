<script>
import {
  defineComponent,
  onMounted,
  reactive,
  watch,
  toRefs,
  computed
} from "@vue/composition-api";
export default defineComponent({
  name: "r-switch",
  props: {
    value: {
      default: false
    },
    name: {},
    activeValue: {
      default: true
    },
    inactiveValue: {
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: ""
    },
    activeText: {
      type: String
    },
    inactiveText: {
      type: String
    }
  },
  setup(props, { emit, refs }) {
    let state = reactive({
      swichBoxClass: computed(() => {
        return [
          "r_switch",
          state.checked ? "r_swich_true" : "",
          props.disabled ? "r_swich_disabled" : ""
        ];
      }),
      checked: computed(() => {
        return props.value === props.activeValue;
      }),
      leftLableClass: computed(() => {
        return ["switch_lable", "switch_lable_left", !state.checked ? "is_active" : ""];
      }),
      rightLableClass: computed(() => {
        return ["switch_lable", "switch_lable_right", state.checked ? "is_active" : ""];
      })
    });
    const switchValue = () => {
      if (!props.disabled) {
        handelChange();
      }
    };
    const handelChange = () => {
      const value = state.checked ? props.inactiveValue : props.activeValue;
      emit("input", value);
      emit("change", value);
    };
    const setBackgroundColor = () => {
      let newColor = state.checked ? props.activeColor : props.inactiveColor;
      refs.span.style.backgroundColor = newColor;
    };
    onMounted(() => {
      if (props.activeColor || props.inactiveColor) {
        setBackgroundColor();
      }
    });
    watch(
      () => state.checked,
      () => {
        refs.input.checked = state.checked;
        if (props.activeColor || props.inactiveColor) {
          setBackgroundColor();
        }
      }
    );
    return {
      ...toRefs(state),
      switchValue
    };
  },
  render() {
    const {
      swichBoxClass,
      switchValue,
      activeValue,
      inactiveValue,
      disabled,
      name,
      leftLableClass,
      activeText,
      rightLableClass,
      inactiveText
    } = this;
    const activeTextDom = activeText ? (
      <span class={leftLableClass}>
        <span>{activeText}</span>
      </span>
    ) : null;
    const inactiveTextDom = inactiveText ? (
      <span class={rightLableClass}>
        <span>{inactiveText}</span>
      </span>
    ) : null;
    return (
      <div class={swichBoxClass} onClick={switchValue}>
        <input
          type="checkbox"
          class="switch_input"
          true-value={activeValue}
          false-value={inactiveValue}
          ref="input"
          disabled={disabled}
          name={name}
        />
        {activeTextDom}
        <span class="switch_span" ref="span"></span>
        {inactiveTextDom}
      </div>
    );
  }
});
</script>

<style lang="scss">
@import "../../scss/var";
@import "../../scss/mixin";

.r_switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  cursor: pointer;
  .switch_input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .switch_span {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: $switch-lable-color;
    transition: background-color 0.3s;
    &::after {
      content: "";
      position: absolute;
      top: 2px;
      left: 2px;
      border-radius: 100%;
      width: 16px;
      height: 16px;
      background-color: #ffffff;
      transition: all 0.3s;
    }
  }
  .switch_lable {
    transition: color 0.2s;
    height: 20px;
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    vertical-align: middle;
    color: $switch-text-color;
  }
  .switch_lable_left {
    padding-right: 10px;
  }

  .switch_lable_right {
    padding-left: 10px;
  }

  .is_active {
    color: $color-blue;
  }
}

.r_swich_true {
  .switch_span {
    background-color: $color-blue;
    &::after {
      left: 100%;
      margin-left: -18px;
    }
  }
}

.r_swich_disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
