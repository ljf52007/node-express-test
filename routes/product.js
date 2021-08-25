const express = require('express');
var route = express.Router();

route.get('/', (req, res) => {
    res.send({id: 1, title: '香辣鸡翅'});
});

route.post('/', (req, res) => {
    console.log('保存商品', req.body);
    res.status(201).send({id: 2, ...req.body});
});

route.put('/:id', (req, res) => {
    console.log('收到请求参数, 商品id为:', req.params.id);
    console.log('收到请求体, 新的商品内容为:', req.body);
    res.send({id: req.params.id, ...req.body});
});

route.delete('/:id', (req, res) => {
    console.log('收到请求参数, 商品id为:', req.params.id);
    res.status(204).send();
});

module.exports = route;
