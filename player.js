var Player = function(health, x, y, container){ //params take in class var and a race var later one
this.inventory = container;
this.get_MOB = new Mob(health, x, y, this.inventory );

	this.strength = 20;
	this.intelligence = 10;
	this.agility = 15;

	this.stats = [["Str", this.strength],["Int", this.intelligence], ["Agl" , this.agility]];
	

	this.draw = function(){
			

	}	
	
	this.get_STAT = function(request){
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

}