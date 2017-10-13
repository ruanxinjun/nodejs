var fs = require('fs');

// fs.readFile('index.js', 'utf-8',function(error,data){
// 	console.log(error);
// });

fs.writeFile('dp.txt', 'dfs', 'utf-8', function(error){
	if(console.error) return console.log(error);
});