function Level(width,height){
	this.tileSize = 32;
	this.width = width;
	this.height = height;
	this.tileMatrix = [];
	this.itemMatrix = [];
	for(var x=0;y<this.width;x++){
		this.itemMatrix[this.width] = [];
		this.tileMatrix[this.width] = [];
	};
	//tile layer
	this.getTile = function(x,y){
	
	};
	this.setTile = function(x,y,tile){
	
	};
}