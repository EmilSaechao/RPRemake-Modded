
class Menu extends Phaser.Scene{
    constructor() {
        super("menuScene");
    }

    // Loading Audio
    preload() {
        this.load.audio('sfx_select', 'assets/SuccessNotif.wav');
        this.load.audio('sfx_explosion', 'assets/FairyArcadeSparkle.wav');
        this.load.audio('sfx_rocket', 'assets/WandSparkle.wav');
        this.load.audio('BGMusic', 'assets/SummitRun.wav')
        this.load.image('Title', 'assets/title_screen.png');
    }

    create() {
        this.menuScreen = this.add.image(0,0, 'Title').setOrigin(0,0);
        
        // Defining Keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
      }
}