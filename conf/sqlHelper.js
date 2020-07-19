//2020年2月
//e4glet
//数据工具类
//适用于koa2
//引入mysql模块
var mysql = require('mysql');
//引入数据库配置信息
var dbconf = require('./db');

/*建立连接池*/
let pool = mysql.createPool(dbconf.mysql);

/*连接数据库*/
//sql为SQL语句
//param为参数数组
let sqlHelper = (sql, param) => {
	return new Promise((resolve, reject) => {
		pool.getConnection(function(err, connection) {
			if (err) {
				console.log(err)
				reject(err)
			} else {				
				connection.query(sql, param, (err, row) => {
					if (err) reject(err)
					else {
						resolve(row)
					}
					connection.release()
				})
			}
		})
	})
}

module.exports = sqlHelper;
