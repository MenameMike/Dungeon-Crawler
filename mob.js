var Mob = function(health, x, y){
 
Item.apply(this, arguments);
//damage function
//health

	this.health = health;

	this.attack = function(target){
		target.health -= 10;
	}
	
		this.draw = function(){
		g.drawRect(this.x*32, this.y*32, 32, 32, "#ff0");
	}	
	this.update = function(){}
}


Mob.prototype = new Item();
Mob.prototype.constructor = Mob;