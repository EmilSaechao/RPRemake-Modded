class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.mvmtSpeed = 3
        this.isFiring = false;
        this.sfxRocket = scene.sound.add('sfx_rocket');
    }

    update() {
        if(this.isFiring) {
            this.y -= this.mvmtSpeed;
            if(this.y < borderUISize * 3) {
                this.y = 410
                this.isFiring = false
            }
        } else {
            if(keyLEFT.isDown) {
                this.x -= this.mvmtSpeed;
            }
    
            if(keyRIGHT.isDown) {
                this.x += this.mvmtSpeed;
            }

            // Checks if Rocket is in 'Firing' mode
            if(Phaser.Input.Keyboard.JustDown(keyF)) {
                this.isFiring = true;
                this.sfxRocket.play();
            }

            // Ensures Rocket doesn't go out of bounds on x axis
            this.x = Phaser.Math.Clamp(this.x, borderUISize + borderPadding + 100,
                game.config.width - borderUISize - borderPadding - 100)
        }
    }

    reset() {
        this.isFiring = false;
        this.y = 410;
    }
}