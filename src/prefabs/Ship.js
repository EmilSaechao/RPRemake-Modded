class Ship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.mvmtSpeed = 2
    }

    update() {
        this.x -= this.mvmtSpeed;
        if(this.x < 0 -this.width) {
            this.x = game.config.width;
        }
    }
}