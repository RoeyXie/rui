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
  name: "message",
  props: {},
  setup() {
    const instance = getCurrentInstance();
    // console.log("instance",instance)
    let state = reactive({
      message: "",
      duration: 3000,
      type: "info",
      showClose: false,
      closed: false,
      offset: 20,
      center: false,
      timer: null,
      dangerouslyUseHTMLString: null,
      test:"",
      messageappClass: computed(() => {
        return ["messageapp", `r_message_${state.type}`, state.center ? "r_message_center" : ""];
      }),
      showIconClass: computed(() => {
        return [
          "iconfont",
          "tipsicon",
          state.type === "success"
            ? "icon-gou1"
            : state.type === "warning"
            ? "icon-gantanhao"
            : state.type === "error"
            ? "icon-dacha"
            : "icon-i"
        ];
      }),
      msgStyle: computed(() => {
        return {
          "z-index": "9999",
          top: `${state.offset}px`,
          position: "fixed",
          margin: "0 auto",
          left: 0,
          right: 0
        };
      })
    });
    const close = () => {
      state.closed = true;
      instance.onClose(instance);
    };
    const startTimer = () => {
      if (state.duration > 0) {
        state.timer = setTimeout(() => {
          if (!state.closed) {
            close();
          }
        }, state.duration);
      }
    };
    const clearTimer = () => {
      clearTimeout(state.timer);
    };
    const handleAfterLeave = () => {
      instance.$destroy(true);
      instance.$el.parentNode.removeChild(instance.$el);
    };
    onMounted(() => {
      startTimer();
    });
    return {
      ...toRefs(state),
      close,
      startTimer,
      clearTimer,
      handleAfterLeave
    };
  },
  render() {
    const closeIcon = this.showClose ? <i class="iconfont icon-guanbi" onClick={this.close}></i> : null;
    const spanDom = !this.dangerouslyUseHTMLString ? (
      <span class="message_title">{this.message}</span>
    ) : (
      <span class="message_title" vHtml={this.message}></span>
    );

    return (
      <transition name="close_message_slide" onAfter-leave={this.handleAfterLeave}>
        <div
          class={this.messageappClass}
          vShow={!this.closed}
          onMouseenter={this.clearTimer}
          onMouseleave={this.startTimer}
          style={this.msgStyle}
        >
          <div class="message_content">
            <i class={this.showIconClass}></i>
            {spanDom}
          </div>
          {closeIcon}
        </div>
      </transition>
    );
  }
});
</script>

<style lang="scss">
@import "../../scss/var";
@import "../../scss/mixin";

.close_message_slide-enter-active {
  transition: all 0.5s ease;
}

.close_message_slide-leave-active {
  transition: all 0.5s ease;
}
.close_message_slide-enter,
.close_message_slide-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
.messageapp {
  width: 100%;
  padding: 8px 16px;
  margin: 0;
  box-sizing: border-box;
  border-radius: 4px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 380px;
  height: 50px;
  transition: all 0.3s;
  .message_content {
    display: inline-block;
    padding: 0 8px;
    .message_title {
      font-size: 14px;
    }
    .tipsicon {
      font-size: 14px;
    }
    .tipsicon + .message_title {
      padding-left: 5px;
    }
  }
  .icon-guanbi {
    font-size: 12px;
    cursor: pointer;
    &:hover {
      color: $alert-info-color;
    }
  }
}
.r_message_center {
  justify-content: center;
}
.r_message_info {
  background-color: $alert-info-color-bg;
  color: $alert-info-color;
  border: 1px solid $message-info-color-bd;
  .icon-guanbi {
    color: $alert-close-icon-color;
  }
}
.r_message_success {
  background-color: $alert-success-color-bg;
  color: $alert-success-color;
  border: 1px solid $message-success-color-bd;
  .icon-guanbi {
    color: $alert-close-icon-color;
  }
}
.r_message_warning {
  background-color: $alert-warning-color-bg;
  color: $alert-warning-color;
  border: 1px solid $message-warning-color-bd;
  .icon-guanbi {
    color: $alert-close-icon-color;
  }
}
.r_message_error {
  background-color: $alert-error-color-bg;
  color: $alert-error-color;
  border: 1px solid $message-error-color-bd;
  .icon-guanbi {
    color: $alert-close-icon-color;
  }
}
</style>
