<!--
 * @Author: xry
 * @Description:
 * @Date: 2019-12-23 15:06:29
 * @LastEditTime: 2020-10-12 00:53:46
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/src/views/layoutview/index.vue
-->
<script>
import Examplebox from "@/components/Examplebox";
import code from "./code.ts";
import axios from "axios";
import { defineComponent, reactive, toRefs, onMounted } from "@vue/composition-api";

export default defineComponent({
  name: "layoutviewapp",
  components: {
    Examplebox
  },
  setup() {
    const state = reactive({
      title: "Layout 布局",
      description: "通过基础的 24 分栏，迅速简便地创建布局。",
      demo1: {
        title: "基础布局",
        notes: "使用单一分栏创建基础的栅格布局。",
        description: "通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。",
        code: code.code1
      },
      demo2: {
        title: "分栏间隔",
        notes: "分栏之间存在间隔。",
        description: "Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。",
        code: code.code2
      },
      demo3: {
        title: "混合布局",
        notes: "通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。",
        description: "",
        code: code.code3
      },
      demo4: {
        title: "分栏偏移",
        notes: "支持偏移指定的栏数。",
        description: "通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。",
        code: code.code4
      },
      demo5: {
        title: "对齐方式",
        notes: "通过 flex 布局来对分栏进行灵活的对齐。",
        description:
          "将 type 属性赋值为 'flex'，可以启用 flex 布局，并可通过 justify 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。",
        code: code.code5
      }
    });
    onMounted(() => {});
    return {
      ...toRefs(state)
    };
  },
  render() {
    const { title, description, demo1, demo2, demo3, demo4, demo5 } = this;
    return (
      <div id="layoutviewapp" class="layoutviewapp">
        <h2>{title}</h2>
        <p>{description}</p>
        <div class="suchas">
          <examplebox code={demo1.code} title={demo1.title} notes={demo1.notes}>
            <template slot="sourse">
              <r-row>
                <r-col span={24}>
                  <div class="grid-content bg-purple-dark"></div>
                </r-col>
              </r-row>
              <r-row>
                <r-col span={12}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
                <r-col span={12}>
                  <div class="grid-content bg-purple-light"></div>
                </r-col>
              </r-row>
              <r-row>
                <r-col span={8}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
                <r-col span={8}>
                  <div class="grid-content bg-purple-light"></div>
                </r-col>
                <r-col span={8}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
              </r-row>
              <r-row>
                <r-col span={6}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
                <r-col span={6}>
                  <div class="grid-content bg-purple-light"></div>
                </r-col>
                <r-col span={6}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
                <r-col span={6}>
                  <div class="grid-content bg-purple-light"></div>
                </r-col>
              </r-row>
              <r-row>
                <r-col span={4}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
                <r-col span={4}>
                  <div class="grid-content bg-purple-light"></div>
                </r-col>
                <r-col span={4}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
                <r-col span={4}>
                  <div class="grid-content bg-purple-light"></div>
                </r-col>
                <r-col span={4}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
                <r-col span={4}>
                  <div class="grid-content bg-purple-light"></div>
                </r-col>
              </r-row>
            </template>
            <template slot="description">{demo1.description}</template>
          </examplebox>
        </div>

        <div class="suchas">
          <examplebox code={demo2.code} title={demo2.title} notes={demo2.notes}>
            <template slot="sourse">
              <r-row gutter={20}>
                <r-col span={6}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
                <r-col span={6}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
                <r-col span={6}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
                <r-col span={6}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
              </r-row>
            </template>
            <template slot="description">{demo2.description}</template>
          </examplebox>
        </div>

        <div class="suchas">
          <examplebox code={demo3.code} title={demo3.title} notes={demo3.notes}>
            <template slot="sourse">
              <r-row gutter={20}>
                <r-col span={16}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
                <r-col span={8}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
              </r-row>
              <r-row gutter={20}>
                <r-col span={8}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
                <r-col span={8}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
                <r-col span={4}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
                <r-col span={4}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
              </r-row>
              <r-row gutter={20}>
                <r-col span={4}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
                <r-col span={16}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
                <r-col span={4}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
              </r-row>
            </template>
            <template slot="description"></template>
          </examplebox>
        </div>

        <div class="suchas">
          <examplebox code={demo4.code} title={demo4.title} notes={demo4.notes}>
            <template slot="sourse">
              <r-row gutter={20}>
                <r-col span={6}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
                <r-col span={6} offset={6}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
              </r-row>
              <r-row gutter={20}>
                <r-col span={6} offset={6}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
                <r-col span={6} offset={6}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
              </r-row>
              <r-row gutter={20}>
                <r-col span={12} offset={6}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
              </r-row>
            </template>
            <template slot="description">{demo4.description}</template>
          </examplebox>
        </div>

        <div class="suchas">
          <examplebox code={demo5.code} title={demo5.title} notes={demo5.notes}>
            <template slot="sourse">
              <r-row type="flex" class="row-bg">
                <r-col span={6}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
                <r-col span={6}>
                  <div class="grid-content bg-purple-light"></div>
                </r-col>
                <r-col span={6}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
              </r-row>
              <r-row type="flex" class="row-bg" justify="center">
                <r-col span={6}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
                <r-col span={6}>
                  <div class="grid-content bg-purple-light"></div>
                </r-col>
                <r-col span={6}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
              </r-row>
              <r-row type="flex" class="row-bg" justify="end">
                <r-col span={6}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
                <r-col span={6}>
                  <div class="grid-content bg-purple-light"></div>
                </r-col>
                <r-col span={6}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
              </r-row>
              <r-row type="flex" class="row-bg" justify="space-between">
                <r-col span={6}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
                <r-col span={6}>
                  <div class="grid-content bg-purple-light"></div>
                </r-col>
                <r-col span={6}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
              </r-row>
              <r-row type="flex" class="row-bg" justify="space-around">
                <r-col span={6}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
                <r-col span={6}>
                  <div class="grid-content bg-purple-light"></div>
                </r-col>
                <r-col span={6}>
                  <div class="grid-content bg-purple"></div>
                </r-col>
              </r-row>
            </template>
            <template slot="description">{demo5.description} </template>
          </examplebox>
        </div>
      </div>
    );
  }
});
</script>

<style lang="scss">
.layoutviewapp {
  padding-bottom: 200px;
  p {
    margin: 14px 0;
  }
}

.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.r_row + .r_row {
  margin-top: 20px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
