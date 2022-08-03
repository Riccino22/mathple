export class CorrectPlatforms {
    constructor(scene){
        this.relatedScene = scene;
    }

    preload(){
        this.relatedScene.load.image("platform", "../assets/platform.png");
    }

    create(){

        this.body = this.relatedScene.physics.add.group({
            key: "platform",
            frameQuantity: 650,
        })
        this.correctInArray = this.body.children.entries;
        this.body.children.iterate(function (child) {
            
            child.aleatory = Phaser.Math.Between(0, 1);
            child.setAccelerationX(-1);
            if (child.aleatory == 1) {
                child.velocity = -50;    
            } else if (child.aleatory == 0) {
                child.velocity = -50;
            }
            child.x = Phaser.Math.Between(0, 45000);
            child.y = Phaser.Math.Between(200, 600);
            child.body.allowGravity = false;
            child.setImmovable();
            child.setVelocityX(child.velocity);        
        })


        for(let i = 0, l = this.correctInArray.length; i < l; i++){
            this.correctInArray[i].a = Phaser.Math.Between(0, 10);
            this.correctInArray[i].b = Phaser.Math.Between(0, 10);
            this.correctInArray[i].typeOp = Phaser.Math.Between(1, 4);
            this.correctInArray[i].text = ""

            if (this.correctInArray[i].typeOp == 1) {
                this.correctInArray[i].result = this.correctInArray[i].a + this.correctInArray[i].b;
                this.correctInArray[i].text = `${this.correctInArray[i].a} + ${this.correctInArray[i].b} = ${this.correctInArray[i].result}`;
            }
                   
            else if (this.correctInArray[i].typeOp == 2) {
                this.correctInArray[i].a = Phaser.Math.Between(-10, 10);
                this.correctInArray[i].result = this.correctInArray[i].a - this.correctInArray[i].b;
                this.correctInArray[i].text = `${this.correctInArray[i].a} - ${this.correctInArray[i].b} = ${this.correctInArray[i].result}`;
            }

            else if (this.correctInArray[i].typeOp == 3) {
                this.correctInArray[i].a = Phaser.Math.Between(-10, 10);
                this.correctInArray[i].b = Phaser.Math.Between(-10, 10);
                this.correctInArray[i].result = this.correctInArray[i].a * this.correctInArray[i].b;
                this.correctInArray[i].text = `${this.correctInArray[i].a} x ${this.correctInArray[i].b} = ${this.correctInArray[i].result}`;
            }

            else if (this.correctInArray[i].typeOp == 4) {
                this.correctInArray[i].a = Phaser.Math.Between(-10, 10);
                this.correctInArray[i].b = Phaser.Math.Between(-10, 10);
                if (this.correctInArray[i].b == 0) {
                    this.correctInArray[i].b = 1;
                }
                this.correctInArray[i].result = this.correctInArray[i].a / this.correctInArray[i].b;

                if (this.correctInArray[i].a % this.correctInArray[i].b == 0) {
                    this.correctInArray[i].text = `${this.correctInArray[i].a} / ${this.correctInArray[i].b} = ${this.correctInArray[i].result}`;                    
                }else {
                    this.correctInArray[i].text = `${this.correctInArray[i].a} / ${this.correctInArray[i].b} = ${this.correctInArray[i].result.toFixed(3)}`;
                }

            }

            this.correctInArray[i].op = this.relatedScene.add.text(this.correctInArray[i].x, this.correctInArray[i].y, this.correctInArray[i].text, {
                fill: "#fff",
                fontFamily: "arial black, arial, sans-serif",
                fontSize: 25
            });


        }
    }


    update(){
        for(let i = 0, l = this.correctInArray.length; i < l; i++){

            this.correctInArray[i].op.x = this.correctInArray[i].x - (this.correctInArray[i].op.width/2);

            if (this.correctInArray[i].x < -100) {
                this.correctInArray[i].x = 45000;
            }

            if (this.correctInArray[i].x == "") {
                this.correctInArray[i].op.setText("");
            }
        }
    }


}