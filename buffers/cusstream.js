var stream = require('stream');
var util = require('util');

function ReadStream(){
	stream.Readable.call(this);
}
util.inherits(ReadStream,stream.Readable);

ReadStream.prototype._read = function(){
	this.push('a');
	this.push('b');
	this.push('c\n');
	this.push(null);
}

function WriteStream(){
	stream.Writeable.call(this);
	this._cached = new Buffer('');
}

util.inherits(WriteStream,stream.Writeable);

WriteStream.prototype._write = function(chunk,encode,cb){
	console.log(chunk.toString());
};