<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-09-04 19:11:24
 * @LastEditTime: 2020-09-04 19:16:35
 * @FilePath: /Hui/rui/src/package/components/card/Card.vue
-->
<script>
import { defineComponent, reactive, toRefs, computed } from "@vue/composition-api";
export default defineComponent({
  name: "r-card",
  props: {
    shadow: {
      type: String,
      default: "always"
    },
    bodyStyle: {}
  },
  setup(props) {
    let state = reactive({
      cardClass: computed(() => {
        return ["r_card", `r_card_${props.shadow}`];
      })
    });
    return {
      ...toRefs(state)
    };
  },
  render() {
    const { $slots, cardClass, bodyStyle } = this;
    const header = $slots.header ? <div class="r_card_header">{$slots.header}</div> : null;
    return (
      <div class={cardClass}>
        {header}

        <div class="r_card_body" style={bodyStyle}>
          {$slots.default}
        </div>
      </div>
    );
  }
});
</script>

<style lang="scss">
.r_card {
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #ffffff;
  color: #303133;
  overflow: hidden;
  transition: all 0.3s;
  .r_card_header {
    padding: 18px 20px;
    border-bottom: 1px solid #ebeef5;
    box-sizing: border-box;
  }
  .r_card_body {
    padding: 18px 20px;
    box-sizing: border-box;
  }
}
.r_card_always {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.r_card_hover {
  &:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>
