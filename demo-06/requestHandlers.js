const querystring = require('querystring')
const fs = require('fs')
const formidable = require('formidable')

const start = response => {
    console.log('request handler start was called.')
    
    const body = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>post</title>
        </head>
        <body>
            <form action='/upload' method='post' enctype='multipart/form-data'>
                <input type='file' name='image'/>
                <input type="submit" value="submit">
            </form>
        </body>
        </html>
    `
    
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.write(body)
    response.end()
}

const upload = (response, request) => {
    console.log('request handler upload was called.')

    const form = new formidable.IncomingForm()
    form.parse(request, (err, fields, files) => {
        fs.renameSync(files.image.path, './tmp/test.png')
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write('<img src="/show" />')
        response.end()
    })
}

const show = response => {
    fs.readFile('./tmp/test.png', 'binary', (error, data) => {
        if (error) {
            response.writeHead(500)
            response.write(error)
            response.end()
        } else {
            response.writeHead(200, { 'Content-Type': 'image/png' })
            response.write(data, 'binary')
            response.end()
        }
    })
}

exports.start = start
exports.upload = upload
exports.show = show
