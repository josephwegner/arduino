var arduino = require('duino');

var board = new arduino.Board();
var led = new arduino.Led({
  board: board,
  pin: 13
});

var blink = led.blink();

setTimeout(function() { led.off(); }, 5000);