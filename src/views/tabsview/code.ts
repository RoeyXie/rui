/*
 * @Author: xry
 * @Description:
 * @Date: 2020-09-01 16:23:07
 * @LastEditTime: 2020-09-04 15:46:08
 * @FilePath: /Hui/rui/src/views/tabsview/code.ts
 */
const code1: string = `<template>
<r-tabs @click="handleClick">
  <r-tab-pane label="用户管理">用户管理</r-tab-pane>
  <r-tab-pane label="配置管理">配置管理</r-tab-pane>
  <r-tab-pane label="角色管理">角色管理</r-tab-pane>
  <r-tab-pane label="定时任务补偿">定时任务补偿</r-tab-pane>
</r-tabs>
</template>
<script>
export default {
  methods: {
    handleClick(tab) {
      console.log(tab);
    },
  }
}
</script>`;
const code2: string = `<template>
<r-tabs v-model="activeName" type="card" @click="handleClick">
  <r-tab-pane label="用户管理" name="first">用户管理</r-tab-pane>
  <r-tab-pane label="配置管理" name="second">配置管理</r-tab-pane>
  <r-tab-pane label="角色管理" name="third">角色管理</r-tab-pane>
  <r-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</r-tab-pane>
</r-tabs>
</template>
<script>
export default {
  data() {
    return {
      activeName: 'second'
    };
  },
  methods: {
    handleClick(tab) {
      console.log(tab);
    },
  }
}
</script>`;
const code3: string = `<template>
<r-tabs type="border-card">
  <r-tab-pane label="用户管理">用户管理</r-tab-pane>
  <r-tab-pane label="配置管理">配置管理</r-tab-pane>
  <r-tab-pane label="角色管理">角色管理</r-tab-pane>
  <r-tab-pane label="定时任务补偿">定时任务补偿</r-tab-pane>
</r-tabs>
</template>`;
const code4: string = `我的行程
<template>
  <r-tabs type="border-card">
    <r-tab-pane>
      <span slot="label">
        <i class="iconfont icon-riqi"></i>我的行程
      </span>我的行程
    </r-tab-pane>
    <r-tab-pane label="消息中心">消息中心</r-tab-pane>
    <r-tab-pane label="角色管理">角色管理</r-tab-pane>
    <r-tab-pane label="定时任务补偿">定时任务补偿</r-tab-pane>
  </r-tabs>
</template>`;
const code5: string = `<template>
<div style="margin-bottom: 20px;">
  <r-btn size="small" @click="addTab(editableTabsValue)">add tab</r-btn>
</div>
<r-tabs v-model="editableTabsValue" type="card">
  <r-tab-pane
    v-for="(item, index) in editableTabs"
    :key="item.name"
    :label="item.title"
    :name="item.name"
  >item.content</r-tab-pane>
</r-tabs>
</template>
<script>
export default {
  data() {
    return {
      editableTabsValue: '2',
      editableTabs: [{
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content'
      }, {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
      }],
      tabIndex: 2
    }
  },
  methods: {
    addTab(targetName) {
      let newTabName = ++this.tabIndex + '';
      this.editableTabs.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content'
      });
      this.editableTabsValue = newTabName;
    }
  }
}
</script>`;

export default {
  code1,
  code2,
  code3,
  code4,
  code5
};
