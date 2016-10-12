"use strict";

// 测试path

let path = require("path");

let workDir = path.resolve(".");

let fileName = path.join(workDir, "huge", "index.html");

console.log(fileName);
