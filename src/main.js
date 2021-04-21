/*

CREDITS
-
Sparkle sound effect: Fairy Arcade Sparkle from https://mixkit.co/free-sound-effects/sparkle/
Shoot sound effect: Magic Wand Sparkle from https://mixkit.co/free-sound-effects/sparkle/ 
Menu Select sound effect: Fantasy Game Success Notification from https://mixkit.co/free-sound-effects/magic/
BGM: Summit Run from https://www.freesfx.co.uk/sfx/Determined 
-
Aesthetic and references based on the late 90's anime, Cardcaptor Sakura. Original manga by Clamp.

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

