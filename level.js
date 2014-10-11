function Level(width,height){
	this.tileSize = 32;
	this.width = width;
	this.height = height;
	this.tileMatrix = [];
	this.containerMatrix = [];
	
	for(var x=0;x<this.width;x++){
		this.containerMatrix[x] = [];
		this.tileMatrix[x] = [];
	};
	
	for(var x=0;x<this.width;x++){
		for(var y=0;y<this.height;y++){
			this.containerMatrix[x][y] = new Container();
			this.tileMatrix[x][y] = new Tile(x,y);
		};
	};
	//tile layer
	this.getTile = function(x,y){
		return this.tileMatrix[x][y];
	};
	this.setTile = function(x,y,tile){
		this.tileMatrix[x][y] = tile;
	};
	this.drawTiles = function(){
		for(var x=0;x<this.width;x++){
			for(var y=0;y<this.height;y++){
				var t = this.tileMatrix[x][y];
				t.draw();
			}
		}
	};
	//item layer
	this.getContainer = function(x,y){
		return this.containerMatrix[x][y];
	};
	this.placeItem = function(x,y,item){
		item.x = x;
		item.y = y;
		item.moveTo(this.containerMatrix[x][y]);
	};
	this.drawItems = function(){
		for(var x=0;x<this.width;x++){
			for(var y=0;y<this.height;y++){
				var container = this.containerMatrix[x][y];
				for(var i=0;i<container.list.length;i++){
					var item = container.list[i];
					item.draw();
				}
			}
		}
	};
	
}