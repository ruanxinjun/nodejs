//import http module
var http = require('http');
//response header
const content_type= {'content-type':'text/plain'};
//port
const port = 3000;
//ipaddress:default localserver
const ipaddr = '127.0.0.1';

//create server instance
var server = http.createServer(function (req,res) {
	res.writeHead(200,content_type);
	res.end('hello nodejs \n');
});

//listen server
server.listen(port,ipaddr);
//print
console.log('nodejs is runing');