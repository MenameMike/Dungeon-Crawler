dh.time = {
	delta: 0,
	lastTime: 0,
	currentTime: 0,
	update: 
		function(){
			dh.time.lastTime = dh.time.currentTime;
			dh.time.currentTime = Date.now();
			var dt = dh.time.currentTime - dh.time.lastTime;
			dh.time.delta = dt;
		}
};
