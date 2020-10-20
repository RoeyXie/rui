<template>
  <div id="tagviewapp" class="tagviewapp">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <div class="suchas">
      <examplebox :code="demo1.code" :title="demo1.title" :notes="demo1.notes">
        <template v-slot:sourse>
          <r-tag>标签一</r-tag>
          <r-tag type="success">标签二</r-tag>
          <r-tag type="info">标签三</r-tag>
          <r-tag type="warning">标签四</r-tag>
          <r-tag type="danger">标签五</r-tag>
        </template>
        <template v-slot:description>
          由type属性来选择
          <code>tag</code>的类型，也可以通过 <code>color</code>属性来自定义背景色。
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo2.code" :title="demo2.title" :notes="demo2.notes">
        <template v-slot:sourse>
          <r-tag closable>标签一</r-tag>
          <r-tag type="success" closable>标签二</r-tag>
          <r-tag type="info" closable>标签三</r-tag>
          <r-tag type="warning" closable>标签四</r-tag>
          <r-tag type="danger" closable disable-transitions @close="closetag">标签五</r-tag>
        </template>
        <template v-slot:description>
          设置
          <code>closable</code
          >属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置
          <code>disable-transitions</code>属性，它接受一个 <code>Boolean</code>，
          <code>true</code> 为关闭。
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo3.code" :title="demo3.title" :notes="demo3.notes">
        <template v-slot:sourse>
          <r-tag
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
            >{{ tag }}</r-tag
          >

          <r-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
            style="width:92px;margin-left:5px"
          ></r-input>
          <r-btn
            v-else
            class="button-new-tag"
            size="small"
            @click="showInput"
            style="margin-left:5px"
            >+ New Tag</r-btn
          >
        </template>
        <template v-slot:description></template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo4.code" :title="demo4.title" :notes="demo4.notes">
        <template v-slot:sourse>
          <r-tag closable>默认标签</r-tag>
          <r-tag size="medium" closable>中等标签</r-tag>
          <r-tag size="small" closable>小型标签</r-tag>
          <r-tag size="mini" closable>超小标签</r-tag>
        </template>
        <template v-slot:description>
          由size属性来选择
          <code>tag</code>的类型，也可以通过 <code>color</code>属性来自定义背景色。
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo5.code" :title="demo5.title" :notes="demo5.notes">
        <template v-slot:sourse>
          <div class="tag-group">
            <span class="tag-group-span">Dark</span>
            <r-tag effect="dark" closable>标签一</r-tag>
            <r-tag type="success" effect="dark" closable>标签二</r-tag>
            <r-tag type="info" effect="dark" closable>标签三</r-tag>
            <r-tag type="warning" effect="dark" closable>标签四</r-tag>
            <r-tag type="danger" effect="dark" closable>标签五</r-tag>
          </div>
          <div class="tag-group">
            <span class="tag-group-span">Plain</span>
            <r-tag effect="plain" closable>标签一</r-tag>
            <r-tag type="success" effect="plain" closable>标签二</r-tag>
            <r-tag type="info" effect="plain" closable>标签三</r-tag>
            <r-tag type="warning" effect="plain" closable>标签四</r-tag>
            <r-tag type="danger" effect="plain" closable>标签五</r-tag>
          </div>
        </template>
        <template v-slot:description>
          通过设置
          <code>effect</code>属性来改变主题，默认为
          <code>light</code>
        </template>
      </examplebox>
    </div>
  </div>
</template>

<script>
import code from "./code";

export default {
  name: "tagview",
  data() {
    return {
      title: "Tag 标签",
      description: "用于标记和选择。",
      demo1: {
        title: "基础用法",
        code: code.code1
      },
      demo2: {
        title: "可移除标签",
        code: code.code2
      },
      demo3: {
        title: "动态编辑标签",
        notes: "动态编辑标签可以通过点击标签关闭按钮后触发的 close事件来实现",
        code: code.code3
      },
      demo4: {
        title: "不同尺寸",
        notes: "Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。",
        code: code.code4
      },
      demo5: {
        title: "不同主题",
        notes: "Tag 组件提供了三个不同的主题： dark、 light 和 plain",
        code: code.code5
      },
      tag: "{{tag}}",
      tags: [
        { name: "标签一", type: "" },
        { name: "标签二", type: "success" },
        { name: "标签三", type: "info" },
        { name: "标签四", type: "warning" },
        { name: "标签五", type: "danger" }
      ],
      dynamicTags: ["标签一", "标签二", "标签三"],
      inputVisible: false,
      inputValue: ""
    };
  },
  methods: {
    closetag(e) {
      console.log(e);
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        console.log("执行了");
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    }
  }
};
</script>

<style lang="scss">
.tagviewapp {
  padding-bottom: 200px;
  p {
    margin: 14px 0;
  }
}

.r-tag + .r-tag {
  margin-left: 10px;
}

.tag-group {
  .tag-group-span {
    display: inline-block;
    width: 45px;
    font-size: 14px;
    color: #606266;
  }
}
.tag-group + .tag-group {
  margin-top: 10px;
}

// .button-new-tag {
//     line-height: 30px;
// }
.input-new-tag {
  vertical-align: bottom;
}
</style>
