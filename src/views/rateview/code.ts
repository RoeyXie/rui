/*
 * @Author: xry
 * @Description:
 * @Date: 2020-09-01 16:23:07
 * @LastEditTime: 2020-09-03 15:06:15
 * @FilePath: /Hui/rui/src/views/rateview/code.ts
 */
const code1: string = `<div class="block">
<span class="demonstration">
  <r-rate v-model="value1"></r-rate>
</span>
</div>

<div class="block">
<span class="demonstration">
  <r-rate
    v-model="value2"
    :colors="colors">
  </r-rate>
</span>
</div>

<script>
export default {
  data() {
    return {
      value1: null
      value2: null
      colors: ['#99A9BF', '#F7BA2A', '#FF9900']// 等同于 { 2: '#99A9BF', 3: '#F7BA2A', 5: '#FF9900' }
    }
  }
}
</script>`;
const code2: string = `<div class="demoshu">
<span class="demonstration">
  <r-rate
    v-model="value1"
    show-text>
  </r-rate>
</span>
</div>

<div class="demoshu">
<span class="demonstration">
  <r-rate
    v-model="value2"
    show-text
    :texts="texts"
    text-color="#F7BA2A">
  </r-rate>
</span>
</div>

<script>
export default {
  data() {
    return {
      value1: null
      value2: null
      texts: ['D', 'C', 'B', 'A', 'S']
    }
  }
}
</script>`;
const code3: string = `<r-rate
  v-model="value"
  :icon-classes="iconClasses"
  void-icon-class="icon-icon_xiaolian-xian"
  :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
</r-rate>

<script>
export default {
  data() {
    return {
      value: null
      iconClasses: ['icon-icon_ku-mian','icon-icon_xiaolian-mian','icon-biaoqing2']
      // 等同于 { 2: 'icon-icon_ku-mian', 3: 'icon-icon_xiaolian-mian', 5: 'icon-biaoqing2' }
    }
  }
}
</script>`;
const code4: string = `<div class="block">
<span class="demonstration">
  <r-rate
    v-model="value1"
    disabled
    show-score>
  </r-rate>
</span>
</div>

<div class="block">
<span class="demonstration">
  <r-rate
    v-model="value2"
    :colors="colors"
    text-color="#ff9900"
    score-template="您所选中的是:{value}星"
    disabled
    show-score>
  </r-rate>
</span>
</div>

<script>
export default {
  data() {
    return {
      value1: 2
      value2: 4
      colors: ['#99A9BF', '#F7BA2A', '#FF9900']
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
