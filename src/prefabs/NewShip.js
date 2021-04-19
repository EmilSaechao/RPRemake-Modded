class NewShip extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.mvmtSpeed = game.settings.specialSpeed;
        this.points = pointValue;
    }

    update() {
        this.x -= this.mvmtSpeed;
        if(this.x < 0 -this.width) {
            this.x = game.config.width;
        }

        this.y += 1;
        if(this.y > 250) {
            this.y = 160;
        }
    }

    reset() {
        this.y -= this.mvmtSpeed;
        this.x = game.config.width + 50;
    }
}