/*
* @Author: maoying.hu
* @Date:   2018-08-23 17:27:08
* @Last Modified by:   maoying.hu
* @Last Modified time: 2018-08-23 17:39:54
*/


const http = require('http')

const hostname = '127.0.0.1'
const port = '3000'

const server = http.createServer((req, res) => {
	// statusCode 改成 404，302 等试试
	res.statusCode = 302
	res.setHeader('Content-Type', 'text/plain')
	res.end('Hello World\n')
})

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`)
})
