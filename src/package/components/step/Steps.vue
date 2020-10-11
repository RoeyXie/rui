<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-09-04 17:50:37
 * @LastEditTime: 2020-09-04 18:53:41
 * @FilePath: /Hui/rui/src/package/components/step/Steps.vue
-->
<script>
import { defineComponent, reactive, toRefs, computed } from "@vue/composition-api";
export default defineComponent({
  name: "r-steps",
  customOption: "RSteps",
  props: {
    active: {
      type: Number,
      default: 0
    },
    space: [Number, String],
    direction: {
      type: String,
      default: "horizontal"
    },
    alignCenter: {
      type: Boolean,
      default: false
    },
    simple: {
      type: Boolean,
      default: false
    },
    finishStatus: {
      type: String,
      default: "finish"
    },
    processStatus: {
      type: String,
      default: "process"
    }
  },
  setup(props) {
    let state = reactive({
      stepList: [],
      stepsClass: computed(() => {
        return ["r_steps", `r_steps_${props.direction}`, props.simple ? `r_steps_simple` : ""];
      })
    });
    return {
      ...toRefs(state)
    };
  },
  render() {
    const { $slots, stepsClass } = this;
    return <div class={stepsClass}>{$slots.default}</div>;
  }
});
</script>

<style lang="scss">
@import "../../scss/var";
@import "../../scss/mixin";
.r_steps {
  display: flex;
}

.r_steps_simple {
  background-color: $input-disable-color-bg;
  padding: 5px 8%;
  border-radius: 4px;
}
</style>
