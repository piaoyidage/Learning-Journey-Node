/*
* @Author: maoying.hu
* @Date:   2018-09-26 17:46:33
* @Last Modified by:   maoying.hu
* @Last Modified time: 2018-09-26 19:39:08
*/

const request = require('superagent')
const cheerio = require('cheerio')
const eventproxy = require('eventproxy')

const ep = new eventproxy()

const bookUrl = 'https://book.douban.com/top250'
const top50Books = []

request
    .get(bookUrl)
    .then(result => {
        const $ = cheerio.load(result.text)
        $('#content .pl2 > a').each((index, element) => {
            const $element = $(element)
            top50Books.push({
                title: $element.attr('title'),
                href: $element.attr('href'),
            })
        })

        ep.after('books', top50Books.length, books => (
            console.log('books', books)
        ))

        top50Books.forEach(element => (
            request
                .get(element.href)
                .then(result => {
                    console.log(`请求 ${element.href} 成功...`)
                    const $ = cheerio.load(result.text)
                    // console.log($('#comments .short').first().text())
                    element.comment = $('#comments .short').first().text()
                    ep.emit('books', element)
                })
        ))

    })
    .catch(err => console.log(err))


