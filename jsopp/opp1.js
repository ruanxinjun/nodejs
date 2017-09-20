http://javascript.ruanyifeng.com/oop/this.html

var  a = {

	names:'rxj',
	showMessage:function(){
	 console.log('姓名:'+this.names);
	}
}

var  b = {
	names:'rxj22'
}

b.names='fack222';
b.showMessage= a.showMessage;
b.showMessage();
