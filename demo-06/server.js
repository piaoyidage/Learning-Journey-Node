const http = require('http')

const start = () => {
    http.createServer((request, response) => {
        console.log('request received.')
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        response.write('Hello World')
        response.end()
    }).listen(8888)

    console.log('Server has started.')
}

exports.start = start
