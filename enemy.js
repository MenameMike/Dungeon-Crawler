var Enemy = function (heath, x, y){
	Mob.apply(this, arguments);
	this.name = "Enemy";
	this.TD = 5;
	this.update = function(){
	
	this.proximityCheck();
	}
	
	this.proximityCheck = function(){
	//checks to see if the player is within this.TD X this.TD sqaure.
	if(ply.x< this.x + this.TD && ply.x > this.x - this.TD && ply.y< this.y + this.TD && ply.y > this.y - this.TD){
		
	this.moveToPlayer();
		}
	
	}
	
//Moves the enemy towards the player.
	this.moveToPlayer = function(){
		if(this.x < ply.x){
			this.tryMove(1,0);
			}else if
		(this.x > ply.x){
			this.tryMove(-1,0);
			}
			
		if(ply.y < this.y){
			this.tryMove(0,-1);
			//move up
			}else if
		(ply.y > this.y){
			// move down
			this.tryMove(0,1);
			}
		}
	  
}


Enemy.prototype = new Mob();
Enemy.prototype.constructor = Enemy;