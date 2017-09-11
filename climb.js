var http = require('http');
var url = 'http://www.imooc.com/';
var cheerio = require('cheerio');

function filterChap(html){
	var $ = cheerio.load(html);
	var html = '';
	$('.menuContent div').each(function(){
		html+=$(this).html();
	});
	return html;
}

http.get(url,function(res){
	var html = '';
	res.on('data',function(data){
		html+=data;
	});
	res.on('end',function(){
		console.log(filterChap(html));
	});
});