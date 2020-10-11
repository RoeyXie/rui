/*
 * @Author: xry
 * @Description:
 * @Date: 2020-09-22 23:44:46
 * @LastEditTime: 2020-09-22 23:48:32
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/src/package/components/xtable/table.js
 */
const getColumnKeys = (column) => {
  if (!column.children) return [column.key];

  let keys = [];
  const helper = arr => {
    for (const item of arr) {
      if (item.children) helper(item.children);
      keys.push(item.key);
    }
  };
  helper(column.children);
  return keys;
}
export default getColumnKeys;
