const server = require('./server.js')
const router = require('./router.js')
const requestHandlers = require('./requestHandlers.js')

// 不同的请求映射到不同的请求处理函数
const handle = {}
handle['/'] = requestHandlers.start
handle['/start'] = requestHandlers.start
handle['/upload'] = requestHandlers.upload

server.start(router.route, handle)
