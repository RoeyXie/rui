<script>
import { defineComponent, reactive, toRefs, computed } from "@vue/composition-api";
export default defineComponent({
  name: "r-timeline-item",
  props: {
    timestamp: {
      type: String
    },
    hideTimestamp: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: "bottom"
    },
    type: {
      type: String
    },
    color: {
      type: String
    },
    size: {
      type: String,
      default: "normal"
    },
    icon: {
      type: String
    }
  },
  setup(props) {
    let state = reactive({
      nodeClass: computed(() => {
        return [
          "r_timeline_item_node",
          `r_timeline_item_node--${props.size}`,
          props.type ? `r_timeline_item_node--${props.type}` : ""
        ];
      }),
      timestampClass: computed(() => {
        return ["r_timeline_item_timestamp", `r_timeline_item_timestamp--${props.placement}`];
      }),
      isTop: computed(() => {
        return props.placement === "top";
      })
    });
    return {
      ...toRefs(state)
    };
  },
  render() {
    const {
      $slots,
      nodeClass,
      color,
      icon,
      timestampClass,
      hideTimestamp,
      isTop,
      timestamp
    } = this;
    const iconDom = icon ? <i class={icon}></i> : null;
    const topDom = !hideTimestamp && isTop ? <div class={timestampClass}>{timestamp}</div> : null;
    const noTopDom =
      !hideTimestamp && !isTop ? <div class={timestampClass}>{timestamp}</div> : null;
    return (
      <li class="r_timeline_item">
        <div class="r_timeline_item_tail"></div>
        <div class={nodeClass} style={{ backgroundColor: color }}>
          {iconDom}
        </div>
        <div class="r_timeline_item_wrapper">
          {topDom}
          <div class="r_timeline_item_content">{$slots.default}</div>
          {noTopDom}
        </div>
      </li>
    );
  }
});
</script>

<style lang="scss">
@import "../../scss/var";
@import "../../scss/mixin";

.r_timeline_item {
  font-size: 14px;
  position: relative;
  padding-bottom: 20px;
  .r_timeline_item_tail {
    position: absolute;
    left: 4px;
    height: 100%;
    border-left: 2px solid #e4e7ed;
  }
  .r_timeline_item_node {
    position: absolute;
    border-radius: 50%;
    background-color: #e4e7ed;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
  .r_timeline_item_node--normal {
    left: -1px;
    width: 12px;
    height: 12px;
  }
  .r_timeline_item_node--large {
    left: -2px;
    width: 14px;
    height: 14px;
  }
  .r_timeline_item_node--primary {
    background-color: $timeline-primary-color;
  }
  .r_timeline_item_node--success {
    background-color: $timeline-success-color;
  }
  .r_timeline_item_node--warning {
    background-color: $timeline-warning-color;
  }
  .r_timeline_item_node--danger {
    background-color: $timeline-danger-color;
  }
  .r_timeline_item_node--info {
    background-color: $timeline-info-color;
  }
  .r_timeline_item_wrapper {
    position: relative;
    padding-left: 28px;
    top: -3px;
    .r_timeline_item_content {
      color: #303133;
    }
    .r_timeline_item_timestamp {
      color: #909399;
      line-height: 1;
      font-size: 13px;
    }
    .r_timeline_item_timestamp--top {
      margin-bottom: 8px;
      padding-top: 4px;
    }
    .r_timeline_item_timestamp--bottom {
      margin-top: 8px;
      padding-bottom: 4px;
    }
  }
}

.r_timeline .r_timeline_item:last-child .r_timeline_item_tail {
  display: none;
}
</style>
