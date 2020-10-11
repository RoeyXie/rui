const code1: string = `<r-inputv-model="input" placeholder="请输入内容"></r-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
`;
const code2: string = `<r-input
  v-model="input"
  placeholder="请输入内容"
  :disabled="true">
</r-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>

`;
const code3: string = `<r-input
  v-model="input"
  placeholder="请输入内容"
  clearable>
</r-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>

`;
const code4: string = `<r-input
  v-model="input"
  placeholder="请输入内容"
  show-password>
</r-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
`;
const code5: string = `<div class="demo_input demo-input-suffix">
  属性方式：
  <r-input placeholder="请选择日期" suffix-icon="icon-riqi" v-model="input1"></r-input>
  <r-input placeholder="请输入内容" prefix-icon="icon-xiazai17" v-model="input2"></r-input>
</div>
<div class="demo_input demo-input-suffix">
  slot 方式：
  <r-input placeholder="请选择日期" v-model="input3">
    <i slot="suffix" class="iconfont icon-riqi"></i>
  </r-input>
  <r-input placeholder="请输入内容" v-model="input4">
    <i slot="prefix" class="iconfont icon-xiazai17"></i>
  </r-input>
</div>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: ''
    }
  }
}
</script>`;
const code6: string = `<r-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="textarea">
</r-input>

<script>
export default {
  data() {
    return {
      textarea: ''
    }
  }
}
</script>
`;
const code7: string = `<r-input
  type="textarea"
  autosize
  placeholder="请输入内容"
  v-model="textarea1">
</r-input>
<div style="margin: 20px 0;"></div>
<r-input
  type="textarea"
  :autosize="{ minRows: 2, maxRows: 4}"
  placeholder="请输入内容"
  v-model="textarea2">
</r-input>

<script>
export default {
  data() {
    return {
      textarea1: '',
      textarea2: ''
    }
  }
}
</script>`;
const code8: string = `<div>
  <r-inputplaceholder="请输入内容" v-model="input1">
    <template slot="prepend">Http://</template>
  </r-input>
</div>
<div style="margin-top: 15px;">
  <r-inputplaceholder="请输入内容" v-model="input2">
    <template slot="append">.com</template>
  </r-input>
</div>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: ''
    }
  }
}
</script>`;
const code9: string = `<r-input
  placeholder="请输入内容"
  suffix-icon="el-icon-date"
  v-model="input1">
</r-input>
<r-input
  size="medium"
  placeholder="请输入内容"
  suffix-icon="el-icon-date"
  v-model="input2">
</r-input>
<r-input
  size="small"
  placeholder="请输入内容"
  suffix-icon="el-icon-date"
  v-model="input2">
</r-input>
<r-input
  size="mini"
  placeholder="请输入内容"
  suffix-icon="el-icon-date"
  v-model="input2">
</r-input>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: ''
    }
  }
}
</script>`;
const code10: string = `<r-input
  type="text"
  placeholder="请输入内容"
  v-model="text"
  maxlength="10"
  show-word-limit>
</r-input>
<div style="margin: 20px 0;"></div>
<r-input
  type="textarea"
  placeholder="请输入dde s sdssss内容"
  v-model="textarea"
  maxlength="30"
  show-word-limit>
</r-input>

<script>
export default {
  data() {
    return {
      text: '',
      textarea: ''
    }
  }
}
</script>
`;

export default {
  code1,
  code2,
  code3,
  code4,
  code5,
  code6,
  code7,
  code8,
  code9,
  code10
};
