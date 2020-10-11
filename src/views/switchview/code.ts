/*
 * @Author: xry
 * @Description:
 * @Date: 2020-09-01 16:23:07
 * @LastEditTime: 2020-09-02 19:10:54
 * @FilePath: /Hui/rui/src/views/switchview/code.ts
 */
const code1: string = `<r-switch
  v-model="value"
  active-color="#13ce66"
  inactive-color="#ff4949">
</r-switch>

<script>
export default {
  data() {
    return {
      value: true
    }
  }
}
</script>`;
const code2: string = `<r-switch
  v-model="value1"
  active-text="按月付费"
  inactive-text="按年付费">
</r-switch>

<r-switch
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-text="按月付费"
  inactive-text="按年付费">
</r-switch>

<script>
export default {
  data() {
    return {
      value1: true,
      value2: true
    }
  }
}
</script>`;
const code3: string = `<r-switch
  v-model="value"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-value="0"
  inactive-value="100">
</r-switch>

<script>
export default {
  data() {
    return {
      value: "0"
    }
  }
}
</script>`;
const code4: string = `<r-switch
  v-model="value1"
  active-color="#13ce66"
  inactive-color="#ff4949"
  disabled>
</r-switch>

<r-switch
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949"
  disabled>
</r-switch>

<script>
export default {
  data() {
    return {
      value1: true,
      value2: false
    }
  }
}
</script>`;

export default {
  code1,
  code2,
  code3,
  code4
};
