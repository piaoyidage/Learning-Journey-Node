/*
* @Author: maoying.hu
* @Date:   2018-09-26 16:44:15
* @Last Modified by:   maoying.hu
* @Last Modified time: 2018-09-26 19:40:25
*/

const express = require('express')
const request = require('superagent')
const cheerio = require('cheerio')

const app = express()

app.get('/', function(req, res, next) {
    request
        .get('https://book.douban.com/top250')
        .then(result => {
            // console.log(result.text)
            const $ = cheerio.load(result.text)
            const elements = []
            $('#content .pl2 > a').each((index, element) => {
                const $element = $(element)
                elements.push({
                    title: $element.attr('title'),
                    href: $element.attr('href'),
                })
            })
            res.send(elements)
        })
        .catch(err => console.log(err))
})

app.listen(3000, () => console.log('app is listening at 3000'))
