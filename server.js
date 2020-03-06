var express = require('express'); //import Express.js module
var app = express();
var path = require('path');

console.log('サーバースタート');
app.use(express.static(path.join(__dirname)));
app.listen(8888);
console.log('http://localhost:8888');
