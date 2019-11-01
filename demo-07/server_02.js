const path = require('path')
const fs = require('fs')
const http = require('http')

const MIME = {
    '.css': 'text/css',
    '.js': 'application/javascript',
}

const validateFiles = (pathnames, callback) => {
    (function next(i, len) {
        if (i < len) {
            fs.stat(pathnames[i].pathname, function(err, stats) {
                if (err) {
                    callback(err)
                } else if (!stats.isFile()) {
                    callback(new Error())
                } else {
                    next(i + 1, len)
                }
            })
        } else {
            callback(null, pathnames)
        }
    }(0, pathnames.length))
}

const outputFiles = (pathnames, writer) => {
    (function next(i, len){
        if (i < len) {
            const readStream = fs.createReadStream(pathnames[i].pathname)
            readStream.pipe(writer, { end: false })
            readStream.on('end', () => {
                next(i + 1, len)
            })
            
        } else {
            writer.end()
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

    const server = http.createServer((request, response) => {
        const urlInfo = parseUrl(root, request.url)
        console.log(urlInfo)

        validateFiles(urlInfo, function(err, data) {
            if (err) {
                response.writeHead(400)
                response.end(err.message)
            } else {
                response.writeHead(200, {
                    'Content-Type': urlInfo[0].mine,
                })
                outputFiles(urlInfo, response)
            }
        })

    }).listen(port)

    process.on('SIGTERM', () => {
        server.close(() => {
            process.exit(0)
        })
    })
}

main(process.argv.slice(2))