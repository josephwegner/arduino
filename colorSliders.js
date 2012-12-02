var arduino = require('duino');
var http = require('http');
var fs = require('fs');

var board = new arduino.Board();

var RED = 2;
var GREEN = 3;
var BLUE = 4;

http.createServer(function(req, res) {

	if(req.url === "/setLED") {
		
		var data = ""

		req.on('data', function(chunk) {
			data += chunk;
		});

		req.on('end', function() {
			res.end();
			
			var LEDS = JSON.parse(data);

			board.analogWrite(RED, LEDS.red);
			board.analogWrite(GREEN, LEDS.green);
			board.analogWrite(BLUE, LEDS.blue);

		});

	} else {
		var read = fs.createReadStream("./colorSliders.html");
		read.pipe(res);
	}

}).listen(8080);

console.log("App listening on :8080");
