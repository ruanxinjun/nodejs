var Dropdownlist = (function(){
	var $ = function(id){
		return document.getElementById(id);
	};

	var _initdata  = function(id){
		$(id).innerHTML = 'Message';
	};

	return {
		initdata:_initdata
	}
})();

// function Dropdownlist(){



// }
