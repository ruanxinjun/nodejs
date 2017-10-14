module.exports = function(app){
	app.get('/',function(request,response,){
		response.render('index',{message:'fackyou'});
	});
	app.get('/a',function(request,response,next){
		var msg = request.query.msg||'it is okay';
		var data = ['a','b','c','d','e'];
		response.render('a',{message:'dissyou',msg:msg,data:data});
		next();
	},function(req,res){
		console.log('fdkfjsdlfjsdf');
	});
};