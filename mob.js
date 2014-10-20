var Mob = function(health, x, y){
	this.name = "Mob";
	Item.apply(this, arguments);
	//damage function
	//health

	this.color = "#ff0";
	this.health = health;

	this.damage = function(amount){
		this.health -= amount;
		if(this.health<0)this.health=0;
	}
	
	this.draw = function(){
		g.drawRect(this.x*32, this.y*32, 32, 32, this.color);
	}	
	this.update = function(){}
}


Mob.prototype = new Item();
Mob.prototype.constructor = Mob;