// function f(){
// 	console.log('卧槽:'+this.name);
// }

// var a={
// 	name:'a',
// 	showMessage:f
// };

// var  b = {
// 	name:'b',
// 	showMessage:f
// };


// a.showMessage();


// b.showMessage();

var A = {
  name: '张三',
  describe: function () {
    console.log('姓名：'+ this.name);
  }
};

var name = '李四';
var f = A.describe;
f(); // "姓名：李四"


