var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

console.log("NO");
app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(8080);



