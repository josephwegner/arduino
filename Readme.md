Joe-Arduino
===========
Just Joe playing around with his Arduino.  Nothing in here is of any value, unless you are also learning how to use your arduino  

Setup
=====
**tl;dr** Get an arduino uno

All materials come from [Sparkfun's Arduino Starter Kit](https://www.sparkfun.com/products/10174).  It's a very nice kit, and I recommend it for beginners.  It doesn't come with everything you could ever want, but it's definitely a start.  

Also, most of the projects in here will depend on [duino](https://github.com/semu/duino), which allows me to connect to my arduino via Node.js.  

Projects
========

blink.js
--------
Stupid simple.  Blinks an LED.  

**Components:**
- Built-in LED on port 13, or put an LED on pin 13

rgbColors.js
------------
This is a node modules that creates the color bindings for an RGB LED.  I can only guarantee that these work with the RGB LED that comes with the Sparkfun kit.

**Components:**
- RGB LED
- 3x 330 Ohm resistors on each color pin. *Do not put a resistor on ground.*

**Usage:**
  var colors = require('rgbColors.js');
  
  board.analogWrite(REDPIN, colors.yellow.red);
  board.analogWrite(GREENPIN, colors.yellow.green);
  board.analogWrite(BLUEPIN, colors.yellow.blue);
  //The LED is now yellow
  
rgbled.js
---------
Displays all the colors in rgbColors.js

**Components:**
- RGB LED
  - Connect RGB pins to arduino PWM ports, with a 330 ohm resistor in between each LED.
    - Red Default: PWM 3
    - Green Default: PWM 5
    - Blue Default: PWM 6
  - Connect ground pin to any ground.  *Do not put a resistor on ground.*

colorSliders
------------
Gives you three sliders so you can play with all the colors available in the RGB spectrum.

**Component:**
- RGB LED
  - Connect RGB pins to arduino PWM ports, with a 330 ohm resistor in between each LED.
    - Red Default: PWM 3
    - Green Default: PWM 5
    - Blue Default: PWM 6
  - Connect ground pin to any ground.  *Do not put a resistor on ground.*

**Usage:**
1. Run `node colorSliders.js`
2. Open your browser to [http://localhost:8080](http://localhost:8080)
3. Move the color sliders in whatever direction you would like
