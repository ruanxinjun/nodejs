var http = require('http');
var query = require('querystring');

var postform = 
	'<form method="post">'+
	'<input type="text" name="username"/>'+
	'<input type="password" name="userpwd"/>'+
	'<button type="submit">提交信息</button>'+
	'</form>';

var server = http.createServer(function(req,res){
	var body = '';
	req.on('data',function(chunk){
		body+=chunk;
	});
	req.on('end',function(){
		body = query.parse(body);
		res.writeHead(200,{'content-type':'text/html'});
		if(body.username&&body.userpwd){
			res.write(body.username);
			res.write('<br/>');
			res.write(body.userpwd);
		}else{
			res.write(postform);
		}
		res.end();
	});
	
});

server.listen(3000);
