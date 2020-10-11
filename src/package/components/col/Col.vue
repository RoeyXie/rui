<!--
 * @Author: xry
 * @Description:
 * @Date: 2019-12-23 15:06:29
 * @LastEditTime: 2020-08-31 09:27:10
 * @FilePath: /Hui/rui/src/package/components/col/Col.vue
-->
<script>
import { defineComponent, reactive, toRefs, computed } from "@vue/composition-api";

export default defineComponent({
  name: "r-col",
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  setup(props, { parent }) {
    const state = reactive({
      gutter: computed(() => {
        let colParent = parent;
        return colParent ? colParent.gutter : 0;
      }),
      classList: computed(() => {
        return [`r_col_${props.span}`, props.offset ? `r_col_offset_${props.offset}` : ""];
      })
    });
    return {
      ...toRefs(state)
    };
  },
  render() {
    const { gutter, classList, $slots } = this;
    let style = {};
    if (gutter) {
      style.paddingLeft = gutter / 2 + "px";
      style.paddingRight = gutter / 2 + "px";
    }
    return (
      <div class={["r_col", classList, gutter]} style={style}>
        {$slots.default}
      </div>
    );
  }
});
</script>
<style lang="scss">
.r_col_24 {
  width: 100%;
}
.r_col_16 {
  width: 66.6666666666%;
}
.r_col_12 {
  width: 50%;
}
.r_col_8 {
  width: 33.3333333333%;
}
.r_col_6 {
  width: 25%;
}
.r_col_4 {
  width: 16.6666666666%;
}
.r_col_3 {
  width: 12.5%;
}
.r_col_2 {
  width: 8.3333333333%;
}
.r_col_1 {
  width: 4.1666666666%;
}
[class*="r_col_"] {
  float: left;
  box-sizing: border-box;
}
.r_col_offset_24 {
  margin-left: 100%;
}
.r_col_offset_16 {
  margin-left: 66.6666666666%;
}
.r_col_offset_12 {
  margin-left: 50%;
}
.r_col_offset_8 {
  margin-left: 33.3333333333%;
}
.r_col_offset_6 {
  margin-left: 25%;
}
.r_col_offset_4 {
  margin-left: 16.6666666666%;
}
.r_col_offset_3 {
  margin-left: 12.5%;
}
.r_col_offset_2 {
  margin-left: 8.3333333333%;
}
.r_col_offset_1 {
  margin-left: 4.1666666666%;
}
</style>
