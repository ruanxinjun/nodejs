var http = require('http');
var querystring = require('querystring');

var postdata = querystring.stringify({
	'content':'第一次学习nodejs，还是看',
	'cid':348
});

var options = {
	hostname:'www.imooc.com',
	port:80,
	path:'/course/docomment',
	method:'post',
	headers:{
	'Host': 'www.imooc.com',
	'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:55.0) Gecko/20100101 Firefox/55.0',
	'Accept':'application/json, text/javascript, */*; q=0.01',
	'Accept-Language': 'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
	'Accept-Encoding': 'gzip, deflate',
	'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
	'X-Requested-With': 'XMLHttpRequest',
	'Referer': 'http://www.imooc.com/comment/348',
	'Content-Length': postdata.length,
	'Cookie': 'imooc_uuid=6afe32e7-736e-4dad-8844-730bbdcc7a0b; imooc_isnew=2; imooc_isnew_ct=1493862656; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1504599104,1504666278,1504748737,1504949117; UM_distinctid=15ccd863b6210f-0e781be8e38b738-4c322d7e-13c680-15ccd863b63403; CNZZDATA1261110065=278640194-1498093262-https%253A%252F%252Fwww.baidu.com%252F%7C1501729586; bdshare_firstime=1502352908574; loginstate=1; apsid=E2YzgyOTM2NmY3OTg3MjFmNDRmNjViNGFlZTI2NDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANTYyMTg4OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGYxZWUzYTFiNWZlN2U2OTUyNTFmMzEzNWYyMTZmM2RhI7SjWSO0o1k%3DNG; PHPSESSID=97rnd4dls3lme7mcmcb88n7uo6; cvde=59b3b37b0bb30-362; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1505270282; IMCDNS=0',
	'Connection': 'keep-alive',
	'Origin':'http://www.imooc.com'
	}
};

	var req = http.request(options,function(res){
		console.log('status:'+res.statusCode);
		console.log('headers:'+JSON.stringify(res.headers));
	});

	req.on('error',function(e){
			console.log('error:'+e.message);
	});
	req.write(postdata);
	req.end();