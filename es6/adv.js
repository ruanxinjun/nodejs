class home{
	constructor(){
		this.type='home';
	};
	say(message){
		console.log(this.type+'----'+message);
	}
}

let _home = new home();
_home.say('fack you');

class father extends home{
	constructor(){
		super();
		this.type='father';
	}
}

class son extends father{
	constructor(){
		super();
		this.type='son';
	}
}


let _father = new father();
_father.say('father is boring');

let _son = new son();
_son.say('son of bitch');
