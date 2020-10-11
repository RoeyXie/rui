/*
 * @Author: Hang
 * @Date: 2020-07-13 13:20:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-21 17:32:52
 * @FilePath: /dev2/Users/roey/Desktop/Hui/rui/node/router/routes/table.js
 * @Description: 表格接口
 */

const sql = require('../../sql');
const fs = require('fs');
const path = require('path');
const { getParams, check } = require('../../common');

const getSlicesRows = (rows, page, size) => {
  const start = (page - 1) * size;
  const end = page * size;
  return rows.slice(start, end);
};

const getUserTable = (req, res) => {
  const { userName, city } = getParams(req);
  if (userName) {
    sql.select("pro_user", [{ key: "userName", value: userName, condition: "like" }]).then(rows => {
      const results = {
        code: 200,
        msg: "ok",
        data: rows[0] || {}
      }
      res.writeHead(200, { 'Content-Type': `application/json;charset="utf-8"` });
      res.end(JSON.stringify(results));
    });
  }
  else {
    const results = {
      code: 404,
      msg: "暂无数据"
    }
    res.writeHead(200, { 'Content-Type': `application/json;charset="utf-8"` });
    res.end(JSON.stringify(results))
  }
};

const inseatUser = (req, res) => {
  const { userName } = req.body
  if (userName) {
    sql.insert("pro_user", { userName }).then(() => {
      const results = {
        code: 200,
        msg: "ok"
      }
      res.writeHead(200, { 'Content-Type': `application/json;charset="utf-8"` });
      res.end(JSON.stringify(results));
    });
  }
  else {
    const results = {
      code: 404,
      msg: "传入数据为空请重新核对"
    }
    res.writeHead(200, { 'Content-Type': `application/json;charset="utf-8"` });
    res.end(JSON.stringify(results))
  }
};


const getDemoTable = (req, res) => {
  const { name, city, page, size } = getParams(req);
  let params = []
  if (name) params.push({ key: "sign_name", value: name, condition: "like" })
  if (city) params.push({ key: "city", value: city })
  params = params.length > 0 ? params : {}
  sql.select("demo_table", params).then(rows => {
    let data = {};
    if (!page || !size) {
      data = rows;
    } else {
      data = { rows: getSlicesRows(rows, page, size), total: rows.length };
    }
    const results = {
      code: 200,
      msg: "ok",
      data
    }
    res.writeHead(200, { 'Content-Type': `application/json;charset="utf-8"` });
    res.end(JSON.stringify(results));
  });
};

const inseartDemoTable = (req, res) => {
  const { sign_date, sign_name, city, area, pre_address } = req.body
  if (sign_date && sign_name && city && area && pre_address) {
    sql.insert("demo_table", { sign_date, sign_name, city, area, pre_address }).then(() => {
      const results = {
        code: 200,
        msg: "ok"
      }
      res.writeHead(200, { 'Content-Type': `application/json;charset="utf-8"` });
      res.end(JSON.stringify(results));
    });
  }
  else {
    const results = {
      code: 404,
      msg: "传入数据错误，请重新核对"
    }
    res.writeHead(200, { 'Content-Type': `application/json;charset="utf-8"` });
    res.end(JSON.stringify(results))
  }
};

const updateDemoTable = (req, res) => {
  const { sign_date, sign_name, city, area, pre_address, id } = req.body
  if (sign_date && sign_name && city && area && pre_address && id) {
    sql.update("demo_table", { sign_date, sign_name, city, area, pre_address, id }, "id").then(() => {
      const results = {
        code: 200,
        msg: "ok"
      }
      res.writeHead(200, { 'Content-Type': `application/json;charset="utf-8"` });
      res.end(JSON.stringify(results));
    });
  }
  else {
    const results = {
      code: 404,
      msg: "传入数据错误，请重新核对"
    }
    res.writeHead(200, { 'Content-Type': `application/json;charset="utf-8"` });
    res.end(JSON.stringify(results))
  }
};

const deleteDemoTable = (req, res) => {
  const { id } = req.body
  if (id) {
    sql.delete("demo_table", id, "id").then(() => {
      const results = {
        code: 200,
        msg: "ok"
      }
      res.writeHead(200, { 'Content-Type': `application/json;charset="utf-8"` });
      res.end(JSON.stringify(results));
    });
  }
  else {
    const results = {
      code: 404,
      msg: "传入数据错误，请重新核对"
    }
    res.writeHead(200, { 'Content-Type': `application/json;charset="utf-8"` });
    res.end(JSON.stringify(results))
  }
};

module.exports = {
  '/getUserTable': getUserTable,
  '/inseatUser': inseatUser,
  '/getDemoTable': getDemoTable,
  "/inseartDemoTable": inseartDemoTable,
  "/updateDemoTable": updateDemoTable,
  "/deleteDemoTable": deleteDemoTable
};
