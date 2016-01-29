'use strict';
var http = require('http');
// var AV = require('leanengine');

// var APP_ID = process.env.LC_APP_ID;
// var APP_KEY = process.env.LC_APP_KEY;
// var MASTER_KEY = process.env.LC_APP_MASTER_KEY;

// AV.initialize(APP_ID, APP_KEY, MASTER_KEY);
// 如果不希望使用 masterKey 权限，可以将下面一行删除
//AV.Cloud.useMasterKey();

// var app = require('./app');

// 端口一定要从环境变量 `LC_APP_PORT` 中获取。
// LeanEngine 运行时会分配端口并赋值到该变量。
// console.log('APP_PORT: %s', process.env.LC_APP_PORT);
var PORT = parseInt(process.env.LC_APP_PORT || 3000);
// console.log('PORT: %s', PORT);
// app.listen(PORT, function () {
//   console.log('Node app is running, port:', PORT);
// });

console.log('Hello World! Listening port: ' + PORT);

http.createServer(function(req, res) {
  console.log('url: %s', req.url);
  
  if (req.url === '/__engine/1/ping') {
    // res.end(JSON.stringify({
    //   "runtime": "nodejs-" + process.version,
    //   "version": "custom"
    // }));
    res.end('Hello LeanEngine World!');
  } else {
  //   res.end('Hello LeanEngine World!');
    res.end(JSON.stringify({
      "runtime": "nodejs-" + process.version,
      "version": "custom"
    }));
  }

}).listen(PORT);
