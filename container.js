function Container(){
	this.list = [];
	
	this.remove = function(item){
		var index = this.list.indexOf(item);
		this.list.splice(index, 1);
	};
	
	this.add = function(item){
		this.list.push(item);
	};
}