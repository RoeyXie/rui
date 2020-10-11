/*
 * @Author: Hang
 * @Date: 2020-07-11 22:43:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-10-11 15:32:55
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/vue.config.js
 * @Description: 暂无描述
 */
const { spawn } = require('child_process');
const path = require('path');
function resolve(dir) {
  return path.resolve(__dirname, dir);
}

const alias = {
  '@': resolve('src')
};

//开发环境配置
const devConfig = {
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    proxy: {
      '/local': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '^/local': ''
        },
        changeOrigin: true,
        secure: false
      }
    }
  }
};

const prodConfig = {
  publicPath: './',
  outputDir: path.resolve(__dirname, 'node/assets')
};

const isDev = process.env.NODE_ENV === 'development';

// 开发环境下，开启本地服务
if (isDev) {
  spawn('npm', ['start'], { cwd: 'node', stdio: 'inherit' });
}
module.exports = isDev ? devConfig : prodConfig
