var Enemy = function (heath, x, y){
	Mob.apply(this, arguments);
	this.name = "Enemy";
	
	this.update = function(){
	
	this.proximityCheck();
	}
	
	this.proximityCheck = function(){
		if(ply.x < this.x){
			game_level.placeItem(this.x-1,this.y,this);
			console.log(dh.util.distance(ply.x, ply.y, this.x, this.y));
			}else if
		(ply.x > this.x){
			game_level.placeItem(this.x+1,this.y,this);
			}
			
		if(ply.y < this.y){
			game_level.placeItem(this.x,this.y-1,this);
			//move up
			}else if
		(ply.y > this.y){
			// move down
			game_level.placeItem(this.x,this.y+1,this);
			}
		}
		
		
}

Enemy.prototype = new Mob();
Enemy.prototype.constructor = Enemy;