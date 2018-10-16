const exec = require('child_process').exec

const start = () => {
    console.log('request handler start was called.')

    // const sleep = milliSeconds => {
    //     const startTime = Date.now()
    //     while(Date.now() - startTime < milliSeconds) {
    //         continue
    //     }
    // }
    /* 
        首先，打开两个浏览器窗口或者标签页。在第一个浏览器窗口的地址栏中输入http://localhost:8888/start， 但是先不要打开它！
        在第二个浏览器窗口的地址栏中输入http://localhost:8888/upload， 同样的，先不要打开它！
        接下来，做如下操作：在第一个窗口中（“/start”）按下回车，然后快速切换到第二个窗口中（“/upload”）按下回车。
        注意，发生了什么： /start URL加载花了10秒，这和我们预期的一样。但是，/upload URL居然也花了10秒，而它在对应的请求处理程序中并没有类似于sleep()这样的操作！
        这到底是为什么呢？原因就是start()包含了阻塞操作。形象的说就是“它阻塞了所有其他的处理工作”。
    **/
    // sleep(10000)
    
    let content = 'empty'
    // exec 是异步的
    exec('ls -lah', (error, stdout, stderr) => {
        content = stdout
    })

    return content
}

const upload = () => {
    console.log('request handler upload was called.')
    return 'Hello upload.'
}

exports.start = start
exports.upload = upload
