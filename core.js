var game_hud = new Hud();
var game_level = new Level(32,32);

var it = new Item();
var ply = new Player();
game_level.placeItem(5,5,it);
//game_level.placeItem(7,5,ply);

function draw(){
	g.clear("#000");
	game_level.drawTiles();
	game_level.drawItems();
	game_hud.draw();
}
function update(){

}
function turn(){
	update();
	draw();
}

dh.input.addKeydownEvent(dh.input.keyVal.right,function(){
	game_level.placeItem(it.x+1,it.y,it);
	turn();
});
dh.input.addKeydownEvent(dh.input.keyVal.left,function(){
	game_level.placeItem(it.x-1,it.y,it);
	turn();
});
dh.input.addKeydownEvent(dh.input.keyVal.up,function(){
	game_level.placeItem(it.x,it.y-1,it);
	turn();
});
dh.input.addKeydownEvent(dh.input.keyVal.down,function(){
	game_level.placeItem(it.x,it.y+1,it);
	turn();
});

