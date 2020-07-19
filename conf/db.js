//2020年2月
//e4glet
// conf/db.js
// mysql数据库配置信息
module.exports={
	//本地数据库
	mysql:{
		host:'127.0.0.1', // 数据库服务器ip
	    user:'root',      //数据库账号
	    password:'x5',  //数据库账号密码
	    port:'3306',      //端口号
	    database:'move'   //数据库名
	},
    
    //虚拟机数据库
	mysqlVM:{
		host:'192.168.52.128', // 数据库服务器ip
	    user:'root',      //数据库账号
	    password:'Pass2017!',  //数据库账号密码
	    port:'3306',      //端口号
	    database:'node'   //数据库名
	}
}

