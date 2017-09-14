var http = require('http');
var fs = require('fs');
var request=  require('request');

// http.createServer(function(req,res){
// 	fs.readFile('logo_new.png',function(err,data){
// 		if(err){
// 			res.end(err);
// 		}else{
// 			res.writeHeader(200,{'context-type':'text/html'});
// 			res.end(data);
// 		}
// 	});
// }).listen(3000);

// http.createServer(function(req,res){
// 	fs.createReadStream('logo_new.png').pipe(res);
// }).listen(3000);

//http://www.imooc.com/static/img/index/logo_new.png
http.createServer(function(req,res){
	request('http://www.imooc.com/static/img/index/logo_new.png').pipe(res);
}).listen(3000);