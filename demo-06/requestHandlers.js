const start = () => {
    console.log('request handler start was called.')
    return 'Hello start.'
}

const upload = () => {
    console.log('request handler upload was called.')
    return 'Hello upload.'
}

exports.start = start
exports.upload = upload
