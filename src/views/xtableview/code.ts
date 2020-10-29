const str: string = "`当前选中数据为：${this.invalue.name}`";

const code1: string = `
<template>
  <x-table :url="url" :columns="columns" />
</template>

<script>
  export default {
    data(){
      return {
        url: {
          searchUrl: "/local/getDemoTable"
        },
        columns: [
          {
            key: "date",
            title: "日期"
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
        ]
      }
    }
  }
</script>
`;

const code2: string = `<template>
  <p>使用插槽方式，调用内部函数 reflashTableData(params)。</p>
  <x-table
    ref="xtable"
    :url="url"
    :columns="columns"
    :search-params="customizeForm"
  >
    <template #searchform>
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
  <hr style="margin: 40px 0">
  <p>使用内置 x-form 表单组件，配置 searchFormCfg 与初始化查询栏数据参数 search-params</p>
  <x-table
    :url="url"
    :columns="columns"
    :search-params="searchForm"
    :search-form-cfg="searchFormCfg"
  />
</template>

<script>
  export default {
    data(){
      return {
        url: {
          searchUrl: "/local/getDemoTable"
        },
        columns: [
          {
            key: "date",
            title: "日期"
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
        customizeForm: {
          name: "",
          city: ""
        },
        searchForm: {
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
        ]
      }
    },
    methods:{
      search() {
        this.$refs.xtable.reflashTableData();
      }
    }
  }
</script>`;

const code3: string = `<template>
  <x-table
    :url="url"
    :search-params="searchForm"
    :search-form-cfg="searchFormCfg"
    :operate-form-cfg="operateFormCfg"
    :columns="columns"
    :operates="['add', 'edit', 'check', 'delete']"
  />
</template>

<script>
export default {
  data(){
    return {
      url: {
        searchUrl: "/local/getDemoTable",
        addUrl: "/local/inseartDemoTable",
        updateUrl: "/local/updateDemoTable",
        deleteUrl:"/local/deleteDemoTable"
      },
      columns: [
        {
          key: "date",
          title: "日期"
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
      searchForm: {
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
        ], // 新增修改查询表单参数配置
        params: {
          sign_date: null,
          sign_name: "",
          city: "",
          area: "",
          pre_address: ""
        }, // 表单初始化值
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
        } // 验证规则
      }
    }
  }
}
</script>`;

const code4: string = `<template>
  <x-table
    :url="url"
    :search-params="searchForm"
    :search-form-cfg="searchFormCfg"
    :columns="columns"
    :row-class-name="tableRowClassName"
    height="250"
  />
</template>

<script>
export default {
  data(){
    return {
      url: {
        searchUrl: "/local/getDemoTable"
      },
      searchForm: {
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
      columns: [
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
    }
  },
  methods:{
    tableRowClassName({ rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
  }
}
</script>`;

const code5: string = `<template>
  <x-table
    :url="url"
    :search-params="searchForm"
    :search-form-cfg="searchFormCfg"
    :columns="columns"
  />
</template>

<script>
export default {
  data(){
    return {
      url: {
        searchUrl: "/local/getDemoTable"
      },
      searchForm: {
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
      ]
    }
  }
}
</script>`;

const code6: string = `<template>
  <x-table
    :url="url"
    :search-params="searchForm"
    :search-form-cfg="searchFormCfg"
    :columns="columns"
  >
    <template #date="{ row }">
      <i class="el-icon-time"></i>
      <span> {{ row.date }} </span>
    </template>
    <template #city="{ row }">
      <el-tag size="medium">{{ row.city + "市" }}</el-tag>
    </template>
  </x-table>
</template>

<script>
export default {
  data(){
    return {
      url: {
        searchUrl: "/local/getDemoTable"
      },
      searchForm: {
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
      ]
    }
  }
}
</script>`;

const code7: string = `<template>
  <p>初始选中第五条数据：</p>
    <x-table
      v-model="invalue"
      :url="url"
      :search-params="searchForm"
      :search-form-cfg="searchFormCfg"
      :columns="columns"
      :row-keys="{ id: 'id', name: 'sign_name' }"
      is-single-select
    />
    <div class="demo_toolbar">
      <el-button @click="ok" type="primary" size="small">确 定</el-button>
      <el-button @click="cancel" size="small">清空</el-button>
    </div>
</template>

<script>
export default {
  data(){
    return {
      url: {
        searchUrl: "/local/getDemoTable"
      },
      searchForm: {
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
      columns: [
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
      invalue: {
        id: 5,
        name: "妮妮"
      },
    }
  },
  methods:{
    ok() {
      if (this.invalue.id && this.invalue.name) {
        this.$message({
          message: ${str},
          type: "success"
        });
      } else {
        this.$message.error("请挑选数据！");
      }
    },
    cancel() {
      this.invalue = {};
    },
  }
}
</script>`;

const str1 = "、${this.invalue[i].name}";
const str2 = "`当前选中数据为：${selected}`";
const code8: string = `<template>
  <p>初始选中第二三条数据：</p>
    <x-table
      v-model="invalue"
      :url="url"
      :search-params="searchForm"
      :search-form-cfg="searchFormCfg"
      :columns="columns"
      :row-keys="{ id: 'id', name: 'sign_name' }"
      is-multiple-select
      show-tag
    />
    <div class="demo_toolbar">
      <el-button @click="ok" type="primary" size="small">确 定</el-button>
      <el-button @click="cancel" size="small">清 空</el-button>
    </div>
</template>

<script>
export default {
  data(){
    return {
      url: {
        searchUrl: "/local/getDemoTable"
      },
      searchForm: {
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
      columns: [
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
      invalue: [
        {
          id: 3,
          name: "陈少飞"
        },
        {
          id: 2,
          name: "郑美丽"
        }
      ],
    }
  },
  methods:{
    ok() {
      if (this.invalue.length > 0) {
        let selected = "";
        for (let i = 0; i < this.invalue.length; i++) {
          selected += selected ? ${str1} : this.invalue[i].name;
        }
        this.$message({
          message: ${str2},
          type: "success"
        });
      } else {
        this.$message.error("请挑选数据！");
      }
    },
    cancel() {
      this.invalue = [];
    },
  }
}
</script>`;

const code9: string = `
<template>
  <x-table
    :default-data="defaultData"
    :columns="columns"
  />
</template>

<script>
  export default {
    data(){
      return {
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
        ],
        columns: [
          {
            key: "date",
            title: "日期"
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
        ]
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
  code9
};
