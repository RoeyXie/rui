<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-09-04 17:50:37
 * @LastEditTime: 2020-09-04 18:45:07
 * @FilePath: /Hui/rui/src/package/components/step/Step.vue
-->
<script>
import {
  defineComponent,
  onMounted,
  reactive,
  getCurrentInstance,
  toRefs,
  computed
} from "@vue/composition-api";
export default defineComponent({
  name: "r-step",
  customOption: "RStep",
  props: {
    title: String,
    icon: String,
    description: String,
    status: String
  },
  setup(props, { parent }) {
    const instance = getCurrentInstance();
    parent.stepList.push(instance);
    let state = reactive({
      index: -1,
      maxIndex: -1,
      stepClass: computed(() => {
        return [
          "r_step",
          state.isLast ? "r_step_last" : "",
          state.isWait ? "r_step_wait" : "",
          state.isActive ? "r_step_active" : "",
          state.isAlready ? "r_step_already" : "",
          state.isFinish ? "r_step_finish" : "",
          `t_step_finish_${parent.finishStatus}`,
          state.isCenter ? "r_step_center" : "",
          props.icon ? "is_icon" : "",
          state.isSimple ? "r_step_simple" : "",
          state.isLast && !state.space && !state.isCenter ? "is-flex" : ""
        ];
      }),
      activeIndex: computed(() => {
        return parent.active;
      }),
      isLast: computed(() => {
        return state.index === state.maxIndex;
      }),
      isWait: computed(() => {
        return (
          state.index > state.activeIndex ||
          (state.finishStatus === "wait" && state.index !== state.activeIndex)
        );
      }),
      isActive: computed(() => {
        return state.index === state.activeIndex;
      }),
      isAlready: computed(() => {
        return state.index < state.activeIndex;
      }),
      isFinish: computed(() => {
        return state.index < state.activeIndex - 1;
      }),
      isSimple: computed(() => {
        return parent.simple;
      }),
      isVertical: computed(() => {
        return parent.direction === "vertical" && !state.isSimple;
      }),
      isCenter: computed(() => {
        return !state.isVertical ? parent.alignCenter : false;
      }),
      space: computed(() => {
        return state.isSimple ? "" : parent.space;
      }),
      stepsCount: computed(() => {
        return parent.stepList.length;
      }),
      finishStatus: computed(() => {
        return parent.finishStatus;
      }),
      stepStyle: computed(() => {
        const style = {};
        // const parent =  parent
        let space =
          typeof state.space === "number"
            ? state.space + "px"
            : state.space
            ? state.space
            : 100 / (state.stepsCount - (state.isCenter ? 0 : 1)) + "%";
        style.flexBasis = space;
        if (state.isVertical) return style;
        if (state.isLast) {
          style.maxWidth = 100 / state.stepsCount + "%";
          // style.flexBasis = "auto";
          style.flexBasis = space;
          // style.flexShrink = 0;
        } else {
          style.marginRight = -parent.stepOffset + "px";
        }
        return style;
      }),
      iconFont: computed(() => {
        return [
          "iconfont",
          props.icon ? props.icon : state.finishStatus === "success" ? "icon-gou" : "icon-guanbi"
        ];
      }),
      showText: computed(() => {
        return (
          !props.icon &&
          (state.isWait ||
            state.isActive ||
            (state.isAlready &&
              (state.finishStatus === "wait" ||
                state.finishStatus === "process" ||
                state.finishStatus === "finish")))
        );
      }),
      showIcon: computed(() => {
        return (
          props.icon ||
          (state.isAlready && (state.finishStatus === "error" || state.finishStatus === "success"))
        );
      })
    });
    onMounted(() => {
      state.maxIndex = parent.stepList.length - 1;
      parent.stepList.forEach((item, index) => {
        if (item === instance) {
          state.index = index;
        }
      });
    });
    return {
      ...toRefs(state)
    };
  },
  render() {
    const {
      stepClass,
      stepStyle,
      index,
      icon,
      iconFont,
      title,
      description,
      isSimple,
      showText,
      showIcon
    } = this;
    const textDom = showText ? <div class="r_step_icon">{index + 1}</div> : null;
    const iconDom = showIcon ? (
      <div class={{ r_step_icon: true, r_step_showicon: icon }}>
        <i class={iconFont}></i>
      </div>
    ) : null;
    const descriptionDom =
      description && !isSimple ? <div class="r_step_description">{description}</div> : null;
    return (
      <div class={stepClass} style={stepStyle}>
        <div class="r_step_header">
          <div class="r_step_line">
            <i class="r_step_line_inner"></i>
          </div>
          {textDom}
          {iconDom}
        </div>
        <div class="r_step_main">
          <div class="r_step_title">{title}</div>
          {descriptionDom}
          <div class="r_step_arrow">
            <i class="iconfont icon-tubiaozhizuo-1"></i>
          </div>
        </div>
      </div>
    );
  }
});
</script>

<style lang="scss">
@import "../../scss/var";
@import "../../scss/mixin";
.r_step {
  //   width: 100%;
  //   flex-basis: 50%;
  .r_step_header {
    position: relative;
    .r_step_line {
      position: absolute;
      border-color: inherit;
      background-color: $hover-color;
      height: 2px;
      top: 11px;
      left: 0;
      right: 0;
      z-index: 0;
      .r_step_line_inner {
        display: block;
        width: 0;
        height: 2px;
        background-color: inherit;
        z-index: 1;
        transition: all 0.8s;
      }
    }
    .r_step_icon {
      border-radius: 50%;
      border: 2px solid;
      border-color: inherit;
      position: relative;
      z-index: 2;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
      font-size: 14px;
      box-sizing: border-box;
      background: $color-white;
      transition: all 0.8s;
    }
  }
  .r_step_main {
    .r_step_title {
      font-size: 16px;
      line-height: 38px;
    }
    .r_step_description {
      padding-right: 10%;
      margin-top: -5px;
      font-size: 12px;
      line-height: 20px;
      font-weight: 400;
    }
    .r_step_arrow {
      display: none;
    }
  }
}

.r_step_wait {
  .r_step_header {
    .r_step_icon {
      color: $hover-color;
    }
  }
  .r_step_main {
    color: $hover-color;
  }
}

.r_step_already.t_step_finish_success {
  .r_step_header {
    .r_step_icon {
      color: $success-color;
    }
  }
  .r_step_main {
    color: $success-color;
  }
}

.r_step_finish.t_step_finish_success {
  .r_step_header {
    .r_step_line {
      background-color: $success-color;
      .r_step_line_inner {
        width: 100%;
      }
    }
  }
}

.r_step_already.t_step_finish_finish {
  .r_step_header {
    .r_step_icon {
      color: $color-blue;
    }
  }
  .r_step_main {
    color: $color-blue;
  }
}

.r_step_finish.t_step_finish_finish {
  .r_step_header {
    .r_step_line {
      background-color: $color-blue;
      .r_step_line_inner {
        width: 100%;
      }
    }
  }
}

.r_step_already.t_step_finish_error {
  .r_step_header {
    .r_step_icon {
      color: $danger-color;
    }
  }
  .r_step_main {
    color: $danger-color;
  }
}

.r_step_finish.t_step_finish_error {
  .r_step_header {
    .r_step_line {
      background-color: $danger-color;
      .r_step_line_inner {
        width: 100%;
      }
    }
  }
}

.r_step_center {
  text-align: center;
  .r_step_header {
    .r_step_line {
      left: 50%;
      right: -50%;
    }
  }
  .r_step_main {
    .r_step_description {
      padding-left: 20%;
      padding-right: 20%;
    }
  }
}

.is_icon {
  .r_step_header {
    .r_step_icon {
      border: none;
      font-size: 25px;
      padding: 0 20px;
    }
  }
}

.r_steps_vertical {
  flex-flow: column;
  height: 100%;
  .r_step {
    display: flex;
    .r_step_header {
      .r_step_line {
        width: 2px;
        top: 0;
        bottom: 0;
        left: 11px;
        height: auto;
      }
    }
    .r_step_main {
      padding-left: 10px;
      .r_step_title {
        line-height: 24px;
        padding-bottom: 8px;
      }
    }
  }
}

.r_step_simple {
  display: flex;
  align-items: center;
  .r_step_header {
    .r_step_line {
      display: none;
    }
    .r_step_icon {
      padding: 0;
    }
    .r_step_showicon {
      background-color: transparent;
    }
  }
  .r_step_main {
    display: flex;
    align-items: center;
    width: 100%;
    .r_step_title {
      white-space: nowrap;
      padding: 0 5px;
    }
    .r_step_description {
      display: none;
    }
    .r_step_arrow {
      text-align: center;
      width: 100%;
      display: block;
      color: $hover-color;
    }
  }
}

.r_step_last {
  .r_step_header {
    .r_step_line {
      display: none;
    }
  }
  .r_step_main {
    .r_step_arrow {
      display: none;
    }
  }
}

.is-flex {
  flex-basis: auto !important;
  flex-shrink: 0;
  flex-grow: 0;
}
</style>
