var game_hud = new Hud();
var game_level = new Level(16,16);
var turnCount = 0;

var ply = new Player(100,4,4);

var bill = new Enemy(100,6,6);

game_level.placeItem(5,5,ply);

game_level.placeItem(8,5,bill);

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
	turnCount++;
}


dh.input.addKeydownEvent(dh.input.keyVal.a,function(){
	ply.hitTile(ply.x-1,ply.y);
	//turn();
});
//movement
dh.input.addKeydownEvent(dh.input.keyVal.right,function(){
	var it = ply;
	game_level.placeItem(it.x+1,it.y,it);
	turn();
});
dh.input.addKeydownEvent(dh.input.keyVal.left,function(){
	var it = ply;
	game_level.placeItem(it.x-1,it.y,it);
	turn();
});
dh.input.addKeydownEvent(dh.input.keyVal.up,function(){
	var it = ply;
	game_level.placeItem(it.x,it.y-1,it);
	turn();
});
dh.input.addKeydownEvent(dh.input.keyVal.down,function(){
	var it = ply;
	game_level.placeItem(it.x,it.y+1,it);
	turn();
});

