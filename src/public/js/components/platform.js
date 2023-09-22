export class Platforms {
    constructor(scene){
        this.relatedScene = scene;
    }

    preload(){
        this.relatedScene.load.image("platform", "../assets/platform.png");
        for(let i = 1; i < 7; i++){
            console.log(this.relatedScene.load.image(`platform${i}` , `../assets/operating/op${i}.png`));
        }
    }

    create(){




        this.fake = this.relatedScene.physics.add.group({
            frameQuantity: 100,
        })

        this.fakeInArray = this.fake.children.entries;


        this.fake.children.iterate(function (child) {
            
            child.aleatory = Phaser.Math.Between(0, 1);
            
            if (child.aleatory == 1) {
                child.velocity = 100;    
            }
            else if (child.aleatory == 0) {
                child.velocity = -99.999999999;
            }

            child.x = Phaser.Math.Between(-16000, 16000);
            child.y = Phaser.Math.Between(200, 800);
            child.body.allowGravity = false;
            child.setImmovable();
            
            child.setVelocityX(child.velocity);        
            console.log(child.texture.key);
        
            child.texture.key = "platform1"
        })



        this.correct = this.relatedScene.physics.add.group({
            key: "platform",
            frameQuantity: 100
        })



        this.correct.children.iterate(function (child) {
            child.x = Phaser.Math.Between(-16000, 16000);
            child.y = Phaser.Math.Between(200, 800);
            child.body.allowGravity = false;
            child.setImmovable();
            child.setVelocityX(100 * (Phaser.Math.Between(-1, 1)));

        })



    }


    update(){
    }





}