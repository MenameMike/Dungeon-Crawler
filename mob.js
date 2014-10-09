var mob = function(){
//damage function
//health

	this.health = 100;

	this.attack = function(target){
		target.health -= 10;
	}
	
	this.update = function(){}
}