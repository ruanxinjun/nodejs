var student = require('./student');
var teacher = require('./teacher');

function add(teachername,students)
{
	teacher.add(teachername);
	students.forEach(function(item,index){
		student.add(item);
	});
}

exports.add = add;