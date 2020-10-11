<script>
import calcTextareaHeight from "./calcTextareaHeight";

import {
  defineComponent,
  onMounted,
  reactive,
  watch,
  toRefs,
  computed
} from "@vue/composition-api";
export default defineComponent({
  name: "r-input",
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    suffixIcon: {
      type: String,
      default: ""
    },
    prefixIcon: {
      type: String,
      default: ""
    },
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    resize: String,
    size: String,
    showWordLimit: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    let { emit, slots, attrs, refs, root } = context;
    let state = reactive({
      hovering: false,
      canISee: false,
      textareaCalcStyle: {},
      focused: false,
      btnBox: computed(() => {
        return [
          state.inputType !== "textarea" ? "rinput" : "rtextarea",
          state.showPrepend || state.showAppend ? "inputgroup" : "",
          props.size ? `r-input-${props.size}` : ""
        ];
      }),
      inputClass: computed(() => {
        return [
          "inputinner",
          props.disabled ? `r-input-disabled` : "",
          state.haveBeforeIcon ? "haveBeforeClass" : "",
          state.haveAfterIcon ? "haveAfterClass" : "",
          state.showPrepend ? "prependinput" : "",
          state.showAppend ? "appendinput" : ""
        ];
      }),
      hasValue: computed(() => {
        return !!(props.value === null || props.value === undefined ? "" : String(props.value));
      }),
      haveAfterIcon: computed(() => {
        return !!(
          (!props.disabled && props.clearable) ||
          props.showPassword ||
          props.suffixIcon ||
          state.showSuffixBox ||
          state.canSeeLimit
        );
      }),
      showClear: computed(() => {
        return !props.disabled && props.clearable && state.hovering && state.hasValue;
      }),
      showEye: computed(() => {
        return !!(props.showPassword && state.hasValue);
      }),
      inputType: computed(() => {
        return props.showPassword ? "password" : props.type;
      }),
      afterIconClass: computed(() => {
        return ["iconfont", props.suffixIcon];
      }),
      beforeIconClass: computed(() => {
        return ["iconfont", props.prefixIcon];
      }),
      haveBeforeIcon: computed(() => {
        return props.prefixIcon || state.showPrefixBox;
      }),
      showPrepend: computed(() => {
        return slots.prepend;
      }),
      showAppend: computed(() => {
        return slots.append;
      }),
      showAfterIcon: computed(() => {
        return !!(
          state.showClear ||
          state.showEye ||
          props.suffixIcon ||
          state.showSuffixBox ||
          state.canSeeLimit
        );
      }),
      showSuffixBox: computed(() => {
        return props.type === "text" && slots.suffix;
      }),
      showPrefixBox: computed(() => {
        return props.type === "text" && slots.prefix;
      }),
      textareaStyle: computed(() => {
        return Object.assign({}, state.textareaCalcStyle, {
          resize: props.resize
        });
      }),
      canSeeLimit: computed(() => {
        return attrs.maxlength && props.showWordLimit;
      }),
      setLimit: computed(() => {
        return attrs.maxlength;
      })
    });
    const handleInput = e => {
      emit("input", e.target.value);
    };
    const handleInputChange = e => {
      emit("change", e.target.value);
    };
    const handleDelete = () => {
      emit("input", "");
      emit("change", "");
    };
    const seePassword = () => {
      const rbtndom = refs.input;
      if (!state.canISee) {
        rbtndom.type = "text";
      } else {
        rbtndom.type = "password";
      }
      state.canISee = !state.canISee;
    };
    const resizeTextarea = () => {
      const { autosize, type } = props;
      if (type !== "textarea") return;
      if (!autosize) {
        state.textareaCalcStyle = {
          minHeight: calcTextareaHeight(refs.textarea).minHeight
        };
        return;
      }
      const minRows = autosize.minRows;
      const maxRows = autosize.maxRows;
      state.textareaCalcStyle = calcTextareaHeight(refs.textarea, minRows, maxRows);
    };
    const handleBlur = event => {
      state.focused = false;
      emit("blur", event);
    };
    const handleFocus = event => {
      state.focused = true;
      emit("focus", event);
    };
    const entering = () => {
      state.hovering = true;
    };
    const leaveing = () => {
      state.hovering = false;
    };
    onMounted(() => {
      resizeTextarea();
    });
    watch(
      () => props.value,
      () => {
        root.$nextTick(() => {
          resizeTextarea();
        });
      }
    );
    return {
      ...toRefs(state),
      handleDelete,
      handleInput,
      handleInputChange,
      handleFocus,
      handleBlur,
      seePassword,
      leaveing,
      entering,
      resizeTextarea
    };
  },
  render() {
    const {
      handleDelete,
      handleInput,
      handleInputChange,
      handleFocus,
      handleBlur,
      seePassword,
      leaveing,
      entering,
      btnBox,
      inputType,
      showPrepend,
      haveBeforeIcon,
      beforeIconClass,
      inputClass,
      disabled,
      showAfterIcon,
      showClear,
      showEye,
      canSeeLimit,
      suffixIcon,
      showSuffixBox,
      setLimit,
      afterIconClass,
      prefixIcon,
      showPrefixBox,
      showAppend,
      textareaStyle,
      $slots,
      $attrs
    } = this;
    const preDom = showPrepend ? <div class="prependCont">{$slots.prepend}</div> : null;
    const preIconDom = prefixIcon ? <i class={beforeIconClass}></i> : null;
    const preSlotDom = showPrefixBox ? <span>{$slots.prefix}</span> : null;
    const bfIconBoxDom = haveBeforeIcon ? (
      <span class="iconBeforeBox">
        {preIconDom}
        {preSlotDom}
      </span>
    ) : null;
    const afterIconDom = suffixIcon ? <i class={afterIconClass}></i> : null;
    const afterSlotDom = showSuffixBox ? <span>{$slots.suffix}</span> : null;
    const afterIconBoxDom =
      !showClear && !showEye && !canSeeLimit ? (
        <span>
          {afterIconDom}
          {afterSlotDom}
        </span>
      ) : null;
    const clearDom = showClear ? (
      <i class="iconfont icon-guanbi1" onClick={handleDelete}></i>
    ) : null;
    const eyeDom = !showEye ? null : <i class="iconfont icon-eye" onClick={seePassword}></i>;
    const limitDom = canSeeLimit ? (
      <span class="countspan-inner">
        {this.value.length}/{setLimit}
      </span>
    ) : null;
    const afterBoxDom = showAfterIcon ? (
      <span class="iconAfterBox">
        {afterIconBoxDom}
        {clearDom}
        {eyeDom}
        {limitDom}
      </span>
    ) : null;
    const appendDom = showAppend ? <div class="appendCont">{$slots.append}</div> : null;
    const limitForTextareaDom = canSeeLimit ? (
      <span class="countarea-inner">
        {this.value.length}/{setLimit}
      </span>
    ) : null;
    const inputDom =
      inputType !== "textarea" ? (
        <div class={btnBox} onMouseenter={entering} onMouseleave={leaveing}>
          {preDom}
          {bfIconBoxDom}
          <input
            type={inputType}
            class={inputClass}
            disabled={disabled}
            value={this.value}
            onInput={handleInput}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            autocomplete="off"
            ref="input"
            {...{ attrs: $attrs }}
          />
          {afterBoxDom}
          {appendDom}
        </div>
      ) : (
        <div class="textareaBox">
          <textarea
            class="textareainner"
            onInput={handleInput}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={this.value}
            autocomplete="off"
            ref="textarea"
            style={textareaStyle}
            {...{ attrs: $attrs }}
          ></textarea>
          {limitForTextareaDom}
        </div>
      );
    return inputDom;
  }
});
</script>

<style lang="scss">
@import "../../scss/var";
@import "../../scss/mixin";

.rinput {
  width: 100%;
  display: inline-block;
  font-size: 14px;
  position: relative;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
}

.inputinner {
  border: 1px solid $input-border-color;
  color: $input-text-color;
  outline: none;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  padding: 0 15px;
  line-height: 40px;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  &:hover {
    border: 1px solid $input-border-color-hover;
  }
  &:focus {
    border: 1px solid $input-active-color;
  }
  &::-webkit-input-placeholder {
    color: $input-border-color;
  } //设置placeholder的字体颜色
}

//不可用
.r-input-disabled {
  background-color: $input-disable-color-bg;
  cursor: not-allowed;
  &:hover,
  &:focus {
    border: 1px solid $input-border-color;
  }
}

//icon
//后置
.iconAfterBox {
  position: absolute;
  top: 0px;
  right: 5px;
  line-height: 40px;
  color: $input-icon-color;
  text-align: center;
  .iconinner {
    &:hover {
      color: $input-icon-hover-color;
    }
  }
  .iconinner {
    transition: 0.3s;
  }
  i {
    font-size: 18px;
    display: inline-block;
    width: 28px;
  }
  .countspan-inner {
    font-size: 12px;
    display: inline-block;
    vertical-align: 2px;
  }
}

//前置
.iconBeforeBox {
  position: absolute;
  top: 0px;
  left: 5px;
  line-height: 40px;
  color: $input-icon-color;
  text-align: center;
  i {
    font-size: 18px;
    display: inline-block;
    width: 28px;
  }
}

.haveBeforeClass {
  padding-left: 30px;
}
.haveAfterClass {
  padding-right: 30px;
}

//textarea
.textareaBox {
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
  font-size: 14px;
  position: relative;
}

.textareainner {
  border: 1px solid $input-border-color;
  color: $input-text-color;
  outline: none;
  display: block;
  line-height: 1.5;
  font-size: inherit;
  padding: 5px 15px;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  resize: vertical;
  font-family: Arial;
  &:hover {
    border: 1px solid $input-border-color-hover;
  }
  &:focus {
    border: 1px solid $input-active-color;
  }
  &::-webkit-input-placeholder {
    color: $input-border-color;
  } //设置placeholder的字体颜色
}

//textarea的limitBox
.countarea-inner {
  position: absolute;
  bottom: 5px;
  right: 10px;
  color: $input-icon-color;
  font-size: 12px;
}
//复合型输入框
.inputgroup {
  display: inline-table;
  .prependCont {
    display: table-cell;
    background-color: #f5f7fa;
    color: #909399;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    padding: 0 20px;
    white-space: nowrap;
    width: 1px; //到底这个有什么用啊？
    border-right: 0;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  .prependinput {
    display: table-cell;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  .appendCont {
    display: table-cell;
    background-color: #f5f7fa;
    color: #909399;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    padding: 0 20px;
    white-space: nowrap;
    width: 1px; //到底这个有什么用啊？
    border-left: 0;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  .appendinput {
    display: table-cell;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
}

//size
.r-input-medium {
  .inputinner,
  .iconBeforeBox,
  .iconAfterBox {
    height: 36px;
    line-height: 36px;
  }
}

.r-input-small {
  .inputinner,
  .iconBeforeBox,
  .iconAfterBox {
    height: 32px;
    line-height: 32px;
  }
}

.r-input-mini {
  .inputinner,
  .iconBeforeBox,
  .iconAfterBox {
    height: 28px;
    line-height: 28px;
  }
}
</style>
