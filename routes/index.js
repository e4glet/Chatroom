//2020年2月
//e4glet
//路由配置文件
//先在项目中安装koa的路由模块
//npm install koa-router
//在ES6.0中const用于声明常量
const Router = require('koa-router');
//实例化
//在ES6.0中let用于声明变量
let router = new Router();

//引入控制器
const indexController=require('../controller/indexController');
const aboutController=require('../controller/aboutController');


//路由分层
//分层的好处是便于管理
indexController(router);
aboutController(router);


//导出模块
module.exports = router;