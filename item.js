function Item (x,y){
	this.name = "Item";
	this.x = x;
	this.y = y;
	this.container = null;
	
	
	this.moveTo = function(nextContainer){
		if(this.container){
			this.container.remove(this);
		}
		nextContainer.add(this);
	};
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
}