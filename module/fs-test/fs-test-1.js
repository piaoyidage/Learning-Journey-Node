"use strict";
/**
 * 测试读文件和写文件
 * 
 */

let fs = require("fs");

// 异步读文件
fs.readFile("./data/sample.txt", "utf-8", function(err, data){
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// 同步读文件
try {
    let data = fs.readFileSync("./data/sample.txt", "utf-8");
    console.log(data);
} catch(err){
    console.log("error");
}

// 异步写文件
let output = "hello, nodejs!";

fs.writeFile("./data/output.txt", output, function(err){
    if (err){
        console.log(err);
    } else {
        console.log("ok");
    }
});

// 同步写文件
try {
    fs.writeFileSync("./data/output.txt", output);
    console.log("ok");
} catch(err){
    console.log(err);
}

// 查看文件信息
fs.stat("./data/output.txt", function(err, data){
    if (err){
        console.log(err);
    } else{
        if (data.isFile()){
            console.log("isFile:")
            console.log(data.size);
            console.log(data.birthtime);
            console.log(data.mtime);
        }
    }
});