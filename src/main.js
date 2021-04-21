/*
Name: Emil Saechao
Project Title: Sakura's Card Capture! - Rocker Patrol Modded
Date: 4.20.2021
Hours to Completion: 12

Hold on testing...

Aesthetic and references based on the late 90's anime, Cardcaptor Sakura. Original manga by Clamp.

POINTS BREAKDOWN
-
60: Redesign the game's artwork/UI/sound to change the theme to something other than sci-fi.
    I decided to go for a theme completely different to sci-fi, shoujo (romance) anime! This series
    in particular is one of my favorite from my childhood, so when I was picking a theme and my brother
    (half-jokingly) went 'Just make it magical girl themed, obviously,' I went for it!
    I drew every visual asset myself, other than the font, and used the anime's screenshots as
    references to characters and images from it.
    I adjusted the UI to feel more childlike, with bright colors and cute shapes, and used more
    imagery from the anime to make it fit the theme as well as frame the main screen.
    I used free-to-use SFX and music I found online to match, trying to use sparkly and 'pretty' ones
    to get as far from sci-fi as I could.

20: Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points.
    One of the iconic characters from the series is Keroberos (aka Kero), who's Sakura's companion.
    He's smug, snarky, and extremely speedy, which made him the perfect icon to base a new enemy after.
    I duplicated the original 'Ship' (renamed Card) class and named it Kero, so his unique speed also
    changes depending on difficulty.

10: Display the time remaining (in seconds) on the screen.
    This took me longer than I thought but by using the timer and some of Phaser's Math functions,
    I have the time remaining in the top center of the screen inside of the bow for maximum visibility.

10: Implement parallax scrolling.
    While drawing the background I realized I could get the affect of running by this particular park
    using parallax scrolling. It took be a bit to fiddle with the speeds but I like how it turned out,
    and it has the feel I was going for!

CREDITS
-
Sparkle sound effect: Fairy Arcade Sparkle from https://mixkit.co/free-sound-effects/sparkle/
Shoot sound effect: Magic Wand Sparkle from https://mixkit.co/free-sound-effects/sparkle/ 
Menu Select sound effect: Fantasy Game Success Notification from https://mixkit.co/free-sound-effects/magic/
BGM: Summit Run from https://www.freesfx.co.uk/sfx/Determined 
Font: Anime Ace 2.0 BB Font from https://www.fontspace.com/anime-ace-20-bb-font-f661
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

