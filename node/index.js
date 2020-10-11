/*
 * @Author: xry
 * @Description:
 * @Date: 2020-09-15 11:54:35
 * @LastEditTime: 2020-09-15 16:45:32
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/node/index.js
 */
const express = require("express");
const app = express();
const extend = require("./extend");
extend();
const router = require("./router");
router(app);
const colors = require("colors");

// GET/POST测试
// app.get('/login', (req, res) => {
//   res.sendFile(__dirname + "/static/login.html");
// })

const server = app.listen(3000, "0.0.0.0", () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`本机后台服务已开启:http://${host}:${port}`.green);
});
