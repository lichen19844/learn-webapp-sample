var express = require('express');
var router = express.Router();
var ejs = require('ejs');
var path = require('path');
var fs = require('fs');

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
    res.render('index', { title: 'adsadsdsf' });
    // res.render('index', { title: 'hello worlds' });
});


module.exports = router;