dh.input = {
	keyVal:{
		backspace: 8,
		tab: 9,
		enter: 13,
		shift: 16,
		ctrl: 17,
		alt: 18,
		left:37,
		up: 38,
		right: 39,
		down: 40,
		a: 65,
		b: 66,
		c: 67,
		d: 68,
		e: 69,
		f: 70,
		g: 71,
		h: 72,
		i: 73,
		j: 74,
		k: 75,
		l: 76,
		m: 77,
		n: 78,
		o: 79,
		p: 80,
		q: 81,
		r: 82,
		s: 83,
		t: 84,
		u: 85,
		v: 86,
		w: 87,
		x: 88,
		y: 89,
		z: 90
	},
	addKeydownEvent: function(key,func){
		document.addEventListener('keydown', function(event) {
			var code = event.keyCode;
			if(code == key){
				func();
			}
		});
	},
	addKeyupEvent: function(key,func){
		document.addEventListener('keyup', function(event) {
			var code = event.keyCode;
			if(code == key){
				func();
			}
		});
	}
};

//Thanks to Mike Newman for his magical for loops
for(key in dh.input.keyVal){
	dh.input[key] = false;
}

document.addEventListener('keydown', function(event) {
	var code = event.keyCode;
	for(key in dh.input.keyVal){
		if(code == dh.input.keyVal[key]){
			dh.input[key] = true;
		}
	}
});

document.addEventListener('keyup', function(event) {
	var code = event.keyCode;
	for(key in dh.input.keyVal){
		if(code == dh.input.keyVal[key]){
			dh.input[key] = false;
		}
	}
});
