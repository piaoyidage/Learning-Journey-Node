"use strict";

let fs = require("fs");

// 文件流读取
let rs = fs.createReadStream("./data/sample.txt", "utf-8");

rs.on("data", function(chunk){
    console.log("data:");
    console.log(chunk);
});

rs.on("end", function(){
    console.log("end");
});

rs.on("error", function(err){
    console.log("error:" + err);
});

// 文件流写入
let ws = fs.createWriteStream("./data/output.txt", "utf-8");
ws.write("hello, nodejs...");
ws.write("welcome to learn nodejs!");
ws.end();