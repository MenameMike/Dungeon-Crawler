function Tile(x,y){
	this.x = x;
	this.y = y;
	this.color = "#f00";
	this.solid = false;
	this.draw = function(){
		//default draw function
		g.drawRect(this.x*32,this.y*32,32,32,"#fff");
		g.drawRect((this.x*32) + 1, (this.y*32) + 1, 32-2,32-2,this.color);
	};
}