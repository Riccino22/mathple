export class Player {
    constructor(scene) {
        this.relatedScene = scene;
    }

    preload() {
        this.relatedScene.load.spritesheet("dude", "assets/Sprites-mathple.png", { frameWidth: 100, frameHeight: 100 });
        this.relatedScene.load.audio("jumpSound", "assets/jump.wav");

        let url = "js/rexvirtualjoystickplugin.min.js";
        this.relatedScene.load.plugin("rexvirtualjoystickplugin", url, true);
    }


    create() {
        this.jumpSound = this.relatedScene.sound.add("jumpSound", {
            volume: 1
        });
        this.body = this.relatedScene.physics.add.sprite(500, -150, "dude");
        this.velocity = 0;
        this.body.setBounce(0.2);
        this.cursors = this.relatedScene.input.keyboard.createCursorKeys();
        this.body.setData("in platform", false);




        this.joystick = this.relatedScene.plugins.get("rexvirtualjoystickplugin").add(this, {
            x: 105,
            y: 600,
            base: this.relatedScene.add.circle(0, 0, 50, 0x888888),
            thumb: this.relatedScene.add.circle(0, 0, 25, 0xcccccc),
        })

        this.joystickCursors = this.joystick.createCursorKeys();


        this.relatedScene.anims.create({
            key: 'left',
            frames: this.relatedScene.anims.generateFrameNumbers('dude', { start: 3, end: 0 }),
            frameRate: 10,
            repeat: -1,
        });
        this.relatedScene.anims.create({
            key: 'turnLeft',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20
        });
        this.relatedScene.anims.create({
            key: 'turnRight',
            frames: [{ key: 'dude', frame: 5 }],
            frameRate: 20
        });
        this.relatedScene.anims.create({
            key: 'right',
            frames: this.relatedScene.anims.generateFrameNumbers('dude', { start: 6, end: 10 }),
            frameRate: 10,
            repeat: -1
        });


        this.isLeft = false;
        this.body.anims.play("turnLeft");



    }

    update() {
        this.body.setScale(1);

        if (this.body.x > 1200) {
            this.body.x = 1200;
        }

        if (this.body.y < -100) {
            this.body.y = -100;
        }

        this.body.setVelocityX(this.velocity);


        if (this.cursors.right.isDown || this.joystickCursors.right.isDown) {
            this.velocity = 200;
            this.body.setData("in platform", false);
            this.isLeft = false;

            if (this.body.body.touching.down) {
                this.body.anims.play("right", true);
            } else if (!this.body.body.touching.down) {
                this.body.anims.play("turnRight");
            }
        }


        else if (this.cursors.left.isDown || this.joystickCursors.left.isDown) {
            this.velocity = -200;
            this.body.setData("in platform", false);


            this.isLeft = true;

            if (this.body.body.touching.down) {
                this.body.anims.play("left", true);
            } else if (!this.body.body.touching.down) {
                this.body.anims.play("turnLeft");
            } //else {""}
        }

        else {


            if (this.body.body.touching.down) {
                this.body.setVelocityX(-50);

                if (this.isLeft) {
                    this.body.anims.play("left");
                }
                else if (!this.isLeft) {
                    this.body.anims.play("right");
                }
            } else {
                this.body.setVelocityX(0);
                this.body.anims.play("turn");
            }
        }

        if (this.cursors.up.isDown && this.body.body.touching.down || this.joystickCursors.up.isDown && this.body.body.touching.down) {
            this.body.setVelocityY(-350);
            this.jumpSound.play();


            if (this.isLeft) {
                this.body.anims.play("turnLeft");
            }

            else {
                this.body.anims.play("turnRight");
            }

        }




    }

}