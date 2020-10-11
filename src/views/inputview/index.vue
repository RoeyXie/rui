<template>
  <div id="inputviewapp" class="inputviewapp">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <div class="warning">
      <p>Input 为受控组件，它总会显示 Vue 绑定值。</p>
      <p>
        通常情况下，应当处理
        <code>input</code> 事件，并更新组件的绑定值（或使用
        <code>v-model</code> ）。否则，输入框内显示的值将不会改变。
      </p>
      <p>
        不支持
        <code>v-model</code> 修饰符。
      </p>
    </div>

     <div class="suchas">
      <examplebox :code="demo1.code" :title="demo1.title" :notes="demo1.notes">
        <template v-slot:sourse>
          <div class="demo_input">
            <r-input v-model="input" placeholder="请输入内容"></r-input>
          </div>
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo2.code" :title="demo2.title" :notes="demo2.notes">
        <template v-slot:sourse>
          <div class="demo_input">
            <r-input placeholder="请输入内容" v-model="input1" :disabled="true"></r-input>
          </div>
        </template>
        <template v-slot:description>
          <div>
            通过
            <code>disabled</code>
            属性指定是否禁用 input 组件
          </div>
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo3.code" :title="demo3.title" :notes="demo3.notes">
        <template v-slot:sourse>
          <div class="demo_input">
            <r-input placeholder="请输入内容" v-model="input2" clearable></r-input>
          </div>
        </template>
        <template v-slot:description>
          <div>
            使用
            <code>clearable</code>
            属性即可得到一个可清空的输入框
          </div>
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo4.code" :title="demo4.title" :notes="demo4.notes">
        <template v-slot:sourse>
          <div class="demo_input">
            <r-input placeholder="请输入密码" v-model="input3" show-password></r-input>
          </div>
        </template>
        <template v-slot:description>
          <div>
            使用
            <code>show-password</code>
            属性即可得到一个可切换显示隐藏的密码框
          </div>
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo5.code" :title="demo5.title" :notes="demo5.notes">
        <template v-slot:sourse>
          <div class="demo-input-suffix">
            属性方式：
            <r-input placeholder="请选择日期" suffix-icon="icon-riqi" v-model="input4"></r-input>
            <r-input
              placeholder="请输入内容"
              prefix-icon="icon-xiazai17"
              v-model="input5"
            ></r-input>
          </div>
          <div class="demo-input-suffix">
            slot 方式：
            <r-input placeholder="请选择日期" v-model="input6">
              <i slot="suffix" class="iconfont icon-riqi"></i>
            </r-input>
            <r-input placeholder="请输入内容" v-model="input7">
              <i slot="prefix" class="iconfont icon-xiazai17"></i>
            </r-input>
          </div>
        </template>
        <template v-slot:description>
          <div>
            可以通过 <code>prefix-icon</code> 和
            <code>suffix-icon</code>
            属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。
          </div>
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo6.code" :title="demo6.title" :notes="demo6.notes">
        <template v-slot:sourse>
          <r-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></r-input>
        </template>
        <template v-slot:description>
          <div>
            文本域高度可通过
            <code>rows</code>
            属性控制
          </div>
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo7.code" :title="demo7.title" :notes="demo7.notes">
        <template v-slot:sourse>
          <r-input type="textarea" autosize placeholder="请输入内容" v-model="textarea1"></r-input>
          <div style="margin: 20px 0;"></div>
          <r-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4 }"
            placeholder="请输入内容"
            v-model="textarea2"
          ></r-input>
        </template>
        <template v-slot:description></template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo8.code" :title="demo8.title" :notes="demo8.notes">
        <template v-slot:sourse>
          <div>
            <r-input placeholder="请输入内容" v-model="input8">
              <template slot="prepend">Http://</template>
            </r-input>
          </div>
          <div style="margin-top: 15px;">
            <r-input placeholder="请输入内容" v-model="input9">
              <template slot="append">.com</template>
            </r-input>
          </div>
        </template>
        <template v-slot:description>
          <div>可通过 slot 来指定在 input 中前置或者后置内容。</div>
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo9.code" :title="demo9.title" :notes="demo9.notes">
        <template v-slot:sourse>
          <div class="demo-input-size">
            <span class="demo_input">
              <r-input placeholder="请输入内容" suffix-icon="icon-riqi" v-model="input10"></r-input>
            </span>
            <span class="demo_input">
              <r-input
                size="medium"
                placeholder="请输入内容"
                suffix-icon="icon-riqi"
                v-model="input11"
              ></r-input>
            </span>
            <span class="demo_input">
              <r-input
                size="small"
                placeholder="请输入内容"
                suffix-icon="icon-riqi"
                v-model="input12"
              ></r-input>
            </span>
            <span class="demo_input">
              <r-input
                size="mini"
                placeholder="请输入内容"
                suffix-icon="icon-riqi"
                v-model="input13"
              ></r-input>
            </span>
          </div>
        </template>
        <template v-slot:description>
          <div>
            可通过
            <code>size</code>
            属性指定输入框的尺寸，除了默认的大小外，还提供了 large、small 和 mini 三种尺寸。
          </div>
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo10.code" :title="demo10.title" :notes="demo10.notes">
        <template v-slot:sourse>
          <div class="demo_input">
            <r-input
              type="text"
              placeholder="请输入内容"
              v-model="textarea3"
              maxlength="10"
              show-word-limit
            ></r-input>
          </div>
          <div style="margin: 20px 0;"></div>
          <r-input
            type="textarea"
            placeholder="请输入内容"
            v-model="textarea4"
            maxlength="30"
            show-word-limit
          ></r-input>
        </template>
        <template v-slot:description>
          <div>
            <code>maxlength</code> 和
            <code>minlength</code>
            是原生属性，用来限制输入框的字符长度，其中字符长度是用 Javascript
            的字符串长度统计的。对于类型为 text 或 textarea 的输入框，在使用
            <code>maxlength</code>
            属性限制最大输入长度的同时，可通过设置
            <code>show-word-limit</code>
            属性来展示字数统计。
          </div>
        </template>
      </examplebox>
    </div>
  </div>
</template>

<script>
import Examplebox from "@/components/Examplebox";
import code from "./code.ts";

export default {
  name: "inputviewapp",
  components: {
    Examplebox
  },
  data() {
    return {
      title: "Input 输入框",
      description: "通过鼠标或键盘输入字符",
      demo1: {
        title: "基础用法",
        code: code.code1
      },
      demo2: {
        title: "禁用状态",
        code: code.code2
      },
      demo3: {
        title: "可清空",
        code: code.code3
      },
      demo4: {
        title: "密码框",
        code: code.code4
      },
      demo5: {
        title: "带 icon 的输入框",
        notes: "带有图标标记输入类型",
        code: code.code5
      },
      demo6: {
        title: "文本域",
        notes: "用于输入多行文本信息，通过将 type 属性的值指定为 textarea。",
        code: code.code6
      },
      demo7: {
        title: "可自适应文本高度的文本域",
        notes:
          "通过设置 autosize 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 autosize 还可以设定为一个对象，指定最小行数和最大行数。",
        code: code.code7
      },
      demo8: {
        title: "复合型输入框",
        notes: "可前置或后置元素，一般为标签或按钮",
        code: code.code8
      },
      demo9: {
        title: "尺寸",
        code: code.code9
      },
      demo10: {
        title: "输入长度限制",
        notes: "可前置或后置元素，一般为标签或按钮",
        code: code.code10
      },
      input: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      input7: "",
      input8: "",
      input9: "",
      input10: "",
      input11: "",
      input12: "",
      input13: "",
      textarea: "",
      textarea1: "",
      textarea2: "",
      textarea3: "",
      textarea4: ""
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.inputviewapp {
  padding-bottom: 200px;
  p {
    margin: 14px 0;
  }
}

.demo_input .rinput {
  width: 180px;
}
.suchas .rtextarea {
  width: 414px;
}
.demo-input-suffix {
  padding: 10px 0;
  .rinput {
    width: 180px;
  }
}
.rinput + .rinput {
  margin-left: 10px;
}

.demo_input + .demo_input {
  margin-left: 10px;
}
</style>
