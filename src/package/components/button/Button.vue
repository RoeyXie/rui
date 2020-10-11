<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-08-31 16:30:19
 * @LastEditTime: 2020-09-07 11:44:16
 * @FilePath: /Hui/rui/src/package/components/button/Button.vue
-->
<script>
import { defineComponent, reactive, toRefs, computed } from "@vue/composition-api";
export default defineComponent({
  name: "r-btn",
  props: {
    type: {
      type: String,
      default: "default"
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    },
    disable: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    }
  },
  setup(props, { emit }) {
    const state = reactive({
      btnClass: computed(() => {
        return [
          "r-btn",
          props.type ? `r-btn-${props.type}` : "",
          props.plain ? `r-btn-plain` : "",
          props.round ? `r-btn-round` : "",
          props.circle ? `r-btn-circle` : "",
          props.disable || props.loading ? `r-btn-disable` : "",
          props.icon ? `r-btn-icon` : "",
          props.loading ? `r-btn-loading` : "",
          props.size ? `r-btn-${props.size}` : ""
        ];
      }),
      iconClass: computed(() => {
        return [props.icon ? "iconfont " + props.icon : ""];
      })
    });
    const handleClick = e => {
      emit("click", e);
    };
    return {
      ...toRefs(state),
      handleClick
    };
  },
  render() {
    const { iconClass, btnClass, $slots, disable, loading, handleClick, icon } = this;
    const iconDom = icon && !loading ? <i class={iconClass}></i> : null;
    const loadingDom = loading ? <i class="iconfont icon-loading_icon iconLoading"></i> : null;
    return (
      <button class={btnClass} disabled={disable || loading} onClick={handleClick}>
        {iconDom}
        {loadingDom}
        <span class="r-btn-innertext">{$slots.default}</span>
      </button>
    );
  }
});
</script>

<style lang="scss">
@import "../../scss/var";
@import "../../scss/mixin";

.r-btn {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    background: $tag-default-color-bg;
    color: $tag-default-color;
    border: 1px solid $tag-default-color-bd;
  }
}

//type
.r-btn-primary {
  background-color: $btn-primary-color;
  border: 1px solid $btn-primary-color;
  color: #fff;
  &:hover,
  &:focus {
    color: #fff;
    background: $btn-primary-color-hover;
    border: 1px solid $btn-primary-color-hover;
  }
}

.r-btn-success {
  background-color: $btn-success-color;
  border: 1px solid $btn-success-color;
  color: #fff;
  &:hover,
  &:focus {
    color: #fff;
    background: $btn-success-color-hover;
    border: 1px solid $btn-success-color-hover;
  }
}

.r-btn-info {
  background-color: $btn-info-color;
  border: 1px solid $btn-info-color;
  color: #fff;
  &:hover,
  &:focus {
    color: #fff;
    background: $btn-info-color-hover;
    border: 1px solid $btn-info-color-hover;
  }
}

.r-btn-warning {
  background-color: $btn-warning-color;
  border: 1px solid $btn-warning-color;
  color: #fff;
  &:hover,
  &:focus {
    color: #fff;
    background: $btn-warning-color-hover;
    border: 1px solid $btn-warning-color-hover;
  }
}

.r-btn-danger {
  background-color: $btn-danger-color;
  border: 1px solid $btn-danger-color;
  color: #fff;
  &:hover,
  &:focus {
    color: #fff;
    background: $btn-danger-color-hover;
    border: 1px solid $btn-danger-color-hover;
  }
}

//plain
.r-btn-default.r-btn-plain {
  &:hover,
  &:focus {
    color: $btn-primary-color;
    background: #fff;
    border: 1px solid $btn-primary-color;
  }
}
.r-btn-primary.r-btn-plain {
  background: $tag-default-color-bg;
  color: $tag-default-color;
  border: 1px solid $tag-default-color-bd;
  &:hover,
  &:focus {
    color: #fff;
    background: $btn-primary-color;
    border: 1px solid $btn-primary-color;
  }
}

.r-btn-success.r-btn-plain {
  background: $tag-success-color-bg;
  color: $tag-success-color;
  border: 1px solid $tag-success-color-bd;
  &:hover,
  &:focus {
    color: #fff;
    background: $btn-success-color;
    border: 1px solid $btn-success-color;
  }
}

.r-btn-info.r-btn-plain {
  background: $tag-info-color-bg;
  color: $tag-info-color;
  border: 1px solid $tag-info-color-bd;
  &:hover,
  &:focus {
    color: #fff;
    background: $btn-info-color;
    border: 1px solid $btn-info-color;
  }
}

.r-btn-warning.r-btn-plain {
  background: $tag-warning-color-bg;
  color: $tag-warning-color;
  border: 1px solid $tag-warning-color-bd;
  &:hover,
  &:focus {
    color: #fff;
    background: $btn-warning-color;
    border: 1px solid $btn-warning-color;
  }
}

.r-btn-danger.r-btn-plain {
  background: $tag-danger-color-bg;
  color: $tag-danger-color;
  border: 1px solid $tag-danger-color-bd;
  &:hover,
  &:focus {
    color: #fff;
    background: $btn-danger-color;
    border: 1px solid $btn-danger-color;
  }
}

//round
.r-btn-round {
  border-radius: 20px;
  padding: 12px 20px;
}

//circle
.r-btn-circle {
  border-radius: 50%;
  padding: 12px;
}

//disable
.r-btn-disable {
  cursor: not-allowed;
}
.r-btn-disable.r-btn-loading {
  cursor: wait;
}
.r-btn-default.r-btn-disable {
  color: #c0c4cc;
  background-color: #fff;
  border-color: #ebeef5;
}

.r-btn-primary.r-btn-disable {
  background-color: $btn-primary-disable;
  border: 1px solid $btn-primary-disable;
  color: #ffffff;
}

.r-btn-success.r-btn-disable {
  background-color: $btn-success-disable;
  border: 1px solid $btn-success-disable;
  color: #ffffff;
}

.r-btn-info.r-btn-disable {
  background-color: $btn-info-disable;
  border: 1px solid $btn-info-disable;
  color: #ffffff;
}

.r-btn-warning.r-btn-disable {
  background-color: $btn-warning-disable;
  border: 1px solid $btn-warning-disable;
  color: #ffffff;
}

.r-btn-danger.r-btn-disable {
  background-color: $btn-danger-disable;
  border: 1px solid $btn-danger-disable;
  color: #ffffff;
}

//palin
.r-btn-disable.r-btn-default.r-btn-plain {
  color: #c0c4cc;
  background-color: #fff;
  border-color: #ebeef5;
}

.r-btn-primary.r-btn-disable.r-btn-plain {
  background-color: $btn-primary-disable-bg;
  border: 1px solid $btn-primary-disable-bd;
  color: $btn-primary-disable;
}

.r-btn-success.r-btn-disable.r-btn-plain {
  background-color: $btn-success-disable-bg;
  border: 1px solid $btn-success-disable-bd;
  color: $btn-success-disable;
}

.r-btn-info.r-btn-disable.r-btn-plain {
  background-color: $btn-info-disable-bg;
  border: 1px solid $btn-info-disable-bd;
  color: $btn-info-disable;
}

.r-btn-warning.r-btn-disable.r-btn-plain {
  background-color: $btn-warning-disable-bg;
  border: 1px solid $btn-warning-disable-bd;
  color: $btn-warning-disable;
}

.r-btn-danger.r-btn-disable.r-btn-plain {
  background-color: $btn-danger-disable-bg;
  border: 1px solid $btn-danger-disable-bd;
  color: $btn-danger-disable;
}
//icon
.r-btn-icon {
  span {
    vertical-align: 1.5px;
  }
}

.r-btn-text {
  background-color: #ffffff;
  border: 1px solid #ffffff;
  color: $btn-primary-color;
  &:hover,
  &:focus {
    color: $btn-primary-color-hover;
    background: #ffffff;
    border: 1px solid #ffffff;
    // box-shadow: -1px 0 0 0$btn-primary-color-hover;
  }
}

.r-btn-text.r-btn-disable {
  background-color: #ffffff;
  border: 1px solid #ffffff;
  color: $btn-info-disable;
  cursor: not-allowed;
}

.r-buttonGroup {
  .r-btn {
    float: left;
    position: relative;
    &:not(:first-child):not(:last-child) {
      border-radius: 0;
    }
    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
}

.r-buttonGroup .r-btn + .r-btn {
  margin-left: 0px;
  border-left: 0.5px solid hsla(0, 0%, 100%, 0.6);
}

.r-buttonGroup .r-btn-plain + .r-btn-plain {
  border-left: none;
}

.r-buttonGroup .r-btn-default + .r-btn-default {
    border-left: none;
}

.r-btn-loading {
  cursor: default;
}

.iconLoading {
  animation: rotating 2s linear infinite;
  display: inline-block;
  font-size: 12px;
}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(1turn);
  }
}
//size
.r-btn-medium {
  padding: 10px 20px;
}

.r-btn-small {
  padding: 9px 15px;
  font-size: 12px;
}

.r-btn-mini {
  padding: 7px 15px;
  font-size: 12px;
}
</style>
