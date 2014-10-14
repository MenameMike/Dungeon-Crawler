var Mob = function(health, x, y){
 
Item.apply(this, arguments);
//damage function
//health

	this.health = health;

	this.attack = function(target){
		target.health -= 10;
	}
	
	this.update = function(){}
}


Mob.prototype = new Item();
Mob.prototype.constructor = Item;