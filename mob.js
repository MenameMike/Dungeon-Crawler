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
	
	//check if you can move a given DISTANCE
	this.canMove = function(x1,y1){
		//if the tile you're trying to move to is solid, you can't move there
		return !game_level.getTile(this.x+x1,this.y+y1).solid;
	};
	
	//if you 'canMove' somewhere then you do
	this.tryMove = function(x1,y1){
		if(this.canMove(x1,y1)){
			game_level.placeItem(this.x+x1,this.y+y1,this);
			return true;
		}else{
			return false;
		}
	};
	
	this.update = function(){}
}


Mob.prototype = new Item();
Mob.prototype.constructor = Mob;