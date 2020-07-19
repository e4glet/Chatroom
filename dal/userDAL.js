//2020年2月
//e4glet
//数据模块
var sqlHelper = require('../conf/sqlHelper');


async function checkUser(username, password) {	
	
	let sql = 'select * from e_usertb where e_user =? and e_pass=?'
	let param = [username, password];
	return sqlHelper(sql,param).then(res => {
		if (res.length == 1 && res[0].e_user == username && res[0].e_pass == password) {
			return {
				msg: "登陆成功",
				code: 200
			}
			
		} else {
			return {
				msg: "登录失败",
				code: 201
			}
		}
	})
}

module.exports = {
	checkUser
}
