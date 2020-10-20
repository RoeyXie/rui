<!--
 * @Author: xry
 * @Description:
 * @Date: 2020-09-04 19:43:26
 * @LastEditTime: 2020-10-20 15:42:16
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/src/views/calendarview/index.vue
-->
<template>
  <div class="calendarviewapp">
    <h2>Calendar 日历</h2>
    <p>显示日期</p>
    <h3>基础用法</h3>
    <div class="suchas">
      <examplebox>
        <template v-slot:sourse>
          <r-calendar v-model="value"></r-calendar>
        </template>
        <template v-slot:description></template>
        <template v-slot:highlight></template>
      </examplebox>
    </div>
  </div>
</template>
<script>
export default {
  name: "calendarview",
  data() {
    return { value: new Date() };
  }
};
</script>

<style lang="scss">
.calendarviewapp {
  padding-bottom: 200px;
  p {
    margin: 14px 0;
  }
}
</style>
