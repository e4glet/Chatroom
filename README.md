# 简易聊天室（nodejs koa + vue.js）
### 作者：eaglet liyaohua8468@gmail.com
### 制作时间：2020年7月18日

## 标签： nodejs koa vue.js(纯前端，非脚手架方法)

### 一、简介
  本程序基于 https://gitee.com/e4glet/nodejs_koa_vue_framework 框架开发，使用nodejs koa作为web端，前端使用vue.js，实现基本的聊天室功能。
  聊天室功能包括：登录，发消息，统计在线人数，上线下线提示信息等。  
  线上测试地址：http://47.75.167.116:8081/  


### 二、界面展示

![输入图片说明](https://images.gitee.com/uploads/images/2020/0719/003701_e203bf2b_1651640.png "2.png")

![输入图片说明](https://images.gitee.com/uploads/images/2020/0719/003502_ea2705ae_1651640.png "QQ图片20200719003428.png")

新增消息表情包支持  

![输入图片说明](https://images.gitee.com/uploads/images/2020/0719/155128_93be3911_1651640.png "2.png")

![输入图片说明](https://images.gitee.com/uploads/images/2020/0719/155136_fdd250a8_1651640.png "3.png")

更新可选头像功能

![输入图片说明](https://images.gitee.com/uploads/images/2020/0720/024205_7c824b58_1651640.png "001.png")

![输入图片说明](https://images.gitee.com/uploads/images/2020/0720/024215_83619d8a_1651640.png "002.png")

    
### 三、环境要求
- nodejs v7.6.0及以上版本，当前项目构建于v12.16.1版本
- vue.js koa2
- 系统环境：windows/linux/Mac OS
- 开发工具：VS Code等

###  四、初始化环境
1. 在命令行输入命令，安装依赖
```c
npm install -g
```

2. 安装koa框架支持
```c
npm install koa -g

npm install koa-ejs

npm install koa-views
``` 

3. NodeJS热部署工具 — supervisor
```c
npm install supervisor -g
```

以上环境初始化之后即可运行项目


#### 五、如何启动？
以windows系统为例：
打开CMD，进入项目目录
运行npm start

打开浏览器：http://localhost:3000/
即可访问项目。
```c
PS G:\nodejs\chatroom> npm start

> chatroom@1.0.0 start G:\nodejs\chatroom
> supervisor app.js


Running node-supervisor with
  program 'app.js'
  --watch '.'
  --extensions 'node,js'
  --exec 'node'

Starting child process with 'node app.js'
Watching directory 'G:\nodejs\chatroom' for changes.
Press rs for restarting the process.
socket服务器已经启动，监听端口为8081
web服务器已启动，监听端口为3000

```

### docker部署

```c
# 创建镜像
docker build -t e4glet/chatroom .
# 运行容器
docker run -dit -p 8081:3000 -p 8082:8082 --name mychat e4glet/chatroom
```

### 小结
如果你觉得该程序能帮助到你，请给颗星，谢谢。


### 更新日志
- 2020年7月21日
1. 修复已知bug

- 2020年7月20日
1. 优化UI界面,细节优化
2. 增加用户头像选择功能，并完善聊天列表内容

- 2020年7月19日
1. 增加聊天表情包功能（纯自定义vue.js实现，未使用插件）

- 2020年7月18日
1. 发布项目，支持多人在线群聊，实时提示上线下线通知
