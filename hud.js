function Hud(){
	this.health = 100;
	this.name = "myName";
	this.draw = function(){
		g.drawRect(0,0,128,600,"#000");
		g.drawText("Name: " + this.name,0,20,"#fff");
		g.drawText("HP: " + this.health,0,20+32,"#fff");
	}
}