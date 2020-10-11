<script>
import {
  defineComponent,
  reactive,
  toRefs,
  computed
} from "@vue/composition-api";
export default defineComponent({
  name: "r-alert",
  props: {
    title: {
      type: String
    },
    type: {
      type: String,
      default: "info"
    },
    effect: {
      type: String,
      default: "light"
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    description: {
      type: String
    },
    center: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    let state = reactive({
      showAlert: true,
      alertappClass: computed(() => {
        return [
          "alertapp",
          `r_alert_${props.type}`,
          `r_alter_${props.effect}`,
          props.center ? "r_alert_center" : ""
        ];
      }),
      showCloseIcon: computed(() => {
        return props.closable && !props.closeText;
      }),
      showIconClass: computed(() => {
        return [
          "iconfont",
          "tipsicon",
          props.type === "success"
            ? "icon-gou1"
            : props.type === "warning"
            ? "icon-gantanhao"
            : props.type === "error"
            ? "icon-dacha"
            : "icon-i",
          props.description ? "bigtipsicon" : ""
        ];
      }),
      titleClass: computed(() => {
        return ["alert_title", props.description ? "alert_title_bold" : ""];
      })
    });
    const handleClose = () => {
      state.showAlert = false;
      emit("close");
    };
    return {
      ...toRefs(state),
      handleClose
    };
  },
  render() {
    const {
      alertappClass,
      showAlert,
      showIconClass,
      titleClass,
      title,
      description,
      showCloseIcon,
      handleClose,
      closeText,
      showIcon
    } = this;
    const iconDom = showIcon ? <i class={showIconClass}></i> : null;
    const descriptionDom = description ? <div class="alert_description">{description}</div> : null;
    const closeDom = showCloseIcon ? (
      <i class="iconfont icon-guanbi" onClick={handleClose}></i>
    ) : null;
    const closeTextDom = closeText ? (
      <span class="alert_close_text" onClick={handleClose}>
        {closeText}
      </span>
    ) : null;
    const alertDom = showAlert ? (
      <div class={alertappClass}>
        {iconDom}
        <div class="alert_content">
          <span class={titleClass}>{title}</span>
          {descriptionDom}
        </div>
        {closeDom}
        {closeTextDom}
      </div>
    ) : null;
    return <transition name="close_alert_slide">{alertDom}</transition>;
  }
});
</script>

<style lang="scss">
@import "../../scss/var";
@import "../../scss/mixin";

.close_alert_slide-leave-active {
  transition: all 0.5s;
}
.close_alert_slide-enter,
.close_alert_slide-leave-to {
  opacity: 0;
}

.alertapp {
  width: 100%;
  padding: 8px 16px;
  margin: 0;
  box-sizing: border-box;
  border-radius: 4px;
  position: relative;
  display: flex;
  align-items: center;
  .alert_content {
    display: inline-block;
    padding: 0 8px;
    .alert_title {
      font-size: 13px;
    }
    .alert_title_bold {
      font-weight: 700;
    }
    .alert_description {
      margin: 0px;
      font-size: 12px;
      margin: 5px 0 0;
    }
  }
  .tipsicon {
    font-size: 14px;
  }
  .bigtipsicon {
    font-size: 28px;
  }
  .tipsicon + .alert_title {
    padding-left: 5px;
  }
  .icon-guanbi,
  .alert_close_text {
    font-size: 12px;
    cursor: pointer;
    position: absolute;
    top: 12px;
    right: 15px;
  }
}
.r_alert_center {
  justify-content: center;
}
.r_alert_info.r_alter_light {
  background-color: $alert-info-color-bg;
  color: $alert-info-color;
  .icon-guanbi,
  .alert_close_text {
    color: $alert-close-icon-color;
  }
}
.r_alert_success.r_alter_light {
  background-color: $alert-success-color-bg;
  color: $alert-success-color;
  .icon-guanbi,
  .alert_close_text {
    color: $alert-close-icon-color;
  }
}
.r_alert_warning.r_alter_light {
  background-color: $alert-warning-color-bg;
  color: $alert-warning-color;
  .icon-guanbi,
  .alert_close_text {
    color: $alert-close-icon-color;
  }
}
.r_alert_error.r_alter_light {
  background-color: $alert-error-color-bg;
  color: $alert-error-color;
  .icon-guanbi,
  .alert_close_text {
    color: $alert-close-icon-color;
  }
}

.r_alert_info.r_alter_dark {
  background-color: $alert-info-color;
  color: #ffffff;
  .icon-guanbi,
  .alert_close_text {
    color: #ffffff;
  }
}
.r_alert_success.r_alter_dark {
  background-color: $alert-success-color;
  color: #ffffff;
  .icon-guanbi,
  .alert_close_text {
    color: #ffffff;
  }
}
.r_alert_warning.r_alter_dark {
  background-color: $alert-warning-color;
  color: #ffffff;
  .icon-guanbi,
  .alert_close_text {
    color: #ffffff;
  }
}
.r_alert_error.r_alter_dark {
  background-color: $alert-error-color;
  color: #ffffff;
  .icon-guanbi,
  .alert_close_text {
    color: #ffffff;
  }
}
</style>
