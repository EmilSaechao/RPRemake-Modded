class Play extends Phaser.Scene{
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.image('Watery', 'assets/Watery.png');
        this.load.image('Wood', 'assets/Wood.png');
        this.load.image('Windy', 'assets/Windy.png');
        this.load.image('Kero', 'assets/Kero.png');
        this.load.image('rocket', 'assets/rocket.png');
        this.load.spritesheet('explosion', 'assets/explosion.png', {frameWidth:64, frameHeight:32,
            startFrame:0, endFrame:9});
        this.load.image('gameOver', 'assets/Game_Over.png');
        this.load.image('foregroundUI', 'assets/frame.png');
        this.load.image('BG1', 'assets/BG_Layer1.png');
        this.load.image('BG2', 'assets/BG_Layer2.png');
        this.load.image('KingPengy', 'assets/playground.png');
    }

    create() {
        // Plays Background Music
        this.sound.play('BGMusic');

        // Parallax BG Layers
        this.trees = this.add.tileSprite(0,0,640,480, 'BG1').setOrigin(0,0);
        this.kingPengy = this.add.tileSprite(0,0,640,480, 'KingPengy').setOrigin(0,0);
        this.foreground = this.add.tileSprite(0,0,640,480, 'BG2').setOrigin(0,0);

        // Staff + Cards (Rocket + Ships)
        this.p1Rocket = new Rocket(this, game.config.width/2,
            410, 'rocket').setOrigin(0.5, 0);
        this.p1Rocket.scale = 0.5;
        this.ship1 = new Card(this, 200, 160, 'Windy', 0, 30).setOrigin(0, 0);
            this.ship1.setScale(0.9);
        this.ship2 = new Card(this, 300, 210, 'Wood', 0, 20).setOrigin(0, 0);
            this.ship2.setScale(0.9);
        this.ship3 = new Card(this, 400, 250, 'Watery', 0, 10).setOrigin(0, 0);
            this.ship3.setScale(0.9);
        this.ship4 = new Card(this, 400, 250, 'Kero', 0, 50).setOrigin(0, 0);

        let border = this.add.image(0, 0, 'foregroundUI').setOrigin(0,0);

        // Keyboard Inputs
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        // Animation Config
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { start:0, end:9, first:0 }),
            frameRate: 30
        });

        // Score Tracker + Display
        this.p1Score = 0;
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '40px',
            color: 'white',
            align: 'center',
            padding: {top:3, bottom:3},
            fixedWidth: 90
          }
        this.scoreLeft = this.add.text(80, 10, this.p1Score, scoreConfig);

        this.gameOver = false;
        
        // Timer
        let timerConfig = {
            fontFamily: 'Courier',
            fontSize: '40px',
            color: 'white',
            align: 'center',
            padding: {top:4, bottom:4},
            fixedWidth: 75
          }
        let gameOverConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'center',
            padding: {top:5, bottom:5}
          }
        
        this.clock = this.time.addEvent({
            delay: game.settings.gameTimer,
            callback: () => {
                this.add.image(0,0, 'gameOver').setOrigin(0,0);
                this.gameOver = true;
            },
            args: null,
            callbackScope: this,
            startAt: 0
        })

        this.timerString = this.add.text(282, 46, ' ', timerConfig);

    }

    update() {
        // Timer Updater
        let seconds = Phaser.Math.RoundTo(this.clock.getRemainingSeconds(), 0);
        this.timerString.text = seconds;

        // Parallax Background Movement
        this.foreground.tilePositionX -= 2.75;
        this.trees.tilePositionX -= 0.25;
        this.kingPengy.tilePositionX -= 0.75;

        // check key input for restart
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)) {
            this.sound.stopByKey('BGMusic');
            this.scene.restart();
        }
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.sound.stopByKey('BGMusic');
            this.scene.start("menuScene");
        }

        if(!this.gameOver) {
            this.p1Rocket.update();
            this.ship1.update();
            this.ship2.update();
            this.ship3.update();
        }

        // Checks for collisions
        if (this.checkCollision(this.p1Rocket, this.ship1)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship1);
        }
        if (this.checkCollision(this.p1Rocket, this.ship2)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship2);
        }
        if (this.checkCollision(this.p1Rocket, this.ship3)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship3);
        }
        if (this.checkCollision(this.p1Rocket, this.ship4)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship4);
        }
    }

    checkCollision(rocket, ship) {
        if(rocket.x > ship.x && rocket.x < ship.x + ship.width
            && rocket.y + rocket.height > ship.y && rocket.y < ship.y + ship.height) {
                return true;
            } else {
                return false;
            }
    }

    shipExplode(ship) {
        ship.alpha = 0;
        let boom = this.add.sprite(ship.x, ship.y, 'explosion').setOrigin(0, 0);
        boom.anims.play('explode');             
        boom.on('animationcomplete', () => {    
          ship.reset();                         
          ship.alpha = 1;                       
          boom.destroy();                       
        });       
        this.p1Score += ship.points;
        this.scoreLeft.text = this.p1Score; 
        this.sound.play('sfx_explosion');
      }
}