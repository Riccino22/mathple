export class Suplements {


    constructor(scene){
        this.relatedScene = scene;
    }

    preload(){
        this.relatedScene.load.image("+10", "../assets/+10.png");
        this.relatedScene.load.image("x2", "../assets/x2.png");
    }

    create(){


        this.multp2 = this.relatedScene.physics.add.group({
            key: "x2",
            frameQuantity: 10,
        });
        this.multp2.children.iterate(function (child) {
            child.angle = 0;
            child.x = Phaser.Math.Between(2000,25000);
            
            child.body.allowGravity = false;
            child.setScale(0.15);
            child.setVelocityY(100);
        })




        this.add10 = this.relatedScene.physics.add.group({
            key: "+10",
            frameQuantity: 20,
        })       
        this.add10.children.iterate(function (child) {
            child.angle = 0;
            child.x = Phaser.Math.Between(2000, 25000);
            child.y = -100;
            child.setScale(0.2);
            child.body.allowGravity = false;
            child.setVelocityY(50);


        })





    }




    update(){
        this.multp2.children.iterate(function (child) {
            if (child.y > 800) {
                child.y = -300;
            }
            child.angle++;
            child.setAngle(child.angle);
            child.setVelocityX(-100);
        })


        this.add10.children.iterate(function (child) {
            if (child.y > 800) {
                child.y = -300;
            }
            child.angle++;
            child.setAngle(child.angle);
            child.setVelocityX(-100);
        })

    }


}