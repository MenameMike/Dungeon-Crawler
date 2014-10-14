var Enemy = function (heath, x, y){
	Mob.apply(this, arguments);
	
	/* dave if you see this i have a question. can i just use this line ^ to 
	make a new mob object inside of the enemy and say fuck inheritance?
	cause you still have all the properties of the mob class in here its just 
	in a variable. Just hade to edit some parameter passthroughs. */
	
	this.draw = function(){
		

		}	
		
	/*	this.spawnSpider = function(x,y){
		this.health = 50;
		var spiderClone = Object.create(enemy(this.health, x, y,  );
		
		this.x
		
		
		} */
}

Enemy.prototype = new Mob();
Enemy.prototype.constructor = Enemy;