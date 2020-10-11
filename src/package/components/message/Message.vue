<template>
  <transition name="close_message_slide" @after-leave="handleAfterLeave">
    <div
      :class="messageappClass"
      v-show="!closed"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
      :style="msgStyle"
    >
      <div class="message_content">
        <i :class="showIconClass"></i>
        <span v-if="!dangerouslyUseHTMLString" class="message_title">{{ message }}</span>
        <span v-else v-html="message" class="message_title"></span>
      </div>
      <i v-if="showClose" class="iconfont icon-guanbi" @click="close"></i>
    </div>
  </transition>
</template>

<script>
export default {
  computed: {
    messageappClass() {
      return ["messageapp", `r_message_${this.type}`, this.center ? "r_message_center" : ""];
    },
    showIconClass() {
      return [
        "iconfont",
        "tipsicon",
        this.type === "success"
          ? "icon-gou1"
          : this.type === "warning"
          ? "icon-gantanhao"
          : this.type === "error"
          ? "icon-dacha"
          : "icon-i"
      ];
    },
    msgStyle() {
      return {
        "z-index": "9999",
        top: `${this.offset}px`,
        position: "fixed",
        margin: "0 auto",
        left: 0,
        right: 0
      };
    }
  },
  data() {
    return {
      visible: true,
      message: "这是一条信息",
      duration: 3000,
      type: "info",
      showClose: false,
      closed: false,
      offset: 20,
      center: false,
      timer: null,
      dangerouslyUseHTMLString: null,
      test:"你是大笨蛋"
    };
  },
  mounted() {
    this.startTimer();
    console.log(this);
  },
  methods: {
    close() {
      this.closed = true;
      this.onClose(this);
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
    handleAfterLeave() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    }
  }
};
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
