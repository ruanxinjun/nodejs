var http = require('http');
var url = require('url');
var util =  require('util');

var server = http.createServer(function(req,res){
	
	res.writeHeader(200,{'content-type':'text/plain'});
	
	// res.end(util.inspect(url.parse(req.url,true)));
	
	var params = url.parse(req.url,true).query;
	res.write(params.username);
	res.write('\n');
	res.write(params.userpwd);
	res.end();
});

server.listen(3000);