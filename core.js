var game_hud = new Hud();
var game_level = new Level(16,16);
var items = new Container();
//set the level
	function greyTile(){
		var newTile = new Tile(0,0);
		newTile.solid = true;
		newTile.color = "#888";
		return newTile;
	}
	for(var x=0;x<16;x++){
		for(var y=0;y<16;y++){
			game_level.setTile(x,y,greyTile());
		}
	}
	for(var x=1;x<15;x++){
		for(var y=1;y<15;y++){
			var newTile = new Tile(x,y);
			newTile.color = "#000";
			game_level.setTile(x,y,newTile);
		}
	}
	//wall on the right
	game_level.setTile(5,1,greyTile());
	game_level.setTile(5,2,greyTile());
	game_level.setTile(5,3,greyTile());
	game_level.setTile(5,4,greyTile());
	
	//wall on the left
	game_level.setTile(1,5,greyTile());
	game_level.setTile(2,5,greyTile());
	game_level.setTile(3,5,greyTile());
	//game_level.setTile(4,5,greyTile());
	game_level.setTile(5,5,greyTile());

var turnCount = 0;

var ply = new Player(100,4,4);

var bill = new Enemy(100,6,6);

function spawn(item){
	items.add(item);
}

game_level.placeItem(2,2,ply);

game_level.placeItem(8,5,bill);

//game_level.placeItem(7,5,ply);

function draw(){
	g.clear("#000");
	game_level.drawTiles();
	game_level.drawItems();
	game_hud.draw();
}

function updateItems(){

	for(var i=0;i<items.list.length;i++){
		var it = items.list[i];
		it.update();
		
	}
}

function update(){
bill.update();
updateItems();


}
function turn(){
	update();
	draw();
	turnCount++;
}


dh.input.addKeydownEvent(dh.input.keyVal.e,function(){
	ply.shoot();
	//turn();
});

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

