var Koa = require('koa');
var app = new Koa();
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);



function socketserver(ports) {

    //新建用户列表变量
    var users = [];
    var UserList_Num = 0;
    let socketID = {}

    // socket连接
    io.on('connection', (socket) => {

        //创建监听方法1
        socket.on('chat message', (data) => {

            console.log(data.msg)
            //发送信息
            io.emit('chat message', data);
        });

        //用户上线提示
        //创建监听方法2
        socket.on("join", function (name) {
            //将新上线用户加入用户列表
            addUserList(name,users);
            //计算在线用户总数
            UserList_Num=users.length;
            //把当前用户名存入对应的socketid中
            socketID[socket.id]=name;

            console.log(name+"上线了")
            console.log("剩余"+UserList_Num+"名用户在线");            
            //广播告诉所有人我自己上线
            io.emit('join',{user:name,users:users})         
        })

        //同步用户列表信息
        socket.on("UserList", function (name) {            
            //广播告诉除自己以外的人
            io.emit('UserList',users)            
        })

        //监听用户下线
        socket.on('disconnect',()=>{            
            if (users.length>0) {
                const username = socketID[socket.id] // 获取下线的用户
                delete socketID[socket.id]
                delUserList(username,users);      
               
                io.emit('offline', {users:users,username:username});
                console.log(username+'用户已下线');
                console.log("剩余"+users.length+"名用户在线");  
            }
            
        });
    });

    // 监听端口
    server.listen(ports, () => {
        console.log('socket服务器已经启动，监听端口为' + ports);
    });

    //每次上线新用户，增加在线用户列表
    function addUserList(username,List){ 
        List.push(username);
    }

    //每次下线用户，减少在线用户列表
    function delUserList(username,List){
        var index = List.indexOf(username);
        List.splice(index,1);
    }
}

//导出模块
module.exports = socketserver;