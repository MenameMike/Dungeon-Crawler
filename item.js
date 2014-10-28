function Item (x,y){
	this.name = "Item";
	this.x = x;
	this.y = y;
	
	this.solid = false;
	
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
		if (!game_level.getTile(this.x+x1,this.y+y1).solid && !this.checkForMob(this.x+ x1, this.y+y1)){
		return true;
		}else{
		return false;
		}
	};
	
	//if you 'canMove' somewhere then you do
	this.tryMove = function(x1,y1){
		if(this.canMove(x1,y1)){
			game_level.getContainer(this.x, this.y).remove(this);
			
			game_level.placeItem(this.x + x1, this.y + y1, this);
			return true;
		}else{
			return false;
		}
	};
	
	this.checkForMob = function (x, y){
	
	var container = game_level.getContainer(x,y);
	
	var mobList = container.list;
	
		for(i=0; i< mobList.length; i++){
			if(mobList[i].solid == true){
				return true;
			}else{
			return false;
		
		}
	
	};
	
}
}


