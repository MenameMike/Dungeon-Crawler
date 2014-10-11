function Item (x,y,container){

	this.x = x;
	this.y = y;
	this.container = container;
	
	this.rand = Math.random();
	this.moveTo = function(nextContainer){
		if(this.container){
			this.container.remove(this);
		}
		nextContainer.add(this);
	};
	this.draw = function(){
		//default draw function
		g.drawRect(this.x*32,this.y*32,32,32,"#0F0");
	};
}