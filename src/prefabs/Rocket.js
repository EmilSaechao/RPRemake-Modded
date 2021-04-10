class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.mvmtSpeed = 2
        this.isFiring = false;
    }

    update() {
        if(this.isFiring) {
            this.y -= this.mvmtSpeed;
            if(this.y < borderUISize * 3) {
                this.y = game.config.height - borderUISize - borderPadding;
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
            }

            // Ensures Rocket doesn't go out of bounds on x axis
            this.x = Phaser.Math.Clamp(this.x, borderUISize + borderPadding,
                game.config.width - borderUISize - borderPadding)
        }
        }
}