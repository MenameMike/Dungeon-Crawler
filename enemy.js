var Enemy = function (heath, x, y){
	Mob.apply(this, arguments);
	this.name = "Enemy";
	
	

		
}

Enemy.prototype = new Mob();
Enemy.prototype.constructor = Enemy;