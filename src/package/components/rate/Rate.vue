<script>
import { defineComponent, reactive, watch, toRefs, computed } from "@vue/composition-api";
export default defineComponent({
  name: "r-rate",
  props: {
    max: {
      type: Number,
      default: 5
    },
    iconClasses: {
      type: [Array, Object],
      default() {
        return ["icon-tubiao_wuxing-", "icon-tubiao_wuxing-", "icon-tubiao_wuxing-"];
      }
    },
    value: {
      type: Number
    },
    lowThreshold: {
      type: Number,
      default: 2
    },
    highThreshold: {
      type: Number,
      default: 3
    },
    voidColor: {
      type: String,
      default: "#c0c4cc"
    },
    colors: {
      type: [Array, Object],
      default() {
        return ["#F7BA2A", "#F7BA2A", "#F7BA2A"];
      }
    },
    voidIconClass: {
      type: String,
      default: "icon-tubiao_wuxing-1"
    },
    showText: {
      type: Boolean,
      default: false
    },
    texts: {
      type: Array,
      default: () => ["极差", "失望", "一般", "满意", "惊喜"]
    },
    showScore: {
      type: Boolean,
      default: false
    },
    scoreTemplate: {
      type: String
    },
    textColor: {
      type: String,
      default: "#1F2D3D"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    let state = reactive({
      currentValue: props.value,
      rateBoxClass: computed(() => {
        return ["r_rate", props.disabled ? "r_rate_disabled" : ""];
      }),
      iconClass: computed(() => {
        return ["r_rate_icon", "iconfont"];
      }),
      getTextColor: computed(() => {
        return { color: [props.textColor] };
      }),
      classRant: computed(() => {
        return Array.isArray(props.iconClasses)
          ? {
              [props.lowThreshold]: props.iconClasses[0],
              [props.highThreshold]: props.iconClasses[1],
              [props.max]: props.iconClasses[2]
            }
          : props.iconClasses;
      }),
      colorRant: computed(() => {
        return Array.isArray(props.colors)
          ? {
              [props.lowThreshold]: props.colors[0],
              [props.highThreshold]: props.colors[1],
              [props.max]: props.colors[2]
            }
          : props.colors;
      }),
      activeClass: computed(() => {
        return getValueByRant(state.currentValue, state.classRant);
      }),
      activeColor: computed(() => {
        return getValueByRant(state.currentValue, state.colorRant);
      }),
      classes: computed(() => {
        let result = [];
        for (let i = 0; i < state.currentValue; i++) {
          result.push(state.activeClass);
        }
        for (let i = state.currentValue; i < props.max; i++) {
          result.push(props.voidIconClass);
        }
        return result;
      }),
      getText: computed(() => {
        return props.showText && !props.showScore
          ? props.texts[state.currentValue - 1]
          : props.showScore && !props.showText && props.scoreTemplate
          ? props.scoreTemplate.replace("{value}", props.value)
          : props.value;
      })
    });
    const getValueByRant = (val, rant) => {
      let keys = Object.keys(rant);
      let resultkey;
      let resultvalue;
      let matchkeys = keys.filter(key => {
        return val <= key;
      });
      if (matchkeys.length > 0) {
        resultkey = matchkeys.sort((a, b) => a - b)[0];
        resultvalue = rant[resultkey];
      } else {
        resultkey = keys.sort((a, b) => b - a)[0];
        resultvalue = rant[resultkey];
      }
      return resultvalue;
    };
    const getColor = item => {
      return {
        color: item <= state.currentValue ? state.activeColor : props.voidColor
      };
    };
    const setCurrentValue = value => {
      if (props.disabled) return;
      state.currentValue = value;
    };
    const resetCurrentValue = () => {
      if (props.disabled) return;
      state.currentValue = props.value;
    };
    const clickicon = item => {
      if (props.disabled) return;
      state.currentValue = item;
      emit("input", item);
    };
    watch(
      () => props.value,
      value => {
        state.currentValue = value;
      }
    );
    return {
      ...toRefs(state),
      getColor,
      setCurrentValue,
      resetCurrentValue,
      clickicon
    };
  },
  render() {
    const {
      rateBoxClass,
      getText,
      getTextColor,
      classes,
      iconClass,
      getColor,
      clickicon,
      max,
      setCurrentValue,
      resetCurrentValue,
      showText,
      showScore
    } = this;
    let stars = [];
    for (let item = 0; item <= max; item++) {
      stars.push(
        <span>
          <i
            class={[iconClass, classes[item - 1]]}
            style={getColor(item)}
            onMousemove={e => setCurrentValue(item, e)}
            onMouseleave={resetCurrentValue}
            onClick={e => clickicon(item, e)}
          ></i>
        </span>
      );
    }
    const spans =
      (showText && !showScore) || (!showText && showScore) ? (
        <span class="r_rate_text" style={getTextColor}>
          {getText}
        </span>
      ) : null;
    return (
      <div class={rateBoxClass}>
        {stars}
        {spans}
      </div>
    );
  }
});
</script>

<style lang="scss">
@import "../../scss/var";
@import "../../scss/mixin";

.r_rate_icon {
  font-size: 16px;
  padding: 0 8px 0 0;
  color: #c0c4cc;
  font-weight: 500;
  transition: all 0.3s;
  cursor: pointer;
}

.r_rate_text {
  font-size: 13px;
}

.r_rate_disabled {
  .r_rate_icon {
    cursor: default;
  }
}
</style>
