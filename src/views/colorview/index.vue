<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-08-31 09:30:12
 * @LastEditTime: 2020-08-31 16:28:54
 * @FilePath: /Hui/rui/src/views/colorview/index.vue
-->
<script>
import { defineComponent, reactive, toRefs } from "@vue/composition-api";
import Colorbox from "@/components/Colorbox/index.vue";

export default defineComponent({
  name: "Colorview",
  components: {
    Colorbox
  },
  props: {},
  setup() {
    const state = reactive({
      auxiliaryData: [
        { text: "Success", value: "#67C23A" },
        { text: "Warning", value: "#E6A23C" },
        { text: "Danger", value: "#F56C6C" },
        { text: "Info", value: "#909399" }
      ],
      neutralData: [
        { text: "主要文字", value: "#303133" },
        { text: "一级边框", value: "#DCDFE6", textColor: "#303133" },
        { text: "基础黑色", value: "#000000" },
        { text: "常规文字", value: "#606266" },
        { text: "二级边框", value: "#E4E7ED", textColor: "#303133" },
        { text: "基础白色", value: "#FFFFFF", textColor: "#303133" },
        { text: "次要文字", value: "#909399" },
        { text: "三级边框", value: "#EBEEF5", textColor: "#303133" },
        { text: "透明", value: "Transparent", textColor: "#303133" },
        { text: "占位文字", value: "#C0C4CC" },
        { text: "四级边框", value: "#F2F6FC", textColor: "#303133" }
      ],
      title: "Color 色彩",
      description:
        "Element 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。",
      demo1: {
        title: "主色"
      },
      demo2: {
        title: "辅助色",
        notes: "除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。"
      },
      demo3: {
        title: "中性色",
        notes: "中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。"
      }
    });
    return {
      ...toRefs(state)
    };
  },
  render() {
    const { title, description, demo1, demo2, demo3, auxiliaryData, neutralData } = this;
    const demoDom1 = auxiliaryData.map(item => (
      <Colorbox
        color-text={item.text}
        color-value={item.value}
        colorExample={2}
        style="width:170px;float:left"
      ></Colorbox>
    ));
    const demoDom2 = neutralData.map(item => (
      <Colorbox
        color-text={item.text}
        color-value={item.value}
        text-color={item.textColor}
        style="width:170px;float:left"
      ></Colorbox>
    ));
    return (
      <div class="colorviewapp">
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>{demo1.title}</h3>
        <Colorbox
          color-text="Brand Color"
          color-value="#409EFF"
          colorExample={9}
          style="width:287px"
        ></Colorbox>
        <h3>{demo2.title}</h3>
        <p>{demo2.notes}</p>
        <div class="democolorbox1">{demoDom1}</div>
        <h3>{demo3.title}</h3>
        <p>{demo3.notes}</p>
        <div class="democolorbox2">{demoDom2}</div>
      </div>
    );
  }
});
</script>

<style lang="scss">
.colorviewapp {
  padding-bottom: 200px;
  p {
    margin: 14px 0;
  }
  .democolorbox1 {
    overflow: hidden;
  }
  .democolorbox2 {
    overflow: hidden;
    width: 620px;
  }
}
</style>
