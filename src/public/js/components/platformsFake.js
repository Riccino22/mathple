export class FakePlatforms {


    constructor(scene) {
        this.relatedScene = scene;
    }

    preload() {
        this.relatedScene.load.image("platform", "../assets/platform.png");
    }


    create() {


        this.body = this.relatedScene.physics.add.group({
            key: "platform",
            frameQuantity: 250
        })

        this.body.children.iterate(function (child) {


            child.x = Phaser.Math.Between(0, 45000);
            child.y = Phaser.Math.Between(200, 700);
            child.body.allowGravity = false;
            child.setImmovable();
            child.setVelocityX(-50);
            child.setAccelerationX(-1);
        })


        this.fakeInArray = this.body.children.entries;

        for (let i = 0, l = this.fakeInArray.length; i < l; i++) {
            this.fakeInArray[i].a = Phaser.Math.Between(-10, 10);
            this.fakeInArray[i].b = Phaser.Math.Between(-10, 10);
            this.fakeInArray[i].typeOp = Phaser.Math.Between(1, 4);
            this.fakeInArray[i].text = "";

            //ADD////////////////////////////////////////////////////////////
            if (this.fakeInArray[i].typeOp == 1) {
                this.fakeInArray[i].a = Phaser.Math.Between(0, 10);
                this.fakeInArray[i].b = Phaser.Math.Between(0, 10);
                this.fakeInArray[i].resultAleatory = Phaser.Math.Between(-10, 10);

                if (this.fakeInArray[i].a + this.fakeInArray[i].b != this.fakeInArray[i].resultAleatory) {
                    this.fakeInArray[i].text = this.fakeInArray[i].a + " + " + this.fakeInArray[i].b + " = " + this.fakeInArray[i].resultAleatory;
                } else {
                    this.fakeInArray[i].text = this.fakeInArray[i].a + " + " + this.fakeInArray[i].b + " = -10";
                }

            }


            //SUBSTRACT////////////////////////////////////////////////////////////
            else if (this.fakeInArray[i].typeOp == 2) {
                this.fakeInArray[i].b = Phaser.Math.Between(0, 10);
                this.fakeInArray[i].resultAleatory = Phaser.Math.Between(-20, 20);

                if (this.fakeInArray[i].a - this.fakeInArray[i].b != this.fakeInArray[i].resultAleatory) {
                    this.fakeInArray[i].text = this.fakeInArray[i].a + " - " + this.fakeInArray[i].b + " = " + this.fakeInArray[i].resultAleatory;
                } else {
                    this.fakeInArray[i].text = this.fakeInArray[i].a + " - " + this.fakeInArray[i].b + " = " + Phaser.Math.Between(-100, -30);
                }
            }


            //MULP///////////////////////////////////////////////////////////////////
            else if (this.fakeInArray[i].typeOp == 3) {
                this.fakeInArray[i].resultAleatory = Phaser.Math.Between(-100, 100);

                if (this.fakeInArray[i].a * this.fakeInArray[i].b != this.fakeInArray[i].resultAleatory) {
                    this.fakeInArray[i].text = this.fakeInArray[i].a + " x " + this.fakeInArray[i].b + " = " + this.fakeInArray[i].resultAleatory;
                } else {
                    this.fakeInArray[i].text = this.fakeInArray[i].a + " * " + this.fakeInArray[i].b + " = " + Phaser.Math.Between(-101, -150);
                }

            }

            //DIVIDE//////////////////////////////////////////////////////////////////

            else if (this.fakeInArray[i].typeOp == 4) {
                this.fakeInArray[i].resultAleatory = Phaser.Math.FloatBetween(-10, 10).toFixed(3);

                if (this.fakeInArray[i].a / this.fakeInArray[i].b != this.fakeInArray[i].resultAleatory) {
                    this.fakeInArray[i].text = this.fakeInArray[i].a + " / " + this.fakeInArray[i].b + " = " + this.fakeInArray[i].resultAleatory;
                } else {
                    this.fakeInArray[i].text = this.fakeInArray[i].a + " / " + this.fakeInArray[i].b + " = " + Phaser.Math.Between(-11, -30);
                }

            }


            this.fakeInArray[i].op = this.relatedScene.add.text(this.fakeInArray[i].x, this.fakeInArray[i].y, this.fakeInArray[i].text, {
                fill: "#fff",
                fontFamily: "arial black, arial, sans-serif",
                fontSize: 25
            });

        }
    }




    update() {

        for (let i = 0, l = this.fakeInArray.length; i < l; i++) {


            this.fakeInArray[i].op.x = this.fakeInArray[i].x - (this.fakeInArray[i].op.width / 2);

            if (this.fakeInArray[i].x < -100) {
                this.fakeInArray[i].x = 45000;
            }


            if (this.fakeInArray[i].x == "") {
                this.fakeInArray[i].op.setText("");
            }
        }
    }

}