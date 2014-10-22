dh.resources.load("bolt.png");

var Bolt = function(x, y, direction) {
Item.apply(this, arguments);
this.direction = direction;
this.tile = game_level.getContainer(this.x, this.y).list;
console.log(this.tile);

this.draw = function(){
g.drawImage(dh.resources.getImage("bolt.png"), this.x, this.y, 32, 32);
}


}


new Bolt(10, 10, "north");

Bolt.prototype = new Item();
Bolt.prototype.constructor = Item;