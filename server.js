'use strict';

var http = require('http');

var PORT = parseInt(process.env.LC_APP_PORT || 3000);

console.log('Hello LeanEngine World! Listening port: ' + PORT);

http.createServer(function(req, res) {
  console.log('url: %s', req.url);
  
  if (req.url === '/__engine/1/ping' || req.url === '/1.1/functions/_ops/metadatas') {
    res.end(JSON.stringify({
      "runtime": "nodejs-" + process.version,
      "version": "custom"
    }));
  } else {
    res.end('Welcome to LeanEngine World!');
  }

}).listen(PORT);
