var arduino = require('duino');
var colors = require('./rgbColors.js');

var board = new arduino.Board();

var LEDS = {
	red: 3,
	green: 5,
	blue: 6
};

var allColors = Object.keys(colors);

var i = 0;

setTimeout(function() {
	console.log("Board ready");

	var int = setInterval(function() {
		if(i < allColors.length) {
			var col = colors[allColors[i]];

			board.analogWrite(LEDS.red, col.red);
			board.analogWrite(LEDS.green, col.green);
			board.analogWrite(LEDS.blue, col.blue);

			console.log("Now showing " + allColors[i]);

			i++
		} else {
			clearInterval(int);
		}
	}, 3000);
}, 1000);
