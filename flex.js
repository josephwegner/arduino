var arduino = require('duino');

var board = new arduino.Board();

var LEDS = {
	red: 3,
	green: 5,
	blue: 6
};

board.pinMode('A0', 'in');

board.on('data', function(m) {
	if(m.indexOf("A0::") === 0) {
		var read = parseInt(m.replace("A0::", "")) - 659;

		var red = read > 50 ? 50 : read;
		read = read > 50 ? read - 50 : 0;
		var green = read > 50 ? 50 : read;
		read = read > 50 ? read - 50 : 0;
		var blue = read > 50 ? 50 : read;

		board.analogWrite(LEDS.red, red);
		board.analogWrite(LEDS.green, green);
		board.analogWrite(LEDS.blue, blue);
	} else {
		console.log(m);
	}
});

setInterval(function() {
	board.analogRead('A0');
}, 100);