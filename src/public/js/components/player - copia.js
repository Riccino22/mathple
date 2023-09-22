export class Player {
    constructor(scene){
        this.relatedScene = scene;
    }

    preload(){        
        this.load.spritesheet("dude", "sprite.png", { frameWidth: 100, frameHeight: 100 });
        //this.relatedScene.load.image("dude", "assets/apple.png");
        this.relatedScene.load.audio("jumpSound", "assets/jump.wav");
        
        let url = "js/rexvirtualjoystickplugin.min.js";
        this.relatedScene.load.plugin("rexvirtualjoystickplugin", url, true);
    }


    create(){
        this.jumpSound = this.relatedScene.sound.add("jumpSound", {
            volume: 1
        });
        this.body = this.relatedScene.physics.add.sprite(500, -150, "dude").setScale(0.5);
        this.velocity = 0;
        //this.body.setCollideWorldBounds(true);
        this.body.setBounce(0.2);
        this.cursors = this.relatedScene.input.keyboard.createCursorKeys();
        this.body.setData("in platform", false);

        this.angle = 0;


        
        this.joystick = this.relatedScene.plugins.get("rexvirtualjoystickplugin").add(this, {
            x: 105,
            y: 600,
            base: this.relatedScene.add.circle(0, 0, 50, 0x888888),
            thumb:  this.relatedScene.add.circle(0, 0, 25, 0xcccccc),
        })

        console.log("The jois")

        this.joystickCursors = this.joystick.createCursorKeys();

    }

    update(){
        this.body.setAngle(this.angle);
        
        if (this.body.x > 1200) {
            this.body.x = 1200;
            //alert();
        }

        if(this.body.y < -100){
            this.body.y = -100;
        }
        
        this.body.setVelocityX(this.velocity);
 
        if (this.cursors.right.isDown || this.joystickCursors.right.isDown) {
            this.velocity = 200;
            this.angle += 10;

            this.body.setData("in platform", false);
        }

        
       else if (this.cursors.left.isDown || this.joystickCursors.left.isDown) {
           this.velocity = -200;
           this.angle -= 10;
           this.body.setData("in platform", false);
        }

        else{
            if (this.body.body.touching.down) {
                this.body.setVelocityX(-50);
                //this.body.setData("In platform", true);
            }else{
                this.body.setVelocityX(0);
                //this.body.setData("In platform", false); 
            }
        }

        if (this.cursors.up.isDown && this.body.body.touching.down || this.joystickCursors.up.isDown && this.body.body.touching.down) {
            this.body.setVelocityY(-350);
            this.jumpSound.play();
        }


        

    }

}