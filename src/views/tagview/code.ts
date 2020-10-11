/*
 * @Author: xry
 * @Description:
 * @Date: 2020-09-01 16:23:07
 * @LastEditTime: 2020-09-03 16:10:10
 * @FilePath: /Hui/rui/src/views/tagview/code.ts
 */
const code1: string = `<r-tag>标签一</r-tag>
<r-tag type="success">标签二</r-tag>
<r-tag type="info">标签三</r-tag>
<r-tag type="warning">标签四</r-tag>
<r-tag type="danger">标签五</r-tag>`;

const code2: string = `<r-tag closable>标签一</r-tag>
<r-tag closable type="success">标签二</r-tag>
<r-tag closable type="info">标签三</r-tag>
<r-tag closable type="warning">标签四</r-tag>
<r-tag closable disable-transitions type="danger">标签五</r-tag>`;

const code3: string = `<r-tag
  :key="tag"
  v-for="tag in dynamicTags"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)">
  {{tag}}
  </r-tag>
<r-input
  class="input-new-tag"
  v-if="inputVisible"
  v-model="inputValue"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirm"
  @blur="handleInputConfirm">
</r-input>
<r-btn v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</r-btn>

<style>
  .el-tag + .el-tag {
   margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>

<script>
  export default {
    data() {
      return {
        dynamicTags: ["标签一", "标签二", "标签三"],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(() => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  };
</script>`;

const code4: string = `<r-tag closable>默认标签</r-tag>
<r-tag closable size="medium">中等标签</r-tag>
<r-tag closable size="small">小型标签</r-tag>
<r-tag closable size="mini">超小标签</r-tag>  `;

const code5: string = `<r-tag effect="dark">标签一</r-tag>
<r-tag effect="dark" type="success">标签二</r-tag>
<r-tag effect="dark" type="info">标签三</r-tag>
<r-tag effect="dark" type="warning">标签四</r-tag>
<r-tag effect="dark" type="danger">标签五</r-tag>`;

export default {
  code1,
  code2,
  code3,
  code4,
  code5
};
