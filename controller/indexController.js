//2020年2月
//e4glet
//index控制器
const fs = require('fs');
const userdal=require('../dal/userDAL.js');

//var ping = require ("net-ping");


function indexController(router) {
	//index
	let title = "Vue.js+Koa2简易聊天室"
	router.get('/', async (ctx) => {	
		var userInfo = ctx.session.user
		//判断session	
		if(!userInfo){
			//未登录
			await ctx.response.redirect('/login');		
		}else{
			//已经登录			
			var username = userInfo ;
			var title = "简易聊天室"
			await ctx.render('index',{title});
			console.log(200);
		}	
	});

	//用户登录页面
	router.get('/login',async(ctx)=>{
		await ctx.render('login');
		console.log(200);
	});

	//获取session值
	router.get('/getUserSession',async(ctx)=>{
		var data = {
			code: 200,
			data:ctx.session.user
		}
		return ctx.response.body = data;
	})
	
	//登录请求
	router.post('/validatelogin', async (ctx, next) => {
		//let {username,password} = ctx.request.body //获取post提交的数据
		let {username,userimg} = ctx.request.body
		//let data = await userdal.checkUser(username,password)
		ctx.session.user = {username:username,userimg:userimg}		

		var data = {
			code: 200,
			url: '/',
			data:username
		}

		return ctx.response.body = data
	});
}


//导出模块
module.exports = indexController;
