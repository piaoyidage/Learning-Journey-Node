// 大文件拷贝
const fs = require('fs')

const copy = (src, dst) => {
    fs.createReadStream(src).pipe(fs.createWriteStream(dst))
}

const main = argv => {
    copy(argv[0], argv[1])
}

main(process.argv.slice(2))