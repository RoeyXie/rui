<template>
  <div id="tabsviewapp" class="tabsviewapp">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <div class="suchas">
      <examplebox :code="demo1.code" :title="demo1.title" :notes="demo1.notes">
        <template v-slot:sourse>
          <r-tabs @click="handleClick">
            <r-tab-pane label="用户管理">用户管理</r-tab-pane>
            <r-tab-pane label="配置管理">配置管理</r-tab-pane>
            <r-tab-pane label="角色管理">角色管理</r-tab-pane>
            <r-tab-pane label="定时任务补偿">定时任务补偿</r-tab-pane>
          </r-tabs>
        </template>
        <template v-slot:description>
          <div>
            Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过
            <code>value</code> 属性来指定当前选中的标签页。
          </div>
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo2.code" :title="demo2.title" :notes="demo2.notes">
        <template v-slot:sourse>
          <r-tabs v-model="activeName2" type="card" @click="handleClick">
            <r-tab-pane label="用户管理" name="first">用户管理</r-tab-pane>
            <r-tab-pane label="配置管理" name="second">配置管理</r-tab-pane>
            <r-tab-pane label="角色管理" name="third">角色管理</r-tab-pane>
            <r-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</r-tab-pane>
          </r-tabs>
        </template>
        <template v-slot:description>
          <div>
            只需要设置 <code>type</code> 属性为 <code>card</code> 就可以使选项卡改变为标签风格。
          </div>
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo3.code" :title="demo3.title" :notes="demo3.notes">
        <template v-slot:sourse>
          <r-tabs type="border-card">
            <r-tab-pane label="用户管理">用户管理</r-tab-pane>
            <r-tab-pane label="配置管理">配置管理</r-tab-pane>
            <r-tab-pane label="角色管理">角色管理</r-tab-pane>
            <r-tab-pane label="定时任务补偿">定时任务补偿</r-tab-pane>
          </r-tabs>
        </template>
        <template v-slot:description>
          <div>将 <code>type</code> 设置为 <code></code> 。</div>
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo4.code" :title="demo4.title" :notes="demo4.notes">
        <template v-slot:sourse>
          <r-tabs type="border-card">
            <r-tab-pane>
              <span slot="label"> <i class="iconfont icon-riqi"></i> 我的行程 </span>
              我的行程
            </r-tab-pane>
            <r-tab-pane label="消息中心">消息中心</r-tab-pane>
            <r-tab-pane label="角色管理">角色管理</r-tab-pane>
            <r-tab-pane label="定时任务补偿">定时任务补偿</r-tab-pane>
          </r-tabs>
        </template>
      </examplebox>
    </div>

    <div class="suchas">
      <examplebox :code="demo5.code" :title="demo5.title" :notes="demo5.notes">
        <template v-slot:sourse>
          <div style="margin-bottom: 20px;">
            <r-btn size="small" @click="addTab(editableTabsValue)" >add tab</r-btn>
          </div>
          <r-tabs v-model="editableTabsValue" type="card" editable @tab-remove="removeTab">
            <r-tab-pane
              v-for="item in editableTabs"
              :key="item.name"
              :label="item.title"
              :name="item.name"
              >{{ item.content }}</r-tab-pane
            >
          </r-tabs>
        </template>
      </examplebox>
    </div>
  </div>
</template>

<script>
import code from "./code";

export default {
  name: "tabsview",
  data() {
    return {
      title: "Tabs 标签页",
      description: "分隔内容上有关联但属于不同类别的数据集合。",
      demo1: {
        title: "基础用法",
        notes: "基础的、简洁的标签页。",
        code: code.code1
      },
      demo2: {
        title: "选项卡样式",
        notes: "选项卡样式的标签页。",
        code: code.code2
      },
      demo3: {
        title: "卡片化",
        notes: "卡片化的标签页。",
        code: code.code3
      },
      demo4: {
        title: "自定义标签页",
        notes: "可以通过具名 slot 来实现自定义标签页的内容",
        code: code.code4
      },
      demo5: {
        title: "自定义增加标签页触发器",
        code: code.code5
      },
      activeName1: "second",
      activeName2: "first",
      editableTabsValue: "2",
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: "Tab 1 content"
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content"
        }
      ],
      tabIndex: 2,
      tabPosition: "top",
      lanble: "item.content"
    };
  },
  methods: {
    handleClick(tab) {
      console.log(tab);
    },
    addTab() {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "New Tab",
        name: newTabName,
        content: "New Tab content"
      });
      this.editableTabsValue = newTabName;
    },
    removeTab(targetName) {
      console.log(targetName)
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
    }
  }
};
</script>

<style lang="scss">
.tabsviewapp {
  padding-bottom: 200px;
  p {
    margin: 14px 0;
  }
}
</style>
