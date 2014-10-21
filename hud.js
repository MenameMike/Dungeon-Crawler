function Hud(){
	this.health = 100;
	this.name = "myName";
	this.offsetX = 700;
	this.offsetY = 0;
	this.draw = function(){
		g.drawRect(0+this.offsetX,0+this.offsetY,128,600,"#000");
		g.drawText("Name: " + this.name,0+this.offsetX,20+this.offsetY,"#fff");
		g.drawText("HP: " + this.health,0+this.offsetX,20+32+this.offsetY,"#fff");
		g.drawText("Turn: " + turnCount,0+this.offsetX,20+62+this.offsetY,"#fff");
	}
}