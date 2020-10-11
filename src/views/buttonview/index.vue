<script>
import Examplebox from "@/components/Examplebox";
import code from "./code.ts";
import { defineComponent, reactive, toRefs } from "@vue/composition-api";

export default defineComponent({
  name: "buttonviewapp",
  components: {
    Examplebox
  },
  setup() {
    const state = reactive({
      title: "Button 按钮",
      description: "常用的操作按钮。",
      demo1: {
        title: "基础用法",
        notes: "基础的按钮用法。",
        code: code.code1
      },
      demo2: {
        title: "禁用状态",
        notes: "按钮不可用状态。",
        code: code.code2
      },
      demo3: {
        title: "文字按钮",
        notes: "没有边框和背景色的按钮。",
        code: code.code3
      },
      demo4: {
        title: "图标按钮",
        notes: "带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。",
        code: code.code4
      },
      demo5: {
        title: "按钮组",
        notes: "以按钮组的方式出现，常用于多项类似操作。",
        code: code.code5
      },
      demo6: {
        title: "加载中",
        notes: "点击按钮后进行数据加载操作，在按钮上显示加载状态。",
        code: code.code6
      },
      demo7: {
        title: "不同尺寸",
        notes: "Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。",
        code: code.code7
      }
    });
    const test = e => {
      console.log(e);
    };
    return {
      ...toRefs(state),
      test
    };
  },
  render() {
    const { title, description, demo1, demo2, demo3, demo4, demo5, demo6, demo7, test } = this;
    return (
      <div id="buttonviewapp" class="buttonviewapp">
        <h2>{title}</h2>
        <p>{description}</p>
        <div class="suchas">
          <examplebox code={demo1.code} title={demo1.title} notes={demo1.description}>
            <template slot="sourse">
              <div class="btnbox">
                <r-btn onClick={test}>默认按钮</r-btn>
                <r-btn type="primary">主要按钮</r-btn>
                <r-btn type="success">成功按钮</r-btn>
                <r-btn type="info">信息按钮</r-btn>
                <r-btn type="warning">警告按钮</r-btn>
                <r-btn type="danger">危险按钮</r-btn>
              </div>
              <div class="btnbox">
                <r-btn plain>朴素按钮</r-btn>
                <r-btn type="primary" plain>
                  主要按钮
                </r-btn>
                <r-btn type="success" plain>
                  成功按钮
                </r-btn>
                <r-btn type="info" plain>
                  信息按钮
                </r-btn>
                <r-btn type="warning" plain>
                  警告按钮
                </r-btn>
                <r-btn type="danger" plain>
                  危险按钮
                </r-btn>
              </div>
              <div class="btnbox">
                <r-btn round>圆角按钮</r-btn>
                <r-btn type="primary" round>
                  主要按钮
                </r-btn>
                <r-btn type="success" round>
                  成功按钮
                </r-btn>
                <r-btn type="info" round>
                  信息按钮
                </r-btn>
                <r-btn type="warning" round>
                  警告按钮
                </r-btn>
                <r-btn type="danger" round>
                  危险按钮
                </r-btn>
              </div>
              <div class="btnbox">
                <r-btn icon="icon-xiazai17" circle></r-btn>
                <r-btn type="primary" icon="icon-bianji" circle></r-btn>
                <r-btn type="success" icon="icon-gou" circle></r-btn>
                <r-btn type="info" icon="icon-youjian" circle></r-btn>
                <r-btn type="warning" icon="icon-unie601" circle></r-btn>
                <r-btn type="danger" icon="icon-ziyuan" circle></r-btn>
              </div>
            </template>
            <template slot="description">
              使用
              <code>type</code> 、 <code>plain</code> 、 <code>round</code> 和<code>circle</code>{" "}
              属性来定义 <code>Button</code> 的样式。
            </template>
          </examplebox>
        </div>
        <div class="suchas">
          <examplebox code={demo2.code} title={demo2.title} notes={demo2.description}>
            <template slot="sourse">
              <div class="btnbox">
                <r-btn disable>默认按钮</r-btn>
                <r-btn type="primary" disable>
                  主要按钮
                </r-btn>
                <r-btn type="success" disable>
                  成功按钮
                </r-btn>
                <r-btn type="info" disable>
                  信息按钮
                </r-btn>
                <r-btn type="warning" disable>
                  警告按钮
                </r-btn>
                <r-btn type="danger" disable>
                  危险按钮
                </r-btn>
              </div>
              <div class="btnbox">
                <r-btn plain disable>
                  朴素按钮
                </r-btn>
                <r-btn type="primary" plain disable>
                  主要按钮
                </r-btn>
                <r-btn type="success" plain disable>
                  成功按钮
                </r-btn>
                <r-btn type="info" plain disable>
                  信息按钮
                </r-btn>
                <r-btn type="warning" plain disable>
                  警告按钮
                </r-btn>
                <r-btn type="danger" plain disable>
                  危险按钮
                </r-btn>
              </div>
            </template>
            <template slot="description">
              你可以使用
              <code>disable</code>属性来定义按钮是否可用，它接受一个 <code>Boolean</code>值。
            </template>
          </examplebox>
        </div>
        <div class="suchas">
          <examplebox code={demo3.code} title={demo3.title} notes={demo3.description}>
            <template slot="sourse">
              <div class="btnbox">
                <r-btn type="text">文字按钮</r-btn>
                <r-btn type="text" disable>
                  文字按钮
                </r-btn>
              </div>
            </template>
            <template slot="description">
              你可以使用
              <code>type</code>属性来定义按钮是否为文字按钮。
            </template>
          </examplebox>
        </div>
        <div class="suchas">
          <examplebox code={demo4.code} title={demo4.title} notes={demo4.description}>
            <template slot="sourse">
              <div class="btnbox">
                <r-btn type="primary" icon="icon-bianji"></r-btn>
                <r-btn type="primary" icon="icon-tubiao212"></r-btn>
                <r-btn type="primary" icon="icon-ziyuan"></r-btn>
                <r-btn type="primary" icon="icon-xiazai17">
                  搜索
                </r-btn>
                <r-btn type="primary">
                  上传
                  <i class="iconfont icon-shangchuan"></i>
                </r-btn>
              </div>
            </template>
            <template slot="description">
              设置
              <code>icon</code>属性即可，icon 的列表可以参考 Element 的 icon
              组件，也可以设置在文字右边的 icon ，只要使用 <code>i</code>
              标签即可，可以使用自定义图标。
            </template>
          </examplebox>
        </div>
        <div class="suchas">
          <examplebox code={demo5.code} title={demo5.title} notes={demo5.description}>
            <template slot="sourse">
              <div class="btnbox">
                <r-btngroup>
                  <r-btn type="primary" icon="icon-tubiaozhizuo-">
                    上一页
                  </r-btn>
                  <r-btn type="primary">
                    下一页
                    <i class="iconfont icon-tubiaozhizuo-1"></i>
                  </r-btn>
                </r-btngroup>
                <r-btngroup>
                  <r-btn type="primary" icon="icon-bianji"></r-btn>
                  <r-btn type="primary" icon="icon-tubiao212"></r-btn>
                  <r-btn type="primary" icon="icon-ziyuan"></r-btn>
                </r-btngroup>
              </div>
            </template>
            <template slot="description">
              <pre>
                使用<code>&lt;r-btngroup&gt;</code>标签来嵌套你的按钮。
              </pre>
            </template>
          </examplebox>
        </div>
        <div class="suchas">
          <examplebox code={demo6.code} title={demo6.title} notes={demo6.description}>
            <template slot="sourse">
              <div class="btnbox">
                <r-btn type="primary" loading>
                  加载中
                </r-btn>
              </div>
            </template>
            <template slot="description">
              要设置为
              <code>loading</code> 状态，只要设置loading属性为 <code>true</code>即可。
            </template>
          </examplebox>
        </div>
        <div class="suchas">
          <examplebox code={demo7.code} title={demo7.title} notes={demo7.description}>
            <template slot="sourse">
              <div class="btnbox">
                <r-btn>默认按钮</r-btn>
                <r-btn type="medium">中等按钮</r-btn>
                <r-btn type="small">小型按钮</r-btn>
                <r-btn type="mini">超小按钮</r-btn>
              </div>
              <div class="btnbox">
                <r-btn round>默认按钮</r-btn>
                <r-btn type="medium" round>
                  中等按钮
                </r-btn>
                <r-btn type="small" round>
                  小型按钮
                </r-btn>
                <r-btn type="mini" round>
                  超小按钮
                </r-btn>
              </div>
            </template>
            <template slot="description">
              额外的尺寸：
              <code>medium</code>、 <code>small</code>、 <code>mini</code>，通过设置
              <code>size</code>属性来配置它们。
            </template>
          </examplebox>
        </div>
      </div>
    );
  }
});
</script>

<style lang="scss">
.buttonviewapp {
  padding-bottom: 200px;
  p {
    margin: 14px 0;
  }
}

.r-btn + .r-btn {
  margin-left: 10px;
}

.btnbox {
  margin-bottom: 20px;
}

.r-buttonGroup + .r-buttonGroup {
  margin-left: 10px;
}

.description {
  pre {
    margin: 0;
  }
}
</style>
