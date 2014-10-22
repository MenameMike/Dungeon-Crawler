dh.resources.loadImage("building.png");

var Building = function (x, y, width, height){
Item.apply(this, arguments);
this.solid = false;
	this.draw = function(){

	g.drawImage(dh.resources.getImage("building.png"), this.x, this.y, width, height)

	}

}
Building.prototype = new Item();
Building.prototype.constructor = Item;

