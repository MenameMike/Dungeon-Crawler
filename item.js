function Item (x,y,container){
	this.x = x;
	this.y = y;
	this.container = container;
	this.moveTo = function(nextContainer){
		this.container.remove(this);
		nextContainer.add(this);
	};
	this.draw = function(){};
}