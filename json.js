var http  = require('http');
var url = require('url');


var provincedata = [{"name":"浙江","id":1},{"name":"湖北","id":2}];
var citydata = [{"provinceid":1,"subitems":[{"name":"温州","id":123},{"name":"绍兴","id":124}]},{"provinceid":2,"subitems":[{"name":"武汉","id":125},{"name":"宜昌","id":126}]}];
var towndata = [{"provinceid":1,"towns":[{"cityid":123,"subitems":[{"name":"乐清","id":1231},{"name":"瓯海","id":1232}]},
{"cityid":124,"subitems":[{"name":"越城","id":1241},{"name":"上虞","id":1242}]}]},{"provinceid":2,"towns":[{"cityid":125,"subitems":[{"name":"汉口","id":1251},{"name":"武昌","id":1252}]},{"cityid":126,"subitems":[{"name":"当阳","id":1261},{"name":"枝江","id":1262}]}]}];


var server  = http.createServer(function(request,response){
	response.writeHead(200,{'content-type':'application/json'});
	
	var params = url.parse(request.url,true).query;

	var pid= params.pid;
	var cid = params.cid;
	var tid = params.cid;

	var type = params.type;

	var data =provincedata;

	if(type==2){
		data = citydata.find(function(model){
			return model.provinceid ==pid;
		});
	};

	if(type==3){
		
		data =  towndata.find(function(model){
			return model.provinceid==pid;
		});
		data = data.towns.find(function(model){
			return model.cityid ==cid;
		});
	};

	response.end(JSON.stringify(data));

});

server.listen(3000,function(){
	console.log('start json data');
});