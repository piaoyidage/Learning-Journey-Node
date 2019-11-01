const childProcess = require('child_process')

let worker

const spawn = (server, config) => {
    worker = childProcess.spawn('node', [server, config])
    worker.on('exit', code => {
        if (code !== 0) {
            spawn(server, config)
        }
    })
}

const main = argv => {
    spawn('server_02.js', argv[0])

    process.on('SIGTERM', () => {
        worker.kill()
        process.exit(0)
    })
}

main(process.argv.slice(2))