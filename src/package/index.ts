/*
 * @Author: xry
 * @Description:
 * @Date: 2020-08-30 16:17:27
 * @LastEditTime: 2020-09-27 10:13:38
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/src/package/index.ts
 */
// 图标字体
import "./font/iconfont.css";

// 组件
import Alter from "./components/alter/Alter.vue";
import Breadcrumb from "./components/breadcrumb/Breadcrumb.vue";
import BreadcrumbItem from "./components/breadcrumb/BreadcrumbItem.vue";
import Button from "./components/button/Button.vue";
import ButtonGroup from "./components/button/ButtonGroup.vue";
import Calendar from "./components/calendar/Calendar.vue";
import Card from "./components/card/Card.vue";
import Checkbox from "./components/checkbox/Checkbox.vue";
import CheckboxButton from "./components/checkbox/CheckboxButton.vue";
import CheckboxGroup from "./components/checkbox/CheckboxGroup.vue";
import Col from "./components/col/Col.vue";
import Divider from "./components/divider/Divider.vue";
import Input from "./components/input/Input.vue";
import InputNumber from "./components/inputnumber/InputNumber.vue";
import Link from "./components/link/Link.vue";
import Progress from "./components/progress/Progress.vue";
import Radio from "./components/radio/Radio.vue";
import RadioButton from "./components/radio/RadioButton.vue";
import RadioGroup from "./components/radio/RadioGroup.vue";
import Rate from "./components/rate/Rate.vue";
import Row from "./components/row/Row.vue";
import Steps from "./components/step/Steps.vue";
import Step from "./components/step/Step.vue";
import Switch from "./components/switch/Switch.vue";
import Tabs from "./components/tabs/Tabs.vue";
import TabPane from "./components/tabs/TabPane.vue";
import Tag from "./components/tag/Tag.vue";
import TimelineItem from "./components/timeline/TimeLineItem.vue";
import Timeline from "./components/timeline/TimeLine.vue";
import XTable from "./components/xtable/XTable.vue";
import XForm from "./components/xform/XForm.vue";
import RHideScroll from "./components/hidescroll/RHideScroll.vue";
import RScroll from "./components/scroll/RScroll.vue";
import RContent from "./components/content/RContent.vue";

// 调用
import Msg from "./components/message/message";
import Ntf from "./components/notification/notification";

const HUI = {
  install(Vue: any) {
    Vue.prototype.$msg = Msg;
    Vue.prototype.$ntf = Ntf;

    Vue.component(Alter.name, Alter);
    Vue.component(Breadcrumb.name, Breadcrumb);
    Vue.component(BreadcrumbItem.name, BreadcrumbItem);
    Vue.component(Button.name, Button);
    Vue.component(ButtonGroup.name, ButtonGroup);
    Vue.component(Calendar.name, Calendar);
    Vue.component(Card.name, Card);
    Vue.component(Checkbox.name, Checkbox);
    Vue.component(CheckboxButton.name, CheckboxButton);
    Vue.component(CheckboxGroup.name, CheckboxGroup);
    Vue.component(Col.name, Col);
    Vue.component(Divider.name, Divider);
    Vue.component(Input.name, Input);
    Vue.component(InputNumber.name, InputNumber);
    Vue.component(Link.name, Link);
    Vue.component(Progress.name, Progress);
    Vue.component(Radio.name, Radio);
    Vue.component(RadioButton.name, RadioButton);
    Vue.component(RadioGroup.name, RadioGroup);
    Vue.component(Rate.name, Rate);
    Vue.component(Row.name, Row);
    Vue.component(Steps.name, Steps);
    Vue.component(Step.name, Step);
    Vue.component(Switch.name, Switch);
    Vue.component(Tabs.name, Tabs);
    Vue.component(TabPane.name, TabPane);
    Vue.component(Tag.name, Tag);
    Vue.component(TimelineItem.name, TimelineItem);
    Vue.component(Timeline.name, Timeline);
    Vue.component(XTable.name, XTable);
    Vue.component(XForm.name, XForm);
    Vue.component(RHideScroll.name, RHideScroll);
    Vue.component(RScroll.name, RScroll);
    Vue.component(RContent.name, RContent);
  }
};

export default HUI;
