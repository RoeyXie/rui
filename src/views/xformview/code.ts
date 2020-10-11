const code1: string = `<template>
  <div style="margin-right: 40%;">
    <x-form
      v-model="params"
      :cfgdata="formData"
      ref="xform"
      label-width="120px"
      size="small"
    >
    </x-form>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        formData: [
          {
            key: "test1",
            title: "活动名称",
            type: "input"
          },
          {
            key: "test2",
            title: "活动区域",
            type: "select",
            options: [
              {
                value: "1",
                label: "活动区域一"
              },
              {
                value: "2",
                label: "活动区域二"
              }
            ]
          },
          {
            key: "test3",
            title: "申请日期",
            type: "date"
          },
          {
            key: "test4",
            title: "活动性质",
            type: "checkbox",
            options: [
              {
                value: "1",
                label: "线上美食活动"
              },
              {
                value: "2",
                label: "线下主题活动"
              }
            ]
          },
          {
            key: "test5",
            title: "特殊资源",
            type: "radio",
            options: [
              {
                value: "1",
                label: "线上品牌商赞助"
              },
              {
                value: "2",
                label: "线下收费"
              }
            ]
          },
          {
            key: "test6",
            title: "活动时间",
            type: "date",
            dateType: "daterange"
          },
          {
            key: "test7",
            title: "是否自费",
            type: "switch"
          },
          {
            key: "test8",
            title: "活动介绍",
            type: "textarea",
            cols: 3
          }
        ],
        params: {
          test1: "",
          test2: "",
          test3: null,
          test4: [],
          test5: "",
          test6: null,
          test7: null,
          test8: ""
        }
      }
    }
  }
</script>
`;

const code2: string = `<template>
  <x-form
    v-model="params"
    :cfgdata="formData"
    :columns="2"
    ref="xform"
    label-width="120px"
    size="small"
  >
  </x-form>
</template>

<script>
  export default {
    data(){
      return {
        formData: [
          {
            key: "test1",
            title: "活动名称",
            type: "input"
          },
          {
            key: "test2",
            title: "活动区域",
            type: "select",
            options: [
              {
                value: "1",
                label: "活动区域一"
              },
              {
                value: "2",
                label: "活动区域二"
              }
            ]
          },
          {
            key: "test3",
            title: "申请日期",
            type: "date"
          },
          {
            key: "test4",
            title: "活动性质",
            type: "checkbox",
            options: [
              {
                value: "1",
                label: "线上美食活动"
              },
              {
                value: "2",
                label: "线下主题活动"
              }
            ]
          },
          {
            key: "test5",
            title: "特殊资源",
            type: "radio",
            options: [
              {
                value: "1",
                label: "线上品牌商赞助"
              },
              {
                value: "2",
                label: "线下收费"
              }
            ]
          },
          {
            key: "test6",
            title: "活动时间",
            type: "date",
            dateType: "daterange"
          },
          {
            key: "test7",
            title: "是否自费",
            type: "switch"
          },
          {
            key: "test8",
            title: "活动介绍",
            type: "textarea"
          }
        ],
        params: {
          test1: "",
          test2: "",
          test3: null,
          test4: [],
          test5: "",
          test6: null,
          test7: null,
          test8: ""
        }
      }
    }
  }
</script>
`;

const code3: string = `<template>
  <x-form
    v-model="params"
    :cfgdata="formData"
    :formRules="rules"
    :columns="2"
    ref="xform"
    label-width="120px"
    size="small"
  >
  </x-form>
  <div class="toolbar">
    <el-button @click="submitForm()" type="primary" size="small">立即创建</el-button>
    <el-button @click="resetForm()" size="small">重置</el-button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        formData: [
          {
            key: "test1",
            title: "活动名称",
            type: "input"
          },
          {
            key: "test2",
            title: "活动区域",
            type: "select",
            options: [
              {
                value: "1",
                label: "活动区域一"
              },
              {
                value: "2",
                label: "活动区域二"
              }
            ]
          },
          {
            key: "test3",
            title: "申请日期",
            type: "date"
          },
          {
            key: "test4",
            title: "活动性质",
            type: "checkbox",
            options: [
              {
                value: "1",
                label: "线上美食活动"
              },
              {
                value: "2",
                label: "线下主题活动"
              }
            ]
          },
          {
            key: "test5",
            title: "特殊资源",
            type: "radio",
            options: [
              {
                value: "1",
                label: "线上品牌商赞助"
              },
              {
                value: "2",
                label: "线下收费"
              }
            ]
          },
          {
            key: "test6",
            title: "活动时间",
            type: "date",
            dateType: "daterange"
          },
          {
            key: "test7",
            title: "是否自费",
            type: "switch"
          },
          {
            key: "test8",
            title: "活动介绍",
            type: "textarea"
          }
        ],
        params: {
          test1: "",
          test2: "",
          test3: null,
          test4: [],
          test5: "",
          test6: null,
          test7: null,
          test8: ""
        },
        rules: {
          test1: [
            { required: true, message: "请输入活动名称", trigger: "blur" },
            { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
          ],
          test2: [{ required: true, message: "请选择活动区域", trigger: "change" }],
          test3: [{ type: "date", required: true, message: "请选择活动申请日期", trigger: "change" }],
          test4: [
            { type: "array", required: true, message: "请至少选择一个活动性质", trigger: "change" }
          ],
          test5: [{ required: true, message: "请选择活动特殊资源", trigger: "change" }],
          test6: [{ type: "array", required: true, message: "请选择时间范围", trigger: "change" }],
          test7: [{ required: true, message: "请选择是否全员参与", trigger: "change" }],
          test8: [{ required: true, message: "请填写活动详细介绍", trigger: "blur" }]
        }
      }
    },
    methods:{
      submitForm() {
        this.$refs.xform.validate(valid => {
          if (valid) {
            alert("submit!");
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      resetForm() {
        this.$refs.xform.resetFields();
      }
    }
  }
</script>
`;

const code4: string = `<template>
  <x-form
    v-model="params"
    :cfgdata="formData"
    :formRules="rules"
    :columns="2"
    ref="xform"
    label-width="120px"
    size="small"
  >
    <template v-slot:test3>
      <el-input v-model="params4.test3" placeholder="请输入活动地址"></el-input>
    </template>
    <template v-slot:test4>
      <el-row>
        <el-col :span="11">
          <el-form-item prop="test4">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="params4.test4"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="test5">
            <el-time-picker
              placeholder="选择时间"
              v-model="params4.test5"
              style="width: 100%;"
            ></el-time-picker>
          </el-form-item>
        </el-col>
      </el-row>
    </template>
  </x-form>
  <div class="toolbar">
    <el-button @click="submitForm()" type="primary" size="small">立即创建</el-button>
    <el-button @click="resetForm()" size="small">重置</el-button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        formData: [
          {
            key: "test1",
            title: "活动名称",
            type: "input"
          },
          {
            key: "test2",
            title: "活动区域",
            type: "select",
            options: [
              {
                value: "1",
                label: "活动区域一"
              },
              {
                value: "2",
                label: "活动区域二"
              }
            ]
          },
          {
            key: "test3",
            title: "活动地址"
          },
          {
            key: "test4",
            title: "活动时间"
          }
        ],
        params: {
          test1: "",
          test2: "",
          test3: "",
          test4: null,
          test5: null
        },
        rules: {
          test1: [
            { required: true, message: "请输入活动名称", trigger: "blur" },
            { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
          ],
          test2: [{ required: true, message: "请选择活动区域", trigger: "change" }],
          test3: [{ required: true, message: "请填写活动地址", trigger: "blur" }]
        }
      }
    },
    methods:{
      resetForm() {
        this.$refs.xform.resetFields();
      },
      submitForm() {
        this.$refs.xform.validate(valid => {
          if (valid) {
            alert("submit!");
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
    }
  }
</script>
`;
const code5: string = `<template>
  <div style="margin-right: 40%;">
    <x-form
      v-model="params"
      :cfgdata="formData"
      :columns="2"
      ref="xform"
      size="small"
      inline
    >
    </x-form>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        formData: [
          {
            key: "test1",
            title: "活动名称",
            type: "input"
          },
          {
            key: "test2",
            title: "活动区域",
            type: "select",
            options: [
              {
                value: "1",
                label: "活动区域一"
              },
              {
                value: "2",
                label: "活动区域二"
              }
            ]
          }
        ],
        params: {
          test1: "",
          test2: ""
        }
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
  code5
};
