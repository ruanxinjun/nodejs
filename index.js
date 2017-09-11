var classess = require('./school/classess');

//var _T = 'ruanxinjun';
//var _S = new Array('a','b','c');


exports.add = function(kclass){
	kclass.forEach(function(item,index){
		var teacher = item.teachername;
		var students = item.students;
		classess.add(teacher,students);
	});
}

var kc = [
	{'teachername':'niuniu','students':['niu1','niu2']},
	{'teachername':'huhu','students':['hu1','hu2']}
];

this.add(kc);
//classess.add(_T,_S);


