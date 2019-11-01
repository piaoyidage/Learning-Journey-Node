const fs = require('fs')
const path = require('path')
const http = require('http')

const MIME = {
    '.css': 'text/css',
    '.js': 'application/javascript',
}

/**
 * 合并文件
 * @param {文件路径数组} pathnames 
 * @param {回调函数} callback
 */
const combineFiles = (pathnames, callback) => {
    const output = []

    void (function next(i, len) {
        if ( i < len) {
            fs.readFile(pathnames[i].pathname, function(err, data) {
                if (err) {
                    callback(err)
                } else {
                    output.push(data)
                    next(i + 1, len)
                }
            })
        } else {
            callback(null, Buffer.concat(output))
        }
    }(0, pathnames.length))
}

/**
 * 解析路径
 * @param {*} root 
 * @param {*} url 
 */
const parseUrl = (root, url) => {
    if (url.indexOf('??') === -1) {
        url = url.replace('/', '/??')
    }

    const urlArray = url.split('??')
    console.log(urlArray)
    const basename = urlArray[0]
    const pathnames = urlArray[1].split(',').map(name => ({
        mine: MIME[path.extname(name)] || 'text/plain',
        pathname: path.join(root, basename, name)
    }))

    return pathnames
}

const main = argv => {
    const config = JSON.parse(fs.readFileSync(argv[0], 'utf-8'))
    const { root = '.', port = 8887 } = config

    http.createServer((request, response) => {
        const urlInfo = parseUrl(root, request.url)

        combineFiles(urlInfo, function(err, data) {
            if (err) {
                response.writeHead(400)
                response.end(err.message)
            } else {
                // response.write(data)
                response.writeHead(200, {
                    'Content-Type': urlInfo[0].mine,
                })
                response.end(data)
            }
        })

    }).listen(port)
}

main(process.argv.slice(2))
