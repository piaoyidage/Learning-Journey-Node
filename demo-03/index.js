/*
* @Author: maoying.hu
* @Date:   2018-09-25 19:54:14
* @Last Modified by:   maoying.hu
* @Last Modified time: 2018-09-25 19:58:23
*/

const express = require('express')
const utility = require('utility')
const app = express()

app.get('/', function(req, res) {
    const q = req.query.q
    const md5 = utility.md5(q)
    res.send(md5)
})

app.listen(3000, function() {
    console.log('app is listening at port 3000')
})
