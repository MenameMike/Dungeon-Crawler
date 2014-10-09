function Tile(x,y){
	this.x = x;
	this.y = y;
	this.color = "#f00";
	this.draw = function(){
		//default draw function
		this.drawRect(this.x*32,this.y*32,32,32,this.color);
	};
}