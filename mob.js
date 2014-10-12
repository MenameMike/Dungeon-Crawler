var Mob = function(health, x, y, container){
this.inventory = container;
this.tile = new Container(); 
this.get_ITEM = new Item(x, y, this.tile);
//damage function
//health

	this.health = health;

	this.attack = function(target){
		target.health -= 10;
	}
	
	this.update = function(){}
}

