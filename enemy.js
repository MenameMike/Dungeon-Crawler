var Enemy = function (heath, x, y, container){
	
								this.get_MOB = new Mob(health, x, y, container );
	
	/* dave if you see this i have a question. can i just use this line ^ to 
	make a new mob object inside of the enemy and say fucking inheritance?
	cause you still have all the properties of the mob class in here its just 
	in a variable. Just hade to edit some parameter passthroughs. */
	
	this.draw = function(){
		

		}	
}