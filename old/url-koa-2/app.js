/*
* @Author: piaoyidage
* @Date:   2017-04-06 14:55:30
* @Last Modified by:   piaoyidage
* @Last Modified time: 2017-04-06 16:44:56
*/

'use strict';

const controller = require('./controller');

const Koa = require("koa");

const bodyParser = require("koa-bodyparser");

const app = new Koa();

// 在router之前注册
app.use(bodyParser());

app.use(controller());

app.listen(3000);

console.log("app started at port 3000...");
