var game_hud = new Hud();
var game_level = new Level(16,16);

//set the level

	for(var x=0;x<16;x++){
		for(var y=0;y<16;y++){
			var newTile = new Tile(x,y);
			newTile.color = "#555";
			game_level.setTile(x,y,newTile);
		}
	}
	for(var x=1;x<15;x++){
		for(var y=1;y<15;y++){
			var newTile = new Tile(x,y);
			newTile.color = "#000";
			game_level.setTile(x,y,newTile);
		}
	}

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
dh.input.addKeydownEvent(dh.input.keyVal.s,function(){
	ply.hitTile(ply.x,ply.y+1);
	//turn();
});
dh.input.addKeydownEvent(dh.input.keyVal.w,function(){
	ply.hitTile(ply.x,ply.y-1);
	//turn();
});
dh.input.addKeydownEvent(dh.input.keyVal.d,function(){
	ply.hitTile(ply.x+1,ply.y);
	//turn();
});
//movement
dh.input.addKeydownEvent(dh.input.keyVal.right,function(){
	ply.tryMove(1,0);
	turn();
});
dh.input.addKeydownEvent(dh.input.keyVal.left,function(){
	ply.tryMove(-1,0);
	turn();
});
dh.input.addKeydownEvent(dh.input.keyVal.up,function(){
	ply.tryMove(0,-1);
	turn();
});
dh.input.addKeydownEvent(dh.input.keyVal.down,function(){
	ply.tryMove(0,1);
	turn();
});

