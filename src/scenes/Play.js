
class Play extends Phaser.Scene{
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.image('starfield', 'assets/starfield.png');
        this.load.image('ship', 'assets/spaceship.png');
        this.load.image('rocket', 'assets/rocket.png');
    }

    create() {
        // Starfield BG
        this.starfield = this.add.tileSprite(0,0,640,480, 'starfield').setOrigin(0,0);

        //Rocket + Ships
        this.p1Rocket = new Rocket(this, game.config.width/2,
            game.config.height - borderUISize - borderPadding, 'rocket');
        this.ship1 = new Ship(this, 200, 160, 'ship');
        this.ship2 = new Ship(this, 300, 210, 'ship');
        this.ship3 = new Ship(this, 400, 250, 'ship');
        
        // Green UI BG
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width,
            borderUISize * 2, 0x00FF00).setOrigin(0,0)

        // White Borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
	    this.add.rectangle(0, game.config.height - borderUISize,
            game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
	    this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
	    this.add.rectangle(game.config.width - borderUISize, 0,
            borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);

        // Keyboard Inputs
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        this.starfield.tilePositionX -= 4;

        this.p1Rocket.update();

        this.ship1.update();
        this.ship2.update();
        this.ship3.update();
    }
}