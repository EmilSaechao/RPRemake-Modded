// Blank, Black Screen
// - create folder: Rocket Patrol
// - subfolders: src, lib, assets
// - download phaser.js, move to lib
// - open folder in VSCode
// - "!" to make minimum index.html
// - change title
// - add script tag referencing phaser.js
// - add main.js to src (with console.log)
// - add script tag src/main.js
// - open index.html in browser

// - open a terminal window (Terminal > New Terminal)
// - start local web server
// 	python2 -m SimpleHTTPServer
// 	python3 -m http.server
// - src/main.js:
// 	let game = new Phaser.Game();
// - browse http://localhost:8000/
// - let config = { type: Phaser.CANVAS, width: 640, height: 480}
// - check git version in terminal
// - check "git enabled" in VSCode settings
// - switch to source control tab; initialize
// - commit message: Initial commit: file structure

// - go to github.com (and sign in)
// - make new repository:
// 	- name: RocketPatrol
// 	- desc: A Phaser Remake of Rocket Patrol
// 	- public: yes
// 	- create!
// - copy repository url
// - open command palette (in View menu): git add remote
// 	- name: github
// 	- url: (that URL you copied)
// - use cloud button to push
// - check on github for public

// - add subfolder src/scenes
// - add src/scenes/Menu.js
// - class Menu extends Phaser.Scene {}
// - constructor() { super("menuScene"); }
// - create() {this.add.text(20, 20, "Rocket Patrol Menu");}
// - back to main.js; scene: [Menu]
// - reference Menu.js in index.html

