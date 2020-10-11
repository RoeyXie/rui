<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-09-04 18:54:47
 * @LastEditTime: 2020-09-04 19:09:11
 * @FilePath: /Hui/rui/src/package/components/divider/Divider.vue
-->
<script>
import {
  defineComponent,
  reactive,
  toRefs,
  computed
} from "@vue/composition-api";
export default defineComponent({
  name: "r-divider",
  props: {
    direction: {
      type: String,
      default: "horizontal"
    },
    contentPosition: {
      type: String,
      default: "center"
    }
  },
  setup(props) {
    let state = reactive({
      dividerClass: computed(() => {
        return ["r_divider", `r_divider_${props.direction}`];
      }),
      textClass: computed(() => {
        return ["r_divider_text", `r_divider_text_${props.contentPosition}`];
      })
    });
    return {
      ...toRefs(state)
    };
  },
  render() {
    const { $slots, dividerClass, textClass } = this;
    const dom = $slots.default ? <div class={textClass}>{$slots.default}</div> : null;
    return <div class={dividerClass}>{dom}</div>;
  }
});
</script>

<style lang="scss">
@import "../../scss/var";
@import "../../scss/mixin";

.r_divider {
  background-color: $divider-bg-color;
}
.r_divider_horizontal {
  height: 1px;
  width: 100%;
  margin: 24px 0;
  position: relative;
  .r_divider_text {
    background-color: #fff;
    padding: 0 20px;
    font-weight: 500;
    color: $divider-text-color;
    font-size: 14px;
  }
  .r_divider_text_center {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  }
  .r_divider_text_left {
    position: absolute;
    transform: translateY(-50%);
    left: 20px;
    top: 50%;
  }
  .r_divider_text_right {
    position: absolute;
    transform: translateY(-50%);
    right: 20px;
    top: 50%;
  }
}

.r_divider_vertical {
  display: inline-block;
  width: 1px;
  height: 1em;
  vertical-align: middle;
  margin: 0 8px;
}
</style>
