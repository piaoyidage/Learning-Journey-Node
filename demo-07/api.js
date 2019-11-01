// 文件 api 走马观花


/**
 * Buffer 数据块
 */
const buffer = Buffer.alloc(6, 'hello')
console.log(buffer)

const buf = buffer.slice(2)

console.log(buf)
console.log(buf.toString())

const dstBuf = Buffer.alloc(buffer.length)
buffer.copy(dstBuf)
console.log(dstBuf)


/**
 * Stream 数据流
 */

const http = require('http')

const server = http.createServer((req, res) => {
    req.setEncoding('utf8')

    let body = ''

    req.on('data', chunk => {
        body += chunk
    })

    req.on('end', () => {
        try {
            const data = JSON.parse(body)
            res.write(typeof data)
            res.end()
        } catch (e) {
            res.statusCode = 400
            return res.end(`error: ${e.message}`)
        }
    })
})

// server.listen('8888')

/**
 * File System 文件系统
 */

const fs = require('fs')

 /**
  * Path 路径
  */

const path = require('path')
console.log(path.join('hello/', 'world', 'hi', '.'))
console.log(path.join('hello/', 'world', 'hi', '..'))

// 深度优先同步扫描文件
const travel = (dirname, callback) => {
    fs.readdirSync(dirname).forEach(dir => {
        const pathname = path.join(dirname, dir)
        if(fs.statSync(pathname).isDirectory()) {
            travel(pathname, callback)
        } else {
            callback(pathname)
        }
    })
}

// travel('/Users/huge/Documents/github/Learning-Journey-Node/old', filename => console.log(filename))

/**
 * url
 */
const url = require('url')
console.log(url.parse('http://nqdeng.github.io/7-days-nodejs/#4.2.3'))

/**
 * querystring
 */
const querystring = require('querystring')
console.log(querystring.parse('a=1&b=2'))
console.log(querystring.stringify({a: 1, b: 2}))