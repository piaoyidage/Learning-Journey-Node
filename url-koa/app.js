/**
 * Koa2 router学习
 */

const Koa = require("koa");
// 注意require('koa-router')返回的是函数:
const router = require("koa-router")();

const bodyParser = require("koa-bodyparser");

const app = new Koa();

// 在router之前注册
app.use(bodyParser());

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
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});
// post请求
router.post("/signin", async (ctx, next)=>{
    var name = ctx.request.body.name || '',
        passwd = ctx.request.body.password || '';
    if (name === "koa" && passwd === "123456"){
        ctx.response.body = `<h1>Hello,${name}</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed.</h1>
                            <p><a href='/'>Try again.</a></p>`;
        
    }
});

app.use(router.routes());

app.listen(3000);

console.log("app started at port 3000...");