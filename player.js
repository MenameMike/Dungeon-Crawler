var Player = function(health, x, y, container){
this.myInventory = container;
this.get_MOB = new Mob(100, x, y, this.myInventory );

	this.strength = 10;
	this.intelligence = 10;
	this.agility = 10;


	this.inventory = new Container();

	this.draw = function(){
			

	}	


}