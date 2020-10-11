<script>
import { defineComponent, reactive, toRefs, computed } from "@vue/composition-api";
export default defineComponent({
  name: "r-tag",
  props: {
    type: {
      type: String,
      default: "default"
    },
    closable: {
      type: Boolean,
      default: false
    },
    disableTransitions: {
      // 驼峰，外面传过来是disable-transitions
      type: Boolean,
      default: false
    },
    effect: {
      type: String,
      default: "light"
    },
    size: {
      type: String
    }
  },
  setup(props, { emit }) {
    let state = reactive({
      tagSeenFlag: true,
      tagClass: computed(() => {
        return [
          "r-tag",
          props.type ? `r-tag-${props.type}` : "",
          props.effect ? `r-tag-${props.effect}` : "",
          props.size ? `r-tag-${props.size}` : ""
        ];
      }),
      iconClass: computed(() => {
        return [
          "iconfont",
          "icon-guanbi",
          "closeicon",
          props.type ? `icon-${props.type}` : "",
          props.effect ? `icon-${props.effect}` : ""
        ];
      }),
      slideFade: computed(() => {
        return props.disableTransitions ? "" : "slide-fade";
      })
    });
    const closeTag = e => {
      state.tagSeenFlag = false;
      emit("close", e.target.parentNode.firstElementChild.innerText);
    };
    return {
      ...toRefs(state),
      closeTag
    };
  },
  render() {
    const { slideFade, tagClass, tagSeenFlag, iconClass, closeTag, closable, $slots } = this;
    const closeDom = closable ? <i class={iconClass} onClick={closeTag}></i> : null;
    const tagDom = tagSeenFlag ? (
      <span class={tagClass}>
        <span class="r-tag-text">{$slots.default}</span>
        {closeDom}
      </span>
    ) : null;
    return <transition name={slideFade}>{tagDom}</transition>;
  }
});
</script>

<style lang="scss">
@import "../../scss/var";
@import "../../scss/mixin";
.r-tag {
  display: inline-block;
  padding: 0 10px;
  height: 32px;
  line-height: 30px;
  font-size: 12px;
  border-radius: 4px;
  box-sizing: border-box;
  white-space: nowrap;
}

//type:default/success/info/warning/danger

.r-tag-default {
  background: $tag-default-color-bg;
  color: $tag-default-color;
  border: 1px solid $tag-default-color-bd;
}

.r-tag-success {
  background: $tag-success-color-bg;
  color: $tag-success-color;
  border: 1px solid $tag-success-color-bd;
}

.r-tag-info {
  background: $tag-info-color-bg;
  color: $tag-info-color;
  border: 1px solid $tag-info-color-bd;
}

.r-tag-warning {
  background: $tag-warning-color-bg;
  color: $tag-warning-color;
  border: 1px solid $tag-warning-color-bd;
}
.r-tag-danger {
  background: $tag-danger-color-bg;
  color: $tag-danger-color;
  border: 1px solid $tag-danger-color-bd;
}

//close
.closeicon {
  border-radius: 50%;
  font-size: 12px;
  cursor: pointer;
}

.icon-default {
  &:hover {
    color: #fff;
    background-color: $tag-default-color;
  }
}

.icon-success {
  &:hover {
    color: #fff;
    background-color: $tag-success-color;
  }
}

.icon-info {
  &:hover {
    color: #fff;
    background-color: $tag-info-color;
  }
}

.icon-warning {
  &:hover {
    color: #fff;
    background-color: $tag-warning-color;
  }
}

.icon-danger {
  &:hover {
    color: #fff;
    background-color: $tag-danger-color;
  }
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

//不同主题
.r-tag-dark {
  color: #fff;
}

.r-tag-default.r-tag-dark {
  background: $tag-default-color;
  border: 1px solid $tag-default-color;
}

.r-tag-success.r-tag-dark {
  background: $tag-success-color;
  border: 1px solid $tag-success-color;
}

.r-tag-info.r-tag-dark {
  background: $tag-info-color;
  border: 1px solid $tag-info-color;
}

.r-tag-warning.r-tag-dark {
  background: $tag-warning-color;
  border: 1px solid $tag-warning-color;
}
.r-tag-danger.r-tag-dark {
  background: $tag-danger-color;
  border: 1px solid $tag-danger-color;
}

//plain
.r-tag-default.r-tag-plain {
  background: #fff;
  color: $tag-default-color;
  border: 1px solid $tag-default-color-bd;
}

.r-tag-success.r-tag-plain {
  background: #fff;
  color: $tag-success-color;
  border: 1px solid $tag-success-color-bd;
}

.r-tag-info.r-tag-plain {
  background: #fff;
  color: $tag-info-color;
  border: 1px solid $tag-info-color-bd;
}

.r-tag-warning.r-tag-plain {
  background: #fff;
  color: $tag-warning-color;
  border: 1px solid $tag-warning-color-bd;
}
.r-tag-danger.r-tag-plain {
  background: #fff;
  color: $tag-danger-color;
  border: 1px solid $tag-danger-color-bd;
}

//关闭标签 hover样式 只有dark不一致
.icon-default.icon-dark {
  &:hover {
    background-color: $tag-default-color-hover;
  }
}

.icon-success.icon-dark {
  &:hover {
    background-color: $tag-success-color-hover;
  }
}

.icon-info.icon-dark {
  &:hover {
    background-color: $tag-info-color-hover;
  }
}

.icon-warning.icon-dark {
  &:hover {
    background-color: $tag-warning-color-hover;
  }
}

.icon-danger.icon-dark {
  &:hover {
    background-color: $tag-danger-color-hover;
  }
}

//size medium、small、mini
.r-tag-medium {
  height: 28px;
  line-height: 26px;
}
.r-tag-small {
  height: 24px;
  padding: 0 8px;
  line-height: 22px;
}
.r-tag-mini {
  height: 20px;
  padding: 0 5px;
  line-height: 19px;
}
</style>
