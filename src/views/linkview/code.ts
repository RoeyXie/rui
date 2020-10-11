/*
 * @Author: xry
 * @Description:
 * @Date: 2020-08-31 18:40:27
 * @LastEditTime: 2020-08-31 18:43:15
 * @FilePath: /Hui/rui/src/views/linkview/code.ts
 */
const code1: string = `<div>
  <r-link href="https://element.eleme.io" target="_blank">默认链接</r-link>
  <r-link href="https://element.eleme.io" type="primary">主要链接</r-link>
  <r-link type="success">成功链接</r-link>
  <r-link type="warning">警告链接</r-link>
  <r-link type="danger">危险链接</r-link>
  <r-link type="info">信息链接</r-link>
</div>`;

const code2: string = `<div>
  <r-link href="https://element.eleme.io" disabled>默认链接</r-link>
  <r-link type="primary" href="https://element.eleme.io" disabled>主要链接</r-link>
  <r-link type="success" disabled>成功链接</r-link>
  <r-link type="warning" disabled>警告链接</r-link>
  <r-link type="danger" disabled>危险链接</r-link>
  <r-link type="info" disabled>信息链接</r-link>
</div>`;

const code3: string = `<div>
  <r-link :underline="false">无下划线</r-link>
  <r-link>有下划线</r-link>
</div>`;

const code4: string = `<div>
  <r-link icon="iconfont icon-bianji">编辑</r-link>
  <r-link>查看<i class="iconfont icon-eye"></i></r-link>
</div>`;

export default {
  code1,
  code2,
  code3,
  code4
};
