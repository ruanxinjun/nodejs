var mgs = require('mongoose');

var settings = {
	ip:'127.0.0.1',
	port:27017,
	db:'news'
}

mgs.connect('mongodb://'+settings.ip+':'+settings.port+'/'+settings.db);

var struct = mgs.Schema;

var talkfd = new struct({
	tktitle:String,
	tkcontents:String
});
var talkmodel = mgs.model('talks',talkfd);

var newsfd = new struct({
	title:String,
	source:String,
	content:String,
	exptime:{type:Date,default:Date.now},
	talks:{type:[talkfd],default:[]}
});

var newsmodel = mgs.model('news',newsfd);
var news = new newsmodel();
news.title='开卷考试的',
news.source ='http://163.com';
news.content = 'this is over time';
news.save(function(err){
		newsmodel.find({'title':'开卷考试的'},function(err,docs){
			if(err==null){
				if(docs[0]!=null){
					newsmodel.update({'_id':docs[0]._id},{'talks':[{
						tktitle:'i need you ',
						tkcontents:'wo cao ni de fei'
					}]},function(err){
					});
				}
			}
		});

});













