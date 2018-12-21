var express = require('express');
var router = express.Router();
var ejs = require('ejs');
var path = require('path');
var fs = require('fs');
var markdown = require('markdown-it')
md = new markdown();

/* GET home page. */
// router.get('/', function(req, res, next) {
//     // res.render('index', { title: 'Express' });
//     // 修改title的值为'my first WebApp'
//     res.render('index', { title: 'my first WebApp' });
// });


router.get('/', function(req, res, next) {
    // var content = fs.readFileSync(path(__dirname, '../views/index.ejs'), 'utf-8');
    // var pathString = path.join(__dirname, '../views/index.ejs');
    // var html = new ejs({ url: pathString }).render({ title: 'hello world' });
    res.locals.path = path;
    // res.locals.title = 'aaaaaaa';
    res.locals.md = md;
    var title = md.render('title123!')
    // res.send(title)
    res.render('index', { title });
});

// 截流
router.get('/users', function(req, res, next) {
    res.send('hahaha');
})

router.post('/', function(req, res, next) {
    res.locals.path = path;
    res.send('abc');
});


module.exports = router;

// 应该做的方法
// GET / posts 获取文章
// POST / posts 创建文章
// DELTE / posts 删除文章
// PUT /posts 修改文章
// PATCH /posts 修改文章

// 普通工程师很low的方法
// GET / posts/ 获取文章
// POST / posts/create 创建文章
// POST / posts/delete 删除文章
// POST /posts/update 修改文章
// POST /posts/update2 修改文章