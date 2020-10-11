<script>
import Examplebox from "@/components/Examplebox";
import code from "./code";
import { defineComponent, reactive, toRefs } from "@vue/composition-api";

export default defineComponent({
  name: "lineview",
  components: {
    Examplebox
  },
  setup() {
    let state = reactive({
      title: "Link 文字链接",
      description: "文字超链接",
      demo1: {
        title: "基础用法",
        notes: "基础的文字链接用法。",
        code: code.code1
      },
      demo2: {
        title: "禁用状态",
        notes: "文字链接不可用状态。",
        code: code.code2
      },
      demo3: {
        title: "下划线",
        notes: "文字链接下划线。",
        code: code.code3
      },
      demo4: {
        title: "图标",
        notes: "带图标的文字链接可增强辨识度。",
        code: code.code4
      }
    });
    return {
      ...toRefs(state)
    };
  },
  render() {
    const { title, description, demo1, demo2, demo3, demo4 } = this;
    return (
      <div class="lineviewapp">
        <h2>{title}</h2>
        <p>{description}</p>
        <div class="suchas">
          <examplebox code={demo1.code} title={demo1.title} notes={demo1.notes}>
            <template slot="sourse">
              <div>
                <r-link href="https://element.eleme.io" target="_blank">
                  默认链接
                </r-link>
                <r-link href="https://element.eleme.io" type="primary">
                  主要链接
                </r-link>
                <r-link type="success">成功链接</r-link>
                <r-link type="warning">警告链接</r-link>
                <r-link type="danger">危险链接</r-link>
                <r-link type="info">信息链接</r-link>
              </div>
            </template>
            <template slot="description"></template>
          </examplebox>
        </div>

        <div class="suchas">
          <examplebox code={demo2.code} title={demo2.title} notes={demo2.notes}>
            <template slot="sourse">
              <div>
                <r-link href="https://element.eleme.io" disabled>
                  默认链接
                </r-link>
                <r-link type="primary" href="https://element.eleme.io" disabled>
                  主要链接
                </r-link>
                <r-link type="success" disabled>
                  成功链接
                </r-link>
                <r-link type="warning" disabled>
                  警告链接
                </r-link>
                <r-link type="danger" disabled>
                  危险链接
                </r-link>
                <r-link type="info" disabled>
                  信息链接
                </r-link>
              </div>
            </template>
            <template slot="description"></template>
          </examplebox>
        </div>

        <div class="suchas">
          <examplebox code={demo3.code} title={demo3.title} notes={demo3.notes}>
            <template slot="sourse">
              <div>
                <r-link underline={false}>无下划线</r-link>
                <r-link>有下划线</r-link>
              </div>
            </template>
            <template slot="description"></template>
          </examplebox>
        </div>

        <div class="suchas">
          <examplebox code={demo4.code} title={demo4.title} notes={demo4.notes}>
            <template slot="sourse">
              <div>
                <r-link icon="iconfont icon-bianji">编辑</r-link>
                <r-link>
                  {" "}
                  查看<i class="iconfont icon-eye"></i>{" "}
                </r-link>
              </div>
            </template>
            <template slot="description"></template>
          </examplebox>
        </div>
      </div>
    );
  }
});
</script>

<style lang="scss">
.lineviewapp {
  padding-bottom: 200px;
  p {
    margin: 14px 0;
  }
}

.r_link + .r_link {
  margin-left: 8px;
}
</style>
