const express = require('express'); // 引入express库
const app = express(); // 创建express实例代表服务器
// const product = require('./routes/product'); // 导入子模块
const routes = require('./routes'); // 默认导入了routes文件夹中的index.js
const port = 3000; // 设置端口号

app.use(express.json());
// app.use('/product', product); // 将子模块挂载到/product子路由
routes(app); // 执行routes,统一挂载子路由

// '/' 处理根路径的请求
// req 请求,res 响应
app.get('/', (req, res) => {
    res.send('Hello World');
})

app.post('/', (req, res) => {
    console.log('收到请求体:', req.body); // 打印请求体
    res.status(201).send(); // 使用res.status设置响应状态码,201代表资源创建成功,再调用send发送响应
});

// :id表示该url后的值会作为请求的参数,并赋给id变量
app.put('/:id', (req, res) => {
    console.log('收到请求参数,id为:', req.params.id);
    console.log('收到请求体:', req.body);
    res.send(); // 响应,默认状态码为200
});

app.delete('/:id', (req, res) => {
    console.log('收到请求参数,id为:', req.params.id);
    res.status(204).send(); // 204代表资源删除成功
})

// app.listen来启动server,并监听指定端口
app.listen(port, () => {
    console.log(`Express server listening at http://localhost:${port}`);
});
