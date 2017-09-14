var fs = require('fs');

var rm = fs.createReadStream('white_clip.mp3');
var wm = fs.createWriteStream('1_white_clip.mp4');

rm.on('data',function(chunk){
	//如果还在继续读取文件，就不要写入文件	
	if(wm.write(chunk)===false){
		console.log('正在读取文件');
		//暂时停止读文件，因为还在写中
		rm.pause();
	}
}).on('end',function(){
	//读写结束
	wm.end();
});

//写入状态
wm.on('drain',function(){
	//文件已经写入了，可以继续读取文件
	console.log('文件已经写入了');
	rm.resume();//继续
})
