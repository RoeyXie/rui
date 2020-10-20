<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-09-17 16:11:42
 * @LastEditTime: 2020-10-20 15:45:10
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/src/views/xformview/index.vue
-->
<template>
  <div class="xformview">
    <h2>{{ title }}</h2>
    <div class="suchas">
      <examplebox :code="demo1.code" :title="demo1.title" :notes="demo1.notes">
        <template v-slot:sourse>
          <div style="margin-right: 40%;">
            <x-form
              v-model="params1"
              :cfgdata="formData1"
              ref="xform1"
              label-width="120px"
              size="small"
            >
            </x-form>
          </div>
        </template>
        <template v-slot:description></template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo2.code" :title="demo2.title" :notes="demo2.notes">
        <template v-slot:sourse>
          <x-form
            v-model="params2"
            :cfgdata="formData2"
            :columns="2"
            ref="xform2"
            label-width="120px"
            size="small"
          >
          </x-form>
        </template>
        <template v-slot:description>
          可以在 <code>cfgdata</code> 对象里单独配置 cols，以实现当前字段占多列
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo3.code" :title="demo3.title" :notes="demo3.notes">
        <template v-slot:sourse>
          <x-form
            v-model="params3"
            :cfgdata="formData3"
            :formRules="rules3"
            :columns="2"
            ref="xform3"
            label-width="120px"
            size="small"
          >
          </x-form>
          <div class="toolbar">
            <el-button @click="submitForm3()" type="primary" size="small">立即创建</el-button>
            <el-button @click="resetForm3()" size="small">重置</el-button>
          </div>
        </template>
        <template v-slot:description>
          可以在 <code>cfgdata</code> 对象里单独配置 cols，以实现当前字段占多列
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo4.code" :title="demo4.title" :notes="demo4.notes">
        <template v-slot:sourse>
          <x-form
            v-model="params4"
            :cfgdata="formData4"
            :formRules="rules4"
            :columns="[2, 2]"
            ref="xform4"
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
            <el-button @click="submitForm4()" type="primary" size="small">立即创建</el-button>
            <el-button @click="resetForm4()" size="small">重置</el-button>
          </div>
        </template>
        <template v-slot:description>
          可以在<code>cfgdata</code>对象里单独配置cols，以实现当前字段占多列
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo5.code" :title="demo5.title" :notes="demo5.notes">
        <template v-slot:sourse>
          <div style="margin-right: 40%;">
            <x-form
              v-model="params5"
              :cfgdata="formData5"
              :columns="2"
              ref="xform5"
              size="small"
              inline
            >
            </x-form>
          </div>
        </template>
      </examplebox>
    </div>

    <options-table :options="options"></options-table>
  </div>
</template>

<script>
import code from "./code.ts";
import OptionsTable from "@/components/OptionsTable";
import options from "./options.ts";

export default {
  name: "xformview",
  components: {
    OptionsTable
  },
  data() {
    return {
      options: options,
      title:"动态表单",
      demo1: {
        title: "基础使用",
        notes:
          "包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。cfgdata 参数配置字段与字段类型。",
        code: code.code1
      },
      demo2: {
        title: "设置布局",
        notes:
          "colunms 传入数字类型表示每行显示 colunms 列。传入数组类型如[1,2]则表示只有两行表单，第一行一列，第二行两列。",
        code: code.code2
      },
      demo3: {
        title: "表单验证",
        notes: "在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。",
        code: code.code3
      },
      demo4: {
        title: "其他特殊输入可以传入 slot",
        code: code.code4
      },
      demo5: {
        title: "行内表单",
        notes: "当垂直方向空间受限且表单较简单时，可以在一行内放置表单。",
        code: code.code5
      },
      formData1: [
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
      params1: {
        test1: "",
        test2: "",
        test3: null,
        test4: [],
        test5: "",
        test6: null,
        test7: null,
        test8: ""
      },
      formData2: [
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
      params2: {
        test1: "",
        test2: "",
        test3: null,
        test4: [],
        test5: "",
        test6: null,
        test7: null,
        test8: ""
      },
      formData3: [
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
      params3: {
        test1: "",
        test2: "",
        test3: null,
        test4: [],
        test5: "",
        test6: null,
        test7: null,
        test8: ""
      },
      rules3: {
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
      },
      formData4: [
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
      params4: {
        test1: "",
        test2: "",
        test3: "",
        test4: null,
        test5: null
      },
      rules4: {
        test1: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        test2: [{ required: true, message: "请选择活动区域", trigger: "change" }],
        test3: [{ required: true, message: "请填写活动地址", trigger: "blur" }]
      },
      formData5: [
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
      params5: {
        test1: "",
        test2: ""
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    submitForm3() {
      this.$refs.xform3.validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm3() {
      this.$refs.xform3.resetFields();
    },
    submitForm4() {
      this.$refs.xform4.validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm4() {
      this.$refs.xform4.resetFields();
    }
  }
};
</script>
<style lang="scss">
/* @import url() */
.xformview {
  padding-bottom: 200px;
  p {
    margin: 14px 0;
  }
}

.line {
  text-align: center;
}
</style>
