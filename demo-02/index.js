/*
* @Author: maoying.hu
* @Date:   2018-09-25 19:33:40
* @Last Modified by:   maoying.hu
* @Last Modified time: 2018-09-25 19:36:24
*/

const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('hello world')
})

app.listen(3000, function() {
    console.log('app is listening at port 3000')
})
