<template>
    <transition :name="closeName" @after-leave="handleAfterLeave">
        <div
            :class="notificationappClass"
            v-show="visible"
            @mouseenter="clearTimer"
            @mouseleave="startTimer"
            :style="msgStyle"
        >
            <div class="notification_content">
                <i :class="showIconClass" v-if="type"></i>
                <div class="notification">
                    <div class="notification_title">{{ title }}</div>
                    <div
                        v-if="!dangerouslyUseHTMLString"
                        class="notification_message"
                    >
                        {{ message }}
                    </div>
                    <div
                        v-else
                        v-html="message"
                        class="notification_message"
                    ></div>
                </div>
            </div>
            <i v-if="showClose" class="iconfont icon-guanbi" @click="close"></i>
        </div>
    </transition>
</template>

<script>
export default {
    computed: {
        notificationappClass() {
            return [
                'notificationapp',
                this.center ? 'r_notification_center' : ''
            ]
        },
        showIconClass() {
            return [
                'iconfont',
                'tipsicon',
                this.type === 'success'
                    ? 'icon-gou1'
                    : this.type === 'warning'
                    ? 'icon-gantanhao'
                    : this.type === 'error'
                    ? 'icon-dacha'
                    : this.type === 'info'
                    ? 'icon-i'
                    : '',
                `tipsicon_${this.type}`
            ]
        },
        topOrbottom() {
            return this.position.indexOf('top') > -1 ? 'top' : 'bottom'
        },
        leftOrright() {
            return this.position.indexOf('left') > -1 ? 'left' : 'right'
        },
        msgStyle() {
            return {
                'z-index': '9999',
                [this.topOrbottom]: `${this.offset}px`,
                position: 'fixed',
                [this.leftOrright]: `16px`
            }
        },
        closeName() {
            return this.topOrbottom === 'top'
                ? 'close_notification_slide'
                : 'close_notification_slide_b'
        }
    },
    data() {
        return {
            visible: true,
            message: '',
            title: '',
            duration: 4500,
            type: null,
            showClose: true,
            closed: false,
            offset: 20,
            center: false,
            timer: null,
            dangerouslyUseHTMLString: null,
            position: 'top-right'
        }
    },
    watch: {
        closed(val) {
            if (val) {
                this.visible = false
            }
        }
    },
    mounted() {
        this.startTimer()
    },
    methods: {
        close() {
            this.closed = true
            this.onClose(this)
        },
        startTimer() {
            if (this.duration > 0) {
                this.timer = setTimeout(() => {
                    if (!this.closed) {
                        this.close()
                    }
                }, this.duration)
            }
        },
        clearTimer() {
            clearTimeout(this.timer)
        },
        handleAfterLeave() {
            this.$destroy(true)
            this.$el.parentNode.removeChild(this.$el)
        }
    }
}
</script>

<style lang="scss">
@import '../../scss/var';
@import '../../scss/mixin';

.close_notification_slide-enter-active {
    transition: all 0.5s ease;
}

.close_notification_slide-leave-active {
    transition: all 0.5s ease;
}
.close_notification_slide-enter-to,
.close_notification_slide-leave-to {
    transform: translateY(-100px);
    opacity: 0;
}

.close_notification_slide_b-enter-active {
    transition: all 0.5s ease;
}

.close_notification_slide_b-leave-active {
    transition: all 0.5s ease;
}
.close_notification_slide_b-enter,
.close_notification_slide_b-leave-to {
    transform: translateY(100px);
    opacity: 0;
}

.notificationapp {
    width: 330px;
    padding: 14px 26px 14px 13px;
    border-radius: 8px;
    box-sizing: border-box;
    border: 1px solid #ebeef5;
    position: fixed;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    .notification_content {
        padding: 0 8px;
        display: flex;
        flex-direction: row;
        align-items: center;
        .notification_title {
            font-weight: 700;
            font-size: 16px;
            color: $notification-title-color;
            margin: 0;
        }
        .notification_message {
            font-size: 14px;
            color: $notification-message-color;
            margin-top: 6px;
        }
        .notification {
            display: inline-block;
        }

        .tipsicon + .notification {
            padding-left: 20px;
        }
    }
    .tipsicon {
        font-size: 24px;
    }
    .tipsicon_info {
        color: $alert-info-color;
    }
    .tipsicon_success {
        color: $alert-success-color;
    }
    .tipsicon_warning {
        color: $alert-warning-color;
    }
    .tipsicon_error {
        color: $alert-error-color;
    }
    .icon-guanbi {
        font-size: 12px;
        cursor: pointer;
        position: absolute;
        right: 26px;
        top: 13px;
        color: $alert-close-icon-color;
        &:hover {
            color: $alert-info-color;
        }
    }
}
.r_notification_center {
    justify-content: center;
}
</style>
