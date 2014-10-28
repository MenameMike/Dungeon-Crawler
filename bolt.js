dh.resources.load("bolt.png");

var Bolt = function(x, y) {
	Item.apply(this, arguments);
	this.color = "#fff";

	game_level.getContainer(this.x, this.y).list.push(this);
	this.container = game_level.getContainer(this.x, this.y);
	//console.log(this.tile);

	this.draw = function(){
			g.drawRect(this.x*32, this.y*32, 32, 32, this.color);
		}	



/*for(i=0;i<10;i++){
this.tryMove(1, 0);
} */
	this.update = function(){
		this.checkForHit();
	
	}

	this.checkForHit = function(){
		if(this.checkForMob(this.x +1, this.y)){
		
		game_level.getContainer(this.x, this.y).remove(this);
		items.remove(this);
		
	}else{
		this.tryMove(1 , 0);
		}
	}
	
}



Bolt.prototype = new Item();
Bolt.prototype.constructor = Item;

