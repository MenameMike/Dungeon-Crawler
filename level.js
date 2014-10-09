function Level(width,height){
	this.tileSize = 32;
	this.width = width;
	this.height = height;
	this.tileMatrix = [];
	this.containerMatrix = [];
	for(var x=0;y<this.width;x++){
		this.containerMatrix[this.width] = [];
		this.tileMatrix[this.width] = [];
	};
	
	for(var x=0;y<this.width;x++){
		for(var y=0;y<this.height;y++){
			this.containerMatrix[x][y] = new Container();
			this.tileMatrix[x][y] = new Tile();
		};
	};
	//tile layer
	this.getTile = function(x,y){
		return this.tileMatrix[x][y];
	};
	this.setTile = function(x,y,tile){
		this.tileMatrix[x][y] = tile;
	};
	//item layer
	this.getContainer = function(x,y){
		return this.itemMatrix[x][y];
	}
}