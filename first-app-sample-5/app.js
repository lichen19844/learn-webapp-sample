var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var fs = require('fs');
// var markdown = require('markdown-it')
// app.engine('md', function(path, options, fn){  
//     fs.readFile(path, 'utf8', function(err, str){  
//       if (err) return fn(err);  
//       str = markdown.parse(str).toString();  
//       fn(null, str);  
//     });  
//   });


var index = require('./routes/index');
var users = require('./routes/users');
// 添加posts模块
var posts = require('./routes/posts');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// 截流所有的/处理
// app.use('/', function(req, res, next) {
//     if(ip = '1000') {
//         res.send('go out');
//     } else {
//         next()
//     }
// });

// app.use('/', function(req, res, next) {
//     res.send('come soon ...')
// });

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
// 关联路由/posts和posts模块
app.use('/posts', posts);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;