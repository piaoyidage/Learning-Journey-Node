"use strict";

let http = require("http");

let server = http.createServer(function(request, response){
    console.log(request.method + ":" + request.url);
    response.writeHead(200, {"Content-Type":"text/html"});
    response.end("<h1>hello world</h1>");
});

server.listen(8080);

console.log("Server is running at 127.0.0.0:8080...");