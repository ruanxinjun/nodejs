var fs = require('fs');
fs.readFile('logo_new.png',function(err,origin_buffer){
	console.log(Buffer.isBuffer(origin_buffer));
	fs.writeFile('logo_buffer.png',origin_buffer,function(err){
		if(err)console.log(err);
	});

	var base64Image = origin_buffer.toString('base64');
	console.log(base64Image);

	var decodeImg = new Buffer(base64Image,'base64');
	console.log(Buffer.compare(origin_buffer,decodeImg));

	fs.writeFile('logo_decoded.png',decodeImg,function(err){
		if(err)console.log(err);
	});

});