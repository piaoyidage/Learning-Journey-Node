const http = require('http')
const url = require('url')

const start = (route, handle) => {
    http.createServer((request, response) => {
        console.log('request received.')
        // 解析请求的地址
        const { pathname } = url.parse(request.url)

        let postData = ''

        request.setEncoding('utf8')

        request.addListener('data', postDataChunk => {
            postData += postDataChunk
            console.log('postDataChunk:', postDataChunk, ', postData:', postData)
        })

        request.addListener('end', () => {
            route(handle, pathname, response, postData)
        })

    }).listen(8888)

    console.log('Server has started.')
}

exports.start = start
