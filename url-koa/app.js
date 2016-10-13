/**
 * Koa2 router学习
 */

const Koa = require("koa");
// // 注意require('koa-router')返回的是函数:
const router = require("koa-router")();

const app = new Koa();

app.use(async (ctx, next)=>{
    console.log(`${ctx.request.url} ${ctx.request.method}`);
    // 调用下一个middleware
    await next();
});
// // add url-route:
router.get("/hello/:name", async (ctx, next)=>{
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello,${name}</h1>`;
});

router.get("/", async (ctx, next)=>{
    ctx.response.body = "<h1>Index page</h1>";
});

app.use(router.routes());

app.listen(3000);

console.log("app started at port 3000...");