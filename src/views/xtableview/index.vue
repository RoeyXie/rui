<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-09-16 11:42:45
 * @LastEditTime: 2020-10-20 15:45:19
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/src/views/xtableview/index.vue
-->
<template>
  <div class="xtableview">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>

    <div class="suchas">
      <examplebox :code="demo1.code" :title="demo1.title" :notes="demo1.notes">
        <template v-slot:sourse>
          <x-table :url="url" :columns="simpleColumns" :dualfuns="dualfuns" />
        </template>
        <template v-slot:description></template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo9.code" :title="demo9.title" :notes="demo9.notes">
        <template v-slot:sourse>
          <x-table ref="xtable9" :columns="simpleColumns" :default-data="defaultData" />
        </template>
        <template v-slot:description></template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo2.code" :title="demo2.title" :notes="demo2.notes">
        <template v-slot:sourse>
          <p>使用插槽方式，调用内部函数 reflashTableData(params)。</p>
          <x-table
            ref="xtable2"
            :url="url"
            :search-params="customizeForm"
            :columns="simpleColumns"
            :dualfuns="dualfuns"
          >
            <template v-slot:searchform>
              <el-form :inline="true" :model="customizeForm" size="small">
                <el-form-item label="姓名">
                  <el-input v-model="customizeForm.name" placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item label="城市">
                  <el-select v-model="customizeForm.city" placeholder="请挑选城市">
                    <el-option label="广州市" value="广州"></el-option>
                    <el-option label="上海市" value="上海"></el-option>
                    <el-option label="深圳市" value="深圳"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="search" size="small">查询</el-button>
                </el-form-item>
              </el-form>
            </template>
          </x-table>
          <hr style="margin: 40px 0" />
          <p>使用内置 x-form 表单组件，配置 searchFormCfg 与初始化查询栏数据参数 search-params</p>
          <x-table
            ref="xtable1"
            :url="url"
            :search-params="searchForm1"
            :search-form-cfg="searchFormCfg"
            :columns="simpleColumns"
            :dualfuns="dualfuns"
          />
        </template>
        <template v-slot:description></template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo3.code" :title="demo3.title" :notes="demo3.notes">
        <template v-slot:sourse>
          <x-table
            ref="xtable8"
            :url="url"
            :search-params="searchForm3"
            :search-form-cfg="searchFormCfg"
            :operate-form-cfg="operateFormCfg"
            :columns="simpleColumns"
            :dualfuns="dualfuns"
            :operates="['add', 'edit', 'check', 'delete']"
          />
        </template>
        <template v-slot:description></template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo4.code" :title="demo4.title" :notes="demo4.notes">
        <template v-slot:sourse>
          <x-table
            ref="xtable3"
            :url="url"
            :search-params="searchForm4"
            :search-form-cfg="searchFormCfg"
            :columns="fixedColumns"
            :row-class-name="tableRowClassName"
            :dualfuns="dualfuns"
            height="250"
          />
        </template>
        <template v-slot:description></template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo5.code" :title="demo5.title" :notes="demo5.notes">
        <template v-slot:sourse>
          <x-table
            ref="xtable4"
            :url="url"
            :search-params="searchForm5"
            :search-form-cfg="searchFormCfg"
            :columns="columns"
            :dualfuns="dualfuns"
          />
        </template>
        <template v-slot:description></template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo6.code" :title="demo6.title" :notes="demo6.notes">
        <template v-slot:sourse>
          <x-table
            ref="xtable5"
            :url="url"
            :search-params="searchForm6"
            :search-form-cfg="searchFormCfg"
            :columns="columns"
            :dualfuns="dualfuns"
          >
            <template slot="date" slot-scope="{ row }">
              <i class="el-icon-time"></i>
              <span> {{ row.date }} </span>
            </template>
            <template slot="city" slot-scope="{ row }">
              <el-tag size="medium">{{ row.city + "市" }}</el-tag>
            </template>
          </x-table>
        </template>
        <template v-slot:description>
          通过 <code>Scoped slot</code> 可以获取到 row, column, $index 和 store（table
          内部的状态管理）的数据，用法参考 demo。
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo7.code" :title="demo7.title" :notes="demo7.notes">
        <template v-slot:sourse>
          <p>初始选中第五条数据：</p>
          <x-table
            ref="xtable6"
            v-model="invalue7"
            :url="url"
            :search-params="searchForm7"
            :search-form-cfg="searchFormCfg"
            :columns="simpleColumns"
            :row-keys="{ id: 'id', name: 'sign_name' }"
            :dualfuns="dualfuns"
            is-single-select
          />
          <div class="demo_toolbar">
            <el-button @click="ok7" type="primary" size="small">确 定</el-button>
            <el-button @click="cancel7" size="small">清空</el-button>
          </div>
        </template>
        <template v-slot:description></template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo8.code" :title="demo8.title" :notes="demo8.notes">
        <template v-slot:sourse>
          <p>初始选中第二三条数据：</p>
          <x-table
            ref="xtable8"
            v-model="invalue8"
            :url="url"
            :search-params="searchForm8"
            :search-form-cfg="searchFormCfg"
            :columns="simpleColumns"
            :row-keys="{ id: 'id', name: 'sign_name' }"
            :dualfuns="dualfuns"
            is-multiple-select
            show-tag
          />
          <div class="demo_toolbar">
            <el-button @click="ok8" type="primary" size="small">确 定</el-button>
            <el-button @click="cancel8" size="small">清空</el-button>
          </div>
        </template>
        <template v-slot:description></template>
      </examplebox>
    </div>
    <options-table :options="options"></options-table>
  </div>
</template>

<script>
import OptionsTable from "@/components/OptionsTable";
import options from "./options.ts";
import code from "./code.ts";
const time = require("time-formater");

export default {
  name: "Xtableview",
  components: {
    OptionsTable
  },
  data() {
    return {
      title: "Table 通用表格",
      description:
        "在 ElementUI 表格的基础上集成了筛选框、表单、动态计算表格宽度、单选、多选等功能的表格",
      options: options,
      demo1: {
        title: "基础使用",
        notes: "传入查询 url 与表头 columns 生成表格。",
        code: code.code1
      },
      demo2: {
        title: "查询栏配置方式",
        notes: "提供两种方式配置查询栏。",
        code: code.code2
      },
      demo3: {
        title: "新增、修改、删除等数据操作功能",
        notes:
          '配置 operates 值包含"add"、"edit"、"check"、"delete" 可生成curd按钮。传入 operateFormCfg 配置数据可以自动生成cur表单。 当配置operateArr，需要传入对应的 operateFormCfg 表单配置数据与操作 url，否则会抛出对应的操作事件。',
        code: code.code3
      },
      demo4: {
        title: "element表格的其他属性",
        notes:
          "加在 el-table 的属性直接设置在 x-table 上，加在 el-table-cloumns 的则设置在 columns 对应的对象里",
        code: code.code4
      },
      demo5: {
        title: "多级表头",
        notes: "根据配置columns进行分组",
        code: code.code5
      },
      demo6: {
        title: "自定义列模板",
        notes: "自定义列的显示内容，可组合其他组件使用。",
        code: code.code6
      },
      demo7: {
        title: "单选表格",
        code: code.code7
      },
      demo8: {
        title: "多选表格",
        code: code.code8
      },
      demo9: {
        title: "默认数据",
        notes: "传入 default-data 则使用默认数据渲染，不接入 API。",
        code: code.code9
      },
      url: {
        searchUrl: "/getDemoTable",
        addUrl: "/inseartDemoTable",
        updateUrl: "/updateDemoTable",
        deleteUrl: "/deleteDemoTable"
      },
      searchForm1: {
        name: "",
        city: ""
      },
      searchFormCfg: [
        {
          key: "name",
          title: "姓名",
          type: "input"
        },
        {
          key: "city",
          title: "城市",
          type: "select",
          options: [
            {
              value: "广州",
              label: "广州市"
            },
            {
              value: "上海",
              label: "上海市"
            },
            {
              value: "深圳",
              label: "深圳市"
            }
          ]
        }
      ],
      dualfuns: {
        dualReceiveListData: res => {
          // 这是放置表格数据处理函数的，需要return一个值
          res.rows.forEach(item => {
            this.$set(item, "date", time(item.sign_date).format("YYYY-MM-DD"));
          });
          return res;
        }
      },
      invalue1: [],
      customizeForm: {
        name: "",
        city: ""
      },
      searchForm3: {
        name: "",
        city: ""
      },
      searchForm4: {
        name: "",
        city: ""
      },
      searchForm5: {
        name: "",
        city: ""
      },
      searchForm6: {
        name: "",
        city: ""
      },
      searchForm7: {
        name: "",
        city: ""
      },
      invalue7: {
        id: 5,
        name: "妮妮"
      },
      searchForm8: {
        name: "",
        city: ""
      },
      invalue8: [
        {
          id: 3,
          name: "陈少飞"
        },
        {
          id: 2,
          name: "郑美丽"
        }
      ],
      simpleColumns: [
        {
          key: "date",
          title: "日期",
          sort: "date"
        },
        {
          key: "sign_name",
          title: "姓名"
        },
        {
          key: "city",
          title: "城市"
        },
        {
          key: "area",
          title: "区域"
        },
        {
          key: "pre_address",
          title: "详细住址"
        }
      ],
      fixedColumns: [
        {
          key: "date",
          title: "日期",
          sort: "date",
          fixed: true,
          sortable: true
        },
        {
          key: "sign_name",
          title: "姓名"
        },
        {
          key: "city",
          title: "城市"
        },
        {
          key: "area",
          title: "区域"
        },
        {
          key: "pre_address",
          title: "目标配送住址"
        },
        {
          key: "post_code",
          title: "邮编"
        },
        {
          key: "act_address",
          title: "实际配送住址"
        }
      ],
      columns: [
        {
          key: "date",
          title: "日期",
          sort: "date"
        },
        {
          title: "配送信息",
          children: [
            {
              key: "sign_name",
              title: "姓名"
            },
            {
              key: "sign_address",
              title: "地址",
              children: [
                {
                  key: "city",
                  title: "城市"
                },
                {
                  key: "area",
                  title: "区域"
                },
                {
                  key: "pre_address",
                  title: "详细住址"
                }
              ]
            }
          ]
        }
      ],
      operateFormCfg: {
        formdata: [
          {
            key: "sign_date",
            title: "日期",
            type: "date"
          },
          {
            key: "sign_name",
            title: "姓名",
            type: "input"
          },
          {
            key: "city",
            title: "城市",
            type: "select",
            options: [
              {
                value: "广州",
                label: "广州市"
              },
              {
                value: "上海",
                label: "上海市"
              },
              {
                value: "深圳",
                label: "深圳市"
              }
            ]
          },
          {
            key: "area",
            title: "区域",
            type: "input"
          },
          {
            key: "pre_address",
            title: "详细地址",
            type: "input"
          }
        ],
        params: {
          sign_date: null,
          sign_name: "",
          city: "",
          area: "",
          pre_address: ""
        },
        columns: 2, // x-form 的columns可以数字，可以数组
        title: "投递信息", // dialog的标题名称
        lableWidth: "120px", // 新增修改的lableWidth
        dialogWidth: "50%",
        formRules: {
          sign_name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
          sign_date: [{ required: true, message: "请选择日期", trigger: "change" }],
          city: [{ required: true, message: "请选择城市", trigger: "change" }],
          area: [{ required: true, message: "请输入区域", trigger: "blur" }],
          pre_address: [{ required: true, message: "请输入详细地址", trigger: "blur" }]
        }
      },
      defaultData: [
        {
          id: 1,
          sign_date: "2016-05-02",
          sign_name: "王小虎",
          city: "广州",
          area: "天河区",
          pre_address: "广州市天河区金沙江路 1518 弄",
          act_address: "广州市天河区金沙江路 1518 弄",
          post_code: "200333",
          date: "2016-05-02"
        },
        {
          id: 2,
          sign_date: "2016-05-03",
          sign_name: "郑美丽",
          city: "广州",
          area: "白云区",
          pre_address: "广州市白云区金沙江路 1519 弄",
          act_address: "广州市白云区金沙江路 1519 弄",
          post_code: "200333",
          date: "2016-05-03"
        },
        {
          id: 3,
          sign_date: "2016-05-04",
          sign_name: "陈少飞",
          city: "广州",
          area: "白云区",
          pre_address: "广州市白云区金沙江路 1520 弄",
          act_address: "广州市白云区金沙江路 1520 弄",
          post_code: "200333",
          date: "2016-05-04"
        },
        {
          id: 4,
          sign_date: "2016-05-05",
          sign_name: "燕小六",
          city: "广州",
          area: "白云区",
          pre_address: "广州市白云区金沙江路 1521 弄",
          act_address: "广州市白云区金沙江路 1521 弄",
          post_code: "200333",
          date: "2016-05-05"
        },
        {
          id: 5,
          sign_date: "2016-05-06",
          sign_name: "妮妮",
          city: "广州",
          area: "白云区",
          pre_address: "广州市白云区金沙江路 1522 弄",
          act_address: "广州市白云区金沙江路 1522 弄",
          post_code: "200333",
          date: "2016-05-06"
        },
        {
          id: 6,
          sign_date: "2016-05-07",
          sign_name: "谢嘉欣",
          city: "上海",
          area: "普陀区",
          pre_address: "上海市普陀区金沙江路 1523 弄",
          act_address: "上海市普陀区金沙江路 1523 弄",
          post_code: "200333",
          date: "2016-05-07"
        },
        {
          id: 7,
          sign_date: "2016-05-08",
          sign_name: "陈立伦",
          city: "上海",
          area: "普陀区",
          pre_address: "上海市普陀区金沙江路 1524 弄",
          act_address: "上海市普陀区金沙江路 1524 弄",
          post_code: "200333",
          date: "2016-05-08"
        },
        {
          id: 8,
          sign_date: "2016-05-09",
          sign_name: "赵晓丽",
          city: "上海",
          area: "普陀区",
          pre_address: "上海市普陀区金沙江路 1525 弄",
          act_address: "上海市普陀区金沙江路 1525 弄",
          post_code: "200333",
          date: "2016-05-09"
        },
        {
          id: 9,
          sign_date: "2016-05-10",
          sign_name: "钱大妈",
          city: "上海",
          area: "普陀区",
          pre_address: "上海市普陀区金沙江路 1526 弄",
          act_address: "上海市普陀区金沙江路 1526 弄",
          post_code: "200333",
          date: "2016-05-10"
        },
        {
          id: 10,
          sign_date: "2016-05-11",
          sign_name: "孙飞亮",
          city: "上海",
          area: "普陀区",
          pre_address: "上海市普陀区金沙江路 1527 弄",
          act_address: "上海市普陀区金沙江路 1527 弄",
          post_code: "200333",
          date: "2016-05-11"
        },
        {
          id: 11,
          sign_date: "2016-05-12",
          sign_name: "李大爷",
          city: "上海",
          area: "普陀区",
          pre_address: "上海市普陀区金沙江路 1528 弄",
          act_address: "上海市普陀区金沙江路 1528 弄",
          post_code: "200333",
          date: "2016-05-12"
        },
        {
          id: 12,
          sign_date: "2016-05-13",
          sign_name: "周星怡",
          city: "广州",
          area: "天河区",
          pre_address: "广州市天河区金沙江路 1529 弄",
          act_address: "广州市天河区金沙江路 1529 弄",
          post_code: "200333",
          date: "2016-05-13"
        },
        {
          id: 13,
          sign_date: "2016-05-14",
          sign_name: "吴桥",
          city: "广州",
          area: "天河区",
          pre_address: "广州市天河区金沙江路 1530 弄",
          act_address: "广州市天河区金沙江路 1530 弄",
          post_code: "200333",
          date: "2016-05-14"
        },
        {
          id: 14,
          sign_date: "2016-05-15",
          sign_name: "郑华峰",
          city: "广州",
          area: "天河区",
          pre_address: "广州市天河区金沙江路 1531 弄",
          act_address: "广州市天河区金沙江路 1531 弄",
          post_code: "200333",
          date: "2016-05-15"
        },
        {
          id: 15,
          sign_date: "2016-05-16",
          sign_name: "郑大宝",
          city: "广州",
          area: "天河区",
          pre_address: "广州市天河区金沙江路 1532 弄",
          act_address: "广州市天河区金沙江路 1532 弄",
          post_code: "200333",
          date: "2016-05-16"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    ok7() {
      if (this.invalue7.id && this.invalue7.name) {
        this.$message({
          message: `当前选中数据为：${this.invalue7.name}`,
          type: "success"
        });
      } else {
        this.$message.error("请挑选数据！");
      }
    },
    cancel7() {
      this.invalue7 = {};
    },
    ok8() {
      if (this.invalue8.length > 0) {
        let selected = "";
        for (let i = 0; i < this.invalue8.length; i++) {
          selected += selected ? `、${this.invalue8[i].name}` : this.invalue8[i].name;
        }
        this.$message({
          message: `当前选中数据为：${selected}`,
          type: "success"
        });
      } else {
        this.$message.error("请挑选数据！");
      }
    },
    cancel8() {
      this.invalue8 = [];
    },
    tableRowClassName({ rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    search() {
      this.$refs.xtable2.reflashTableData();
    }
  }
};
</script>
<style lang="scss">
/* @import url() */
.demo_toolbar {
  margin: 8px;
  text-align: center;
}

.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}

.xtableview {
  padding-bottom: 200px;
  p {
    margin: 14px 0;
  }
}
</style>
