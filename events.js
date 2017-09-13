var events = require('events');
var life = new events.EventEmitter();


life.setMaxListeners(2);
life.on('some', function(a,b,c,d){
	console.log('somssss',a,b,c,d);
});
life.on('some', function(a,b,c,d){
	console.log('somssss',a,b,c,d);
});
life.on('some', function(a,b,c,d){
	console.log('somssss',b,a,c,d);
});


life.emit('some',1,2,3,4);

var cn  = events.EventEmitter.listenerCount(life,'some');

console.log(cn);
