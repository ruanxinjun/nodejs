var fs = require('fs');

var rm = fs.createReadStream('white_clip.mp3');

var n = 0;

rm
.on('data',function(chunk){
	n++;
	console.log(Buffer.isBuffer(chunk));
	rm.pause();
	console.log('data pause');
	setTimeout(function(){
		console.log('data pause end');
		rm.resume();
	},3000)
	//console.log(chunk.toString('utf-8'));
})
.on('readable',function(){
	console.log('can red');
})
.on('end',function(){
	console.log(n);
	console.log('end');
})
.on('close',function(){
	console.log('close');
})
.on('eror',function(e){
	console.log(e)
});
