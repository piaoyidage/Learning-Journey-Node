const querystring = require('querystring')

const start = response => {
    console.log('request handler start was called.')
    
    const body = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>post</title>
        </head>
        <body>
            <form action='/upload' method='post'>
                <textarea name='text' rows='20' cols='60'></textarea>
                <input type="submit" value="submit">
            </form>
        </body>
        </html>
    `
    
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.write(body)
    response.end()
}

const upload = (response, postData) => {
    console.log('request handler upload was called.')
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.write("You've sent:" + querystring.parse(postData).text)
    response.end()
}

exports.start = start
exports.upload = upload
