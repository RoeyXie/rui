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
  name: "r-progress",
  props: {
    percentage: {
      type: Number,
      required: true
    },
    strokeWidth: {
      type: Number,
      default: 6
    },
    showText: {
      type: Boolean,
      default: true
    },
    status: {
      type: String
    },
    format: Function,
    textInside: {
      type: Boolean,
      default: false
    },
    color: {},
    type: {
      type: String,
      default: "line"
    },
    width: {
      type: Number,
      default: 130
    }
  },
  setup(props, context) {
    const { refs } = context;
    let state = reactive({
      progressClass: computed(() => {
        return [
          "r_progress",
          props.status ? `r_progress_${props.status}` : "",
          props.type === "circle" || props.type === "dashboard" ? "box_inlineBlock" : ""
        ];
      }),
      getInnerStyle: computed(() => {
        return {
          width: `${props.percentage}%`,
          height: `${props.strokeWidth}px`,
          backgroundColor: getInnerColor(props.percentage)
        };
      }),
      getOuterStyle: computed(() => {
        return {
          height: `${props.strokeWidth}px`
        };
      }),
      getShowText: computed(() => {
        if (typeof props.format === "function") {
          return props.format(props.percentage);
        } else {
          return props.percentage + "%";
        }
      }),
      getShowIcon: computed(() => {
        return [
          "iconfont",
          "r_progress_icon",
          props.status === "success"
            ? "icon-gou1"
            : props.status === "warning"
            ? "icon-gantanhao"
            : props.status === "exception"
            ? "icon-dacha"
            : ""
        ];
      }),
      activeColor: computed(() => {
        if (Array.isArray(props.color)) {
          return getValueByRant(props.percentage, state.colorRant);
        } else {
          return "";
        }
      }),
      colorRant: computed(() => {
        let colorarr = {};
        if (Array.isArray(props.color)) {
          props.color.forEach(item => {
            // this.$set(colorarr, item.percentage, item.color);
            colorarr[item.percentage] = item.color;
          });
        }
        return colorarr;
      }),
      onhang: computed(() => {
        return props.type === "circle" ? 2 * Math.PI : (1 / 4) * Math.PI;
      }),
      xAngle: computed(() => {
        return props.type === "circle" ? Math.PI / 180 : (3 / 4) * (Math.PI / 180);
      }),
      startAngle: computed(() => {
        return props.type === "circle" ? -((1 / 2) * Math.PI) : (3 / 4) * Math.PI;
      })
    });
    const getInnerColor = percentage => {
      if (!props.color) {
        return props.status === "success"
          ? "#67c23a"
          : props.status === "warning"
          ? "#e6a23c"
          : props.status === "exception"
          ? "#f56c6c"
          : "#26a2ff";
      } else if (typeof props.color === "string") {
        return props.color;
      } else if (Array.isArray(props.color)) {
        return state.activeColor;
      } else if (typeof props.color === "function") {
        return props.color(percentage);
      }
    };
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
    const rander = () => {
      const progresscanvas = refs.myCanvas;
      const ctx = progresscanvas.getContext("2d");
      let mW = (progresscanvas.width = props.width * 2);
      let mH = (progresscanvas.height = props.width * 2);
      let lineWidth = props.strokeWidth * 2;
      let r = mW / 2; // 中间位置
      let cR = r - lineWidth; // 圆半径
      let startAngle = state.startAngle; // 开始角度
      let endAngle = state.startAngle + props.percentage * 3.6 * state.xAngle; // 结束角度
      ctx.clearRect(0, 0, mW, mH);
      // 画圈
      ctx.beginPath();
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = "#ebeef5";
      ctx.arc(r, r, cR, startAngle, state.onhang);
      ctx.stroke();
      ctx.closePath();
      // 画百分比圈
      ctx.beginPath();
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = getInnerColor(props.percentage);
      ctx.arc(r, r, cR, startAngle, endAngle);
      ctx.stroke();
      ctx.closePath();
    };
    const setCanvasStyle = () => {
      let boxDom = refs.myCanvasBox;
      let canvasDom = refs.myCanvas;
      boxDom.style.cssText = `height:${props.width}px;width:${props.width}px`;
      canvasDom.style.cssText = `left:-${props.width / 2}px;top:-${props.width /
        2}px;transform: scale(0.5, 0.5);`;
    };
    onMounted(() => {
      if (props.type === "circle" || props.type === "dashboard") {
        rander();
        setCanvasStyle();
      }
    });
    watch(
      () => props.percentage,
      () => {
        if (props.type === "circle" || props.type === "dashboard") {
          rander();
        }
      }
    );
    return {
      ...toRefs(state),
      getInnerColor,
      getValueByRant,
      rander,
      setCanvasStyle
    };
  },
  render() {
    const {
      progressClass,
      type,
      getOuterStyle,
      getInnerStyle,
      getShowText,
      showText,
      textInside,
      status,
      getShowIcon
    } = this;
    const textDom =
      showText && textInside ? <div class="r_progress_var_innerText">{getShowText}</div> : null;
    const inside = !status ? <span>{getShowText}</span> : <i class={getShowIcon}></i>;
    const textInsideDom =
      showText && !textInside ? <div class="r_progress_text">{inside}</div> : null;
    const textDomForCircl =
      showText && !textInside ? <div class="r_progress_canvas_text">{getShowText}</div> : null;
    const lineDom =
      type === "line" ? (
        <div>
          <div class="r_progress_bar">
            <div class="r_progress_bar_outer" style={getOuterStyle}>
              <div class="r_progress_bar_inner" style={getInnerStyle}>
                {textDom}
              </div>
            </div>
          </div>
          {textInsideDom}
        </div>
      ) : type === "circle" || type === "dashboard" ? (
        <div class="canvas_box" ref="myCanvasBox">
          <canvas class="myCanvas" ref="myCanvas">
            您的浏览器不支持 HTML5 canvas 标签。
          </canvas>
          {textDomForCircl}
        </div>
      ) : (
        <div v-else class="canvas_box" ref="myDashboardBox">
          <canvas class="myCanvas" ref="myDashboard">
            您的浏览器不支持 HTML5 canvas 标签。
          </canvas>
          {textDomForCircl}
        </div>
      );
    return <div class={progressClass}>{lineDom}</div>;
  }
});
</script>

<style lang="scss">
@import "../../scss/var";
@import "../../scss/mixin";
.r_progress {
  .r_progress_bar {
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    margin-right: -55px;
    box-sizing: border-box;
    padding-right: 50px;
    .r_progress_bar_outer {
      display: inline-block;
      vertical-align: middle;
      width: 100%;
      background-color: $progress-outer-bg-color;
      height: 6px;
      border-radius: 100px;
      position: relative;
      .r_progress_bar_inner {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 6px;
        border-radius: 100px;
        position: absolute;
        top: 0;
        left: 0;
        transition: all 0.3s;
        .r_progress_var_innerText {
          font-size: 12px;
          color: #fff;
          margin: 0 5px;
        }
      }
    }
  }
  .r_progress_text {
    display: inline-block;
    vertical-align: -2px;
    font-size: 14px;
    padding-left: 10px;
    color: $progress-text-color;
    .r_progress_icon {
      font-size: 13px;
    }
  }
}

.canvas_box {
  position: relative;
  display: inline-block;
  .myCanvas {
    position: absolute;
  }
  .r_progress_canvas_text {
    z-index: 1000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    color: $progress-text-color;
    position: absolute;
  }
}

.box_inlineBlock {
  display: inline-block;
}

.r_progress_exception {
  .r_progress_text,
  .r_progress_canvas_text {
    .r_progress_icon {
      color: $progress-error-color;
    }
  }
}

.r_progress_success {
  .r_progress_text,
  .r_progress_canvas_text {
    .r_progress_icon {
      color: $progress-success-color;
    }
  }
}
.r_progress_warning {
  .r_progress_text,
  .r_progress_canvas_text {
    .r_progress_icon {
      color: $progress-warning-color;
    }
  }
}
</style>
