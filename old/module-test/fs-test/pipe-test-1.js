"use strict";

let fs = require("fs");

let rs = fs.createReadStream("./data/sample.txt", "utf-8"),
    ws = fs.createWriteStream("./data/output.txt", "utf-8");
    
rs.pipe(ws);