const route = (handle, pathname, response, request) => {
    console.log('About to route a request for', pathname)
    if (typeof handle[pathname] === 'function') {
        return handle[pathname](response, request)
    } else {
        console.log('No request handler for', pathname)
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        response.write('404')
        response.end()
    }
}

exports.route = route
