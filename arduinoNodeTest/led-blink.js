var j5 = require("johnny-five");
var board = new j5.Board();

var LEDPIN = 13;
var OUTPUT = 1;

board.on("ready", function(){
    var val = 0;

    //Set up PIN 13 to output mode
    this.pinMode(LEDPIN, OUTPUT);

    //Loop to flash led

    this.loop( 100, function() {
        this.digitalWrite(LEDPIN, (val = val ? 0 : 1));

    });



});

