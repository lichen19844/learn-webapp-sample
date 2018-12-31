var mongoose = require('mongoose');

// var db = mongoose.connect('mongodb://127.0.0.1:27017/firstapp', {
// 上面的是使用终端docker连接的monggodb，下面的是使用docker的kitematic链接mongodb
var db = mongoose.connect('mongodb://192.168.99.100:32771/firstapp', {
    useMongoClient: true
});

db.on('error', function(err) {
  console.log(err);
});

db.once('open', function() {
  console.log('mongodb connect successed!')
});