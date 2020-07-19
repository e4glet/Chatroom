//2020年2月
//e4glet
//app.js程序入口
const Koa=require('koa');
const app=new Koa();
//引入koa-ejs
const render = require('koa-ejs');
const views = require('koa-views');

//引入koa静态文件模块
const static = require('koa-static');
const path = require('path')
// 引入模块 
const bodyParser = require('koa-bodyparser'); 

//引入koa-session
const Koa_Session=require("koa-session")


//引入层级路由模块
let router = require('./routes/index');

//引入socketserver模块
const socketserver=require('./server/socketserver');


//配置koa-session
const session_signed_key = ["secret"];
const session_config = {
    key:'koa:sess',
    maxAge:4000,
    autoCommit:true,
    overwrite:true,
    httpOnly:true,
    signed:true,
    rolling:true,
    renew:false,
};

//实例化
const session = Koa_Session(session_config,app);
app.keys = session_signed_key;
app.use(session);

// 配置静态web服务的中间件
app.use(static(
    path.join( __dirname,  './public')
));
// 挂载到app 
// 使用参考：ctx.request.body 获取post提交的数据
//设置页面模版路径

app.use(views('views', { map: {html: 'ejs' }})); 


//设置socket监听端口
socketserver(8082);

app.use(bodyParser()); 
//应用启动路由
app
    .use(router.routes())
    .use(router.allowedMethods());   
//监听3000端口
app.listen(3000,()=>{
	console.log("web服务器已启动，监听端口为3000");
});