var dh = {
	importLibrary: function(name){
		//document.getElementsByTag("script")[0].internalHTML+="<script "+"src="+name+".js >";
	},
	importAll: function(){
		this.importLibrary("graphics");
		this.importLibrary("entity");
	},
	warning: function(msg){
		console.log("[dh.js : WARNING] " + msg);
	},
	error: function(msg){
		console.log("[dh.js : ERROR] " + msg);
	},
	fatalError: function(msg){
		console.log("[dh.js : FATAL_ERROR] " + msg);
		alert("Sorry! dh.js reached a fatal error, check console.log for more info.")
	},
	
};
