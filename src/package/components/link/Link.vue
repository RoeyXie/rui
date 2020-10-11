<script>
import { defineComponent, reactive, toRefs, computed } from "@vue/composition-api";
export default defineComponent({
  name: "r-link",
  props: {
    href: {},
    target: {
      type: String,
      default: "_blank"
    },
    type: {
      type: String,
      default: "default"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    underline: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String
    }
  },
  setup(props) {
    const state = reactive({
      linkClass: computed(() => {
        return [
          "r_link",
          `r_link_${props.type}`,
          props.disabled ? "is-disabled" : "",
          props.underline && !props.disabled ? "is-underline" : ""
        ];
      }),
      hrefLink: computed(() => {
        return props.disabled ? "javascript:volid(0);" : props.href;
      }),
      targetLink: computed(() => {
        return props.disabled ? "" : props.target;
      })
    });
    return {
      ...toRefs(state)
    };
  },
  render() {
    const { linkClass, hrefLink, targetLink, disabled, icon, $slots } = this;
    const iconDom = icon ? <i class={icon}></i> : null;
    return (
      <a class={linkClass} href={hrefLink} target={targetLink} disabled={disabled}>
        {iconDom}
        <span>{$slots.default} </span>
      </a>
    );
  }
});
</script>

<style lang="scss">
@import "../../scss/var";
@import "../../scss/mixin";
// a:link是超级链接的初始状态
// a:hover是把鼠标放上去时悬停的状况
// a:active 是鼠标点击时
// a:visited是访问过后的情况
//default/ primary / success / warning / danger / info

.r_link {
  font-size: 14px;
  cursor: pointer;
}
.r_link.is-underline {
  &:hover {
    border-bottom: 1px solid;
  }
}
.r_link.is-disabled {
  cursor: not-allowed;
}
.r_link_default {
  color: $link-default-color;
  &:hover {
    color: $color-blue;
  }
}
.r_link_primary {
  color: $link-primary-color;
  &:hover {
    color: $color-blue-hover;
  }
}
.r_link_success {
  color: $link-success-color;
  &:hover {
    color: $success-color-hover;
  }
}
.r_link_warning {
  color: $link-warning-color;
  &:hover {
    color: $warning-color-hover;
  }
}
.r_link_danger {
  color: $link-danger-color;
  &:hover {
    color: $danger-color-hover;
  }
}
.r_link_info {
  color: $link-info-color;
  &:hover {
    color: $info-color-hover;
  }
}
.r_link_default.is-disabled {
  color: $link-default-disable-color;
  &:hover {
    color: $link-default-disable-color;
  }
}
.r_link_primary.is-disabled {
  color: $link-primary-disable-color;
  &:hover {
    color: $link-primary-disable-color;
  }
}
.r_link_success.is-disabled {
  color: $link-success-disable-color;
  &:hover {
    color: $link-success-disable-color;
  }
}
.r_link_warning.is-disabled {
  color: $link-warning-disable-color;
  &:hover {
    color: $link-warning-disable-color;
  }
}
.r_link_danger.is-disabled {
  color: $link-danger-disable-color;
  &:hover {
    color: $link-danger-disable-color;
  }
}
.r_link_info.is-disabled {
  color: $link-info-disable-color;
  &:hover {
    color: $link-info-disable-color;
  }
}
</style>
