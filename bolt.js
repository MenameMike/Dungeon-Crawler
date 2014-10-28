dh.resources.load("bolt.png");

var Bolt = function(x, y) {
Item.apply(this, arguments);
this.color = "#fff";
items.add(this);
game_level.getContainer(this.x, this.y).list.push(this);
this.container = game_level.getContainer(this.x, this.y);
//console.log(this.tile);

this.draw = function(){
		g.drawRect(this.x*32, this.y*32, 32, 32, this.color);
	}	




this.update = function(distance){
this.checkForHit();
}

this.checkForHit = function(){
if(this.checkForMob(this.x, this.y)){

}else{
this.tryMove(this.x+1 , this.y);
}


}
}


new Bolt(12, 10);

Bolt.prototype = new Item();
Bolt.prototype.constructor = Item;