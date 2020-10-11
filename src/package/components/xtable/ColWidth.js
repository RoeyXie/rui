/*
 * @Author: xry
 * @Description:
 * @Date: 2020-09-17 11:28:30
 * @LastEditTime: 2020-09-17 12:03:24
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/src/package/components/xtable/ColWidth.js
 */

import { deepCopy } from "@/assets/js/common.js"
// 每列最大宽度
const MAX_WIDTH = 300;
// 每列最小宽度
const MIN_WIDTH = 90;
// 意外的值宽度
const PADDING = 30;
// 单字符宽度
const SIGNLE_WIDTH = 8;
// 双字符宽度
const DOUBLE_WIDTH = 13;

class ColWidth {
  constructor(cols = [], rows = []) {
    return this.getWidCols(cols, rows);
  }
  getWidCols(cols = [], rows = []) {
    let columns = deepCopy(cols);
    // 递归兼容多级表头
    const helper = (columns, rows) => {
      for (const item of columns) {
        if (item.children) {
          helper(item.children, rows);
        } else {
          if (item.minWidth || item.width) continue;
          let headerWid = this.getLength(item.title);
          let contentWid = this.getContentMaxWidth(rows, item.key);
          let addWidth = item.addWidth || 0;
          let calcWid = Math.max(headerWid, contentWid, MIN_WIDTH) + PADDING + addWidth; //addWid为自定义需要要增加的宽度
          item.minWidth = Math.min(calcWid, MAX_WIDTH);
        }
      }
    };

    helper(columns, rows);
    return columns;
  }
  // 获取字符串长度
  getLength(val) {
    let doubleLength = (val.match(/[^\x00-\xff]/g) && val.match(/[^\x00-\xff]/g).length) || 0;
    let singleLength = val.length - doubleLength;
    return doubleLength * DOUBLE_WIDTH + Math.round(singleLength * SIGNLE_WIDTH);
  }
  // 获取某列表格所有数据内容最大宽度
  getContentMaxWidth(rows, col) {
    if (!rows || !rows.length) {
      return 0;
    }
    let lengthArr = rows.map(item => this.getLength(item[col]));
    let maxLength = Math.max(...lengthArr);
    return maxLength;
  }
}

export default ColWidth