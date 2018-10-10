const http = require('http')
const url = require('url')

const start = route => {
    http.createServer((request, response) => {
        console.log('request received.')
        // 解析请求的地址
        const { pathname } = url.parse(request.url)
        // console.log('pathname:', pathname)
        // 根据url映射到不同的处理逻辑
        route(pathname)

        response.writeHead(200, { 'Content-Type': 'text/plain' })
        response.write('Hello World')
        response.end()
    }).listen(8888)

    console.log('Server has started.')
}

exports.start = start
