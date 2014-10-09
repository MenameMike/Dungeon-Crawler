dh.graphics = {
	canvas: 
		null,
	context:
		null,
	clearColor:
		"#FFF",
	setCanvas: function(id){
		dh.graphics.canvas = document.getElementById(id);
		dh.graphics.context = dh.graphics.canvas.getContext("2d");
		dh.graphics.canvas.style.margin = "auto";
		dh.graphics.canvas.style.display = "block";
	},
	setStyleSize: function(width,height){
		dh.graphics.canvas.style.width = width;
		dh.graphics.canvas.style.height = height;
	},
	setSize: function(width,height){
		dh.graphics.canvas.width = width;
		dh.graphics.canvas.height = height;
	},
	drawRect: function (x,y,w,h,color){
		dh.graphics.context.fillStyle = color;
		dh.graphics.context.fillRect(x,y,w,h);
	},
	drawText: function (str,x,y,color){
		dh.graphics.context.fillStyle = color;
		dh.graphics.context.beginPath();
		dh.graphics.context.font = dh.graphics.fontSize + "px Arial";
		dh.graphics.context.fillText(str,x,y);
	},
	drawLine: function (x1,y1,x2,y2,color,width){
		dh.graphics.context.strokeStyle = color;
		dh.graphics.context.lineWidth = width;
		dh.graphics.context.beginPath();
		dh.graphics.context.moveTo(x1,y1);
		dh.graphics.context.lineTo(x2,y2);
		dh.graphics.context.stroke();
	},
	drawCircle: function (x,y,radius,color){
		dh.graphics.context.fillStyle = color;
		dh.graphics.context.beginPath();
		dh.graphics.context.arc(x,y,radius,0,2*Math.PI);
		dh.graphics.context.fill();
	},
	drawImage: function (img,x,y,width,height){
		if(typeof img === 'undefined'){
			dh.error("attempted to draw undefined.");
			return;
		}
		if(dh.resources.loading){
			dh.warning("drawing while resource are loading.");
		}
			dh.graphics.context.drawImage(img,x,y,width,height);
	},
	clear: function (color){
		dh.graphics.drawRect(0,0,dh.graphics.canvas.width,dh.graphics.canvas.height,color);
	},
	//Camera
	createCamera: 
	function(){
		this.x = 0;
		this.y = 0;
		this.targetX = 5;
		this.targetY = 5;
		this.width = dh.graphics.canvas.width;
		this.height = dh.graphics.canvas.height;
		this.update = function(){
			var dist = dh.util.distance(this.x,this.y,targetX,targetY);
			var cameraSpeed = 4 + (dist/4);		
			if(dist > cameraSpeed){
				var dirX = (targetX-this.x)/dist;
				var dirY = (targetY-this.y)/dist;
				this.x = this.x + (dirX*cameraSpeed);
				//dh.graphics.y = dh.graphics.y + (dirY*cameraSpeed);
			}
			dh.graphics.y = -88;
		};
		//if a point is within the camera
		this.within = function(x2,y2){
			if(x2 > this.x && x2 < (this.x + this.width)){
				if(y2 > this.y && y2 < (this.y + this.height)){
					return true;
				}
			}
			return false;
		};
		//target dh.graphics position
		this.target = function(x2,y2){
			targetX = (x2 - (this.width/2));
			targetY = (y2 - (this.height/2))-200;
		};
	}
	
};
dh.graphics.setCanvas("canvas");
dh.graphics.camera = new dh.graphics.createCamera();