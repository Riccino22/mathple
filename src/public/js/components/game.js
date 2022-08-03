//import Phaser  from "../../js/phaser.js";
import { CorrectPlatforms } from "../components/platformsCorrect.js";
import { FakePlatforms } from "../components/platformsFake.js";

import { Player } from "../components/player.js";
import { Score } from "../components/score.js";
import { Suplements } from "../components/suplement.js";
import { Joystick } from "./joystick.js";

export class Game extends Phaser.Scene {
    constructor(){
        super({ key : "game" });
        this.score = new Score(this);
        this.player = new Player(this);
        this.correctPlatforms = new CorrectPlatforms(this);
        this.fakePlatforms = new FakePlatforms(this);
        this.suplements = new Suplements(this);
        this.joystick = new Joystick(this);
    }


    preload(){
        this.player.preload();
        this.correctPlatforms.preload();
        this.fakePlatforms.preload();
        this.suplements.preload();
        this.joystick.preload();
        this.load.image("bg", "../assets/bg.png");

    }



    create(){
        this.bg = this.add.image(0, -2, "bg").setOrigin(0, 0);
 ////      this.physics.add.sprite().setVelocityX(100).flipX
       
        this.player.create();
        this.correctPlatforms.create();
        this.fakePlatforms.create();
        this.score.create();
        this.suplements.create();
        this.joystick.create();
        console.log(this.joystick);


        alert()

        this.physics.add.collider(this.player.body, this.correctPlatforms.body , (player, platform) => {
            //this.player.body.setData("in platform", true);
            //console.log(platform.acceleration);
        }, null, this);
        
        this.physics.add.overlap(this.player.body, this.fakePlatforms.body, (player, platform)=>{
            platform.disableBody(true, true);
            platform.x = "";
            this.score.scoreNumber -= 10;
        }, null, this);

        
        this.physics.add.overlap(this.correctPlatforms.body, this.correctPlatforms.body, (platform)=>{
            platform.disableBody(true, true);
            platform.x = "";
        }, null, this)

          
        this.physics.add.overlap(this.fakePlatforms.body, this.fakePlatforms.body, (platform)=>{
            platform.disableBody(true, true);
            platform.x = "";

        }, null, this)


          
        this.physics.add.overlap(this.correctPlatforms.body, this.fakePlatforms.body, (platform1, platform2)=>{
            if (Phaser.Math.Between(1,2) == 1) {
            platform1.disableBody(true, true);   
            platform1.x = "";
            } else {
                platform2.disableBody(true, true);   
                platform2.x = "";
                    
            }

        }, null, this)




        this.physics.add.overlap(this.player.body, this.suplements.multp2, (player, suplement)=>{
            this.score.scoreNumber *= 2;
            suplement.disableBody(true, true);
            console.log(this.score.scoreNumber);
        })



        this.count = 15;

 

    }




    update(){

//        this.physics.add.sprite().setAccelerationX
        this.count--;
        this.score.update();
        this.suplements.update();



        /*
        
        
        if (this.count > 10) {
   
        } else if (this.count < 10) {
            this.physics.add.overlap(this.correctPlatforms.fake, this.correctPlatforms.fake, (platform)=>{
                //platform.disableBody(false, false)
                alert(this.count + "aaaaaa");
            },null, this);
        }  
*/
        this.player.update();
        this.correctPlatforms.update();
        this.fakePlatforms.update();

/*
        if(this.player.body.getData("In platform")){
            for(let i = 0, l = this.correctPlatforms.fakeInArray.length; i < l; i++){
            
//                this.player.body.setVelocityX(this.correctPlatforms.fakeInArray[i].velocity); 
                this.player.body.setVelocityX(this.correctPlatforms.fakeInArray[i].velocity)

           
              
           
            }
        } else if (!this.player.body.getData("In platform")) {
            //this.player.body.setVelocityX(0);
            //alert(this.player.body.getData("In platform"));
        }*/



        if (this.player.body.y > 730) {
            if (!localStorage.getItem("high score")) {
                localStorage.setItem("high score", this.score.scoreNumber);
            } else {
                if(this.score.scoreNumber > parseInt(localStorage.getItem("high score"))){
                    //alert("High Score");
//                    console.log(this.score.scoreNumber)
//                    document.write(parseInt(localStorage.getItem("high score")));

                    const highScore = this.score.scoreNumber;

                    this.scene.start("congratulations");

                    /*$(
                        //function () {
                            
                            //this.socket = io();

                            localStorage.setItem("high score", highScore);
                            this.socket.emit("high score", highScore, data => {
                                alert("");
                                console.log(data);
                            });


                        }
                    )*/


                } else{
                    //alert("Mejor Suerte para La proxima");
                    //location.reload();
                    
                    this.scene.start("gameover")


                }
            }
        }

    


    }

}