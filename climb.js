var http = require('http');
var url = 'http://www.imooc.com';
var promise = require('promise');
var cheerio = require('cheerio');


function filterChap(html){
	var $ = cheerio.load(html);
	var menuarray = [];
	$('.menuContent div a').each(function(){
		var menuhref = url+$(this).attr('href');
		var menutitle = $(this).find('span').eq(0).text();
		menuarray.push({'title':menutitle,'href':menuhref});
	});
	return menuarray;
}

var autoClimb = function(){
	return new Promise(function(resolve,reject){
		http.get(url,function(res){
		var html = '';
		res.on('data',function(data){
			html+=data;
		});
		res.on('end',function(){
			var data = filterChap(html);
			resolve(data);
		});
		res.on('error',function(e){
			reject(e.message);
		});
	});
	});
}

// autoClimb();
Promise.all([autoClimb()]).then(function(data){
	console.log(data);
});