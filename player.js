var Player = function(health, x, y){ //params take in class var and a race var later one
	
	Mob.apply(this, arguments);	
	this.name = "Player";
	this.color = "#00f";
	this.strength = 20;
	this.intelligence = 10;
	this.agility = 15;

	this.stats = [["Str", this.strength],["Int", this.intelligence], ["Agl" , this.agility]];
	
this.inventory = new Container();
	this.hitTile = function(x,y){
		var leftContainer = game_level.getContainer(x,y);
		var itemArray = leftContainer.list;
		for(var i=0;i<itemArray.length;i++){
			var item = itemArray[i];
			if(item.name == "Enemy"){
				item.damage(10);
				alert(item.name + ", " + item.health);
			}
		}
	}
	
	this.getStat = function(request){
		for(i = 0; i < this.stats.length; i++){
			if(request == this.stats[i][0]){
				return(this.stats[i][1]);
			}
		}
 			console.log("Avalible stats: ");
			 for(i = 0; i < this.stats.length; i++){
			 console.log(this.stats[i][0]);
			 }
			 return null;
	}
	this.shoot = function(){
	
	spawn(new Bolt(this.x+1, this.y));
	
	
	}
}

Player.prototype = new Mob();
Player.prototype.constructor = Player;