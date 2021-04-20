/*

CREDITS
-
Sparkle sound effect: Fairy Arcade Sparkle from https://mixkit.co/free-sound-effects/sparkle/
BGM: Summit Run from https://www.freesfx.co.uk/sfx/Determined 

*/

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play],
}

let game = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let keyLEFT, keyRIGHT, keyF, keyR;

