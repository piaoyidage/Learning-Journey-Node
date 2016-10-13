/**
 * Koa2 初步学习
 */

const Koa = require("koa");

const app = new Koa();

app.use(async (ctx, next)=>{
    console.log(`${ctx.request.url} ${ctx.request.method}`);
    // 调用下一个middleware
    await next();
});

app.use(async (ctx, next)=>{
    var start = new Date().getTime();
    // ES6语法
    // 使用反引号 ` 来创建字符串，此种方法创建的字符串里面可以包含由美元符号加花括号包裹的变量${vraible}。
    console.log(`start: ${start}`);
    // 调用下一个middleware
    await next();
    var ms = new Date().getTime() - start;
    console.log(`Time:${ms}ms`);
});


app.use(async (ctx, next)=>{
    await next();
    console.log("hello koa");
    ctx.response.type = ("text/html");
    ctx.response.body = ("<h1>Hello, Koa2</h1>");
});

app.listen(3000);

console.log("app started at port 3000...");