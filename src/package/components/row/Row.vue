<!--
 * @Author: xry
 * @Description:
 * @Date: 2019-12-23 15:06:29
 * @LastEditTime: 2020-08-31 09:26:21
 * @FilePath: /Hui/rui/src/package/components/row/Row.vue
-->
<script>
import { defineComponent, reactive, toRefs, computed } from "@vue/composition-api";

export default defineComponent({
  name: "r-row",
  props: {
    gutter: Number,
    justify: {
      type: String,
      default: "start"
    },
    align: {
      type: String,
      default: "top"
    },
    type: {
      type: String
    }
  },
  setup(props) {
    const state = reactive({
      classList: computed(() => {
        return [
          props.type === "flex" ? "r_row_flex" : "r_row_notflex",
          `r_row_justify_${props.justify}`,
          `r_row_align_${props.align}`
        ];
      })
    });
    return {
      ...toRefs(state)
    };
  },
  render() {
    const { classList, $slots } = this;
    return <div class={["r_row", classList]}>{$slots.default}</div>;
  }
});
</script>
<style lang="scss">
.r_row_notflex {
  &::before {
    content: "";
    display: table;
  }
  &::after {
    content: "";
    display: table;
    clear: both;
  }
}
.r_row_flex {
  display: flex;
}
//start/end/center/space-around/space-between
.r_row_flex.r_row_justify_start {
  justify-content: flex-start;
}
.r_row_flex.r_row_justify_end {
  justify-content: flex-end;
}
.r_row_flex.r_row_justify_center {
  justify-content: center;
}
.r_row_flex.r_row_justify_space-around {
  justify-content: space-around;
}
.r_row_flex.r_row_justify_space-between {
  justify-content: space-between;
}

//top/middle/bottom
.r_row_flex.r_row_align_top {
  align-items: top;
}
.r_row_flex.r_row_align_middle {
  align-items: middle;
}
.r_row_flex.r_row_align_bottom {
  align-items: bottom;
}
</style>
