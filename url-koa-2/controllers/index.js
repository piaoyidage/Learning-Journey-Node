/*
* @Author: piaoyidage
* @Date:   2017-04-06 14:58:59
* @Last Modified by:   piaoyidage
* @Last Modified time: 2017-04-06 16:30:14
*/

'use strict';

let fn_index = async (ctx, next) => {
	ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
};

let fn_signin = async (ctx, next) => {
	console.log(ctx.request.body)
	let name = ctx.request.body.name || '',
		passwd = ctx.request.body.password || '';

	console.log(`signin with name: ${name}, password: ${passwd}`);

	if (name === 'koa' && passwd === '123456') {
		ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
	} else {
		ctx.response.body = `<h1>Login failed!</h1>
							<p><a href="/">Try again</a></p>`;

	}
};

module.exports = {
	'GET /': fn_index,
	'POST /signin': fn_signin
};
