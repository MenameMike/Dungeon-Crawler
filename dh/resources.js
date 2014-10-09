dh.resources = {
	loading: 
		false,
	getImage: 
		function(src){
			if(dh.resources.imageMap[src] == undefined){
				return dh.resources.imageMap["dh/loading.png"];
			}else{
				return dh.resources.imageMap[src];
			}
		},
	imageMap:
		{},
	load: 	
		function(src){
			var ext = src.split(".")[1];
			if(ext=="png"||ext=="gif"||ext=="jpg"){
				dh.resources.loadImage(src);
			}
		},
	loadImage:
		function(src){
			dh.resources.loading = true;
			var img = new Image();
			img.onload = function(){
				dh.resources.loading = false;
				dh.resources.imageMap[src] = img;
			};
			img.src = src;
		}
};
dh.resources.load("dh/loading.png");
