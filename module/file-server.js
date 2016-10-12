"use strict";

/**
 * 模拟文件服务器
 */

let http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs");

// 从命令行输入参数
let root = path.resolve(process.argv[2] || ".");

console.log("static file root:" + root);

let server = http.createServer(function(request, response){
    let pathName = url.parse(request.url).pathname;
    let fileName = path.join(root, pathName);
    fs.stat(fileName, function(err, data){
        if(!err && data.isFile()){
            console.log("200:" + request.url);
            response.writeHead(200);
            fs.createReadStream(fileName).pipe(response);
        }else {
            console.log("404");
            response.writeHead(404);
            response.end("404 Not Found");
        }
    });
});

server.listen("8080");

console.log("server is running at 127.0.0.1:8080...");