/*
 * @Author: xry
 * @Description:
 * @Date: 2020-09-02 18:31:59
 * @LastEditTime: 2020-09-02 18:39:31
 * @FilePath: /Hui/rui/src/views/inputNumberview/code.ts
 */
const code1: string = `<template>
  <r-input-number v-model="num" label="描述内容" @change="handleChange" :min="1" :max="1"></r-input-number>
</template>

<script>
export default {
  data() {
    return {
      num: 1
    },
  methods: {
     handleChange(value) {
      console.log(value);
    }
  }
}
</script>
`;
const code2: string = `<template>
  <r-input-number v-model="num" @change="handleChange" disabled></r-input-number>
</template>

<script>
export default {
  data() {
    return {
      num: 1
    },
  methods: {
     handleChange(value) {
      console.log(value);
    }
  }
}
</script>
`;
const code3: string = `<template>
  <r-input-number v-model="num" @change="handleChange" :step="2"></r-input-number>
</template>

<script>
export default {
  data() {
    return {
      num: 1
    },
  methods: {
     handleChange(value) {
      console.log(value);
    }
  }
}
</script>
`;
const code4: string = `<template>
  <r-input-number v-model="num" @change="handleChange" :step="2"  step-strictly></r-input-number>
</template>

<script>
export default {
  data() {
    return {
      num: 1
    },
  methods: {
     handleChange(value) {
      console.log(value);
    }
  }
}
</script>
`;
const code5: string = `<template>
  <r-input-number v-model="num" @change="handleChange" :step="0.03" :precision="2"  step-strictly></r-input-number>
</template>

<script>
export default {
  data() {
    return {
      num: 1
    },
  methods: {
     handleChange(value) {
      console.log(value);
    }
  }
}
</script>
`;
const code6: string = `<template>
  <r-input-number v-model="num1" @change="handleChange"></r-input-number>
  <r-input-number v-model="num2" @change="handleChange" size="medium"></r-input-number>
  <r-input-number v-model="num3" @change="handleChange" size="small"></r-input-number>
  <r-input-number v-model="num4" @change="handleChange" size="mini"></r-input-number>
</template>

<script>
export default {
  data() {
    return {
      num1: 1
      num2: 1
      num3: 1
      num4: 1
    },
  methods: {
     handleChange(value) {
      console.log(value);
    }
  }
}
</script>
`;
const code7: string = `<template>
  <r-input-number v-model="num1" controls-position="right" :min="1" :max="10"></r-input-number>
  <r-input-number v-model="num2" controls-position="right" :min="1" :max="10"  size="medium" ></r-input-number>
  <r-input-number v-model="num3" controls-position="right" :min="1" :max="10"  size="small" ></r-input-number>
  <r-input-number v-model="num4" controls-position="right" :min="1" :max="10"  size="mini" ></r-input-number>
</template>

<script>
export default {
  data() {
    return {
      num1: 1
      num2: 1
      num3: 1
      num4: 1
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
  code7
};
