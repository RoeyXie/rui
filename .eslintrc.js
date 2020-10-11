/*
 * @Author: xry
 * @Description:
 * @Date: 2020-08-29 22:25:49
 * @LastEditTime: 2020-08-30 13:23:08
 * @FilePath: /Hui/rui/.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    MenuList: 'readonly'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'warn',
    'vue/no-unused-vars': 'warn',
    'no-control-regex': 'off',
    'no-prototype-builtins': 'off',
  }
};
