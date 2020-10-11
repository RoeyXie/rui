<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-09-04 19:23:46
 * @LastEditTime: 2020-09-04 19:26:45
 * @FilePath: /Hui/rui/src/package/components/timeline/TimeLine.vue
-->
<script>
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  name: "r-timeline",
  customOption: "RTimeline",
  props: {
    reverse: {
      type: Boolean,
      default: false
    }
  },
  render() {
    const reverse = this.reverse;
    const classes = {
      r_timeline: true,
      is_reverse: reverse
    };
    let slots = this.$slots.default || [];
    if (reverse) {
      slots = slots.reverse();
    }
    return <ul class={classes}>{slots}</ul>;
  }
});
</script>

<style lang="scss">
@import "../../scss/var";
@import "../../scss/mixin";

.r_timeline {
  margin: 0;
  font-size: 14px;
  padding-left: 30px;
}
</style>
