dh.util = {
	//calculate distance between 2 points
	distance: 	
		function(val1,val2,val3,val4){
			if(arguments.length == 2){
				return dh.util.distanceFromPoints(val1,val2);
			}
			if(arguments.length == 4){
				return dh.util.distanceFromValues(val1,val2,val3,val4);
			}
			return 0;
		},	
	distanceFromValues: 
		function(p1x,p1y,p2x,p2y){
			var d;
			d = Math.sqrt(
			((p2x - p1x) * (p2x - p1x))+
			((p2y - p1y) * (p2y - p1y)) 
			);
			return d;
		},	
	distanceFromPoints:
		function(p1,p2){
			if(!p1 || !p2)return 0;
			return dh.util.distanceFromValues(p1.x,p1.y,p2.x,p2.y);
		},
	direction:
		function(p1x,p1y,p2x,p2y){
			var point = new dh.util.Point(0,0);
			var distance = dh.util.distance(p1x,p1y,p2x,p2y);
			point.div(distance);
			return point;
		},

	
	//2D point
	Point:
		function(x1,y1){
			this.x = x1;
			this.y = y2;
			this.div = function(i){
				this.x /= i;
				this.y /= i;
			};
		},
	Color:
		function(r,g,b){
			this.r = r;
			this.g = g;
			this.b = b;
			this.toString = function(){
				return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
			}
		},
	//javascript double array
	DoubleArray: 
		function(){
			var left = [];
			var right = [];
			
			this.get = function(index){
				if(index < 0){
					return left[(-i)-1];
				}else{
					return right[i];
				}
			};
			
			this.push = function(bool,value){
				if(bool){
					right.push(value);
				}else{
					left.push(value);
				}
			};
			
			this.pop = function(bool){
				if(bool){
					return left.pop();
				}else{
					return right.pop();
				}
			};
			
			this.set = function(index,value){
				if(index < 0){
					left[(-i)-1] = value;
				}else{
					right[i] = value;
				}
			};
			
			this.toString = function(){
				var str = "";
				for(i=left.length-1;i>=0;i--){
					str = str + left[i];
				}
				for(i=0;i<right.length;i++){
					str = str + right[i];
				}
			};
	}

};