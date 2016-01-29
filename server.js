'use strict';

var http = require('http');

var AV = require('leanengine');

var APP_ID = process.env.LC_APP_ID;
var APP_KEY = process.env.LC_APP_KEY;
var MASTER_KEY = process.env.LC_APP_MASTER_KEY;

AV.initialize(APP_ID, APP_KEY, MASTER_KEY);

// 端口一定要从环境变量 `LC_APP_PORT` 中获取。
// LeanEngine 运行时会分配端口并赋值到该变量。
var PORT = parseInt(process.env.LC_APP_PORT || 3000);
http.createServer(function(req, res) {
  console.log('APP_PORT: %s', process.env.LC_APP_PORT);
  console.log('Hello World! Listening port: ' + PORT);
  res.write('Hello LeanEngine World!');
}).listen(PORT);