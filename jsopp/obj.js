// var vc = function(){
// 	//'use strict';
// 	this.name='abc';
// 	this.say=function(){
// 		console.log(this.name);
// 	};
// };


// var v = new vc();
// v.say();



function Add(a,b){
	if(!(this instanceof Add)){
		return new Add(a,b);
	}
	this._a=a;
	this._b=b;
}

var add = Add(1,2);
console.log(add._a);
console.log(add._b);

