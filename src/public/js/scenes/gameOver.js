export class GameOver extends Phaser.Scene{


    constructor(){
        super({ key : "gameover" });


    }

    preload(){
        this.load.image("gameover", "assets/game_over.jpg");
        this.load.image("btn", "assets/btn-start.png");
        this.load.image("btn", "assets/btn-menu.png");
    }

    create(){

        socket.on("show high score", data => {
            //alert(data.highScore);
        })

        this.add.image(0, 0, "gameover").setScale(1.5, 1.5).setOrigin(0, 0);
        this.btn = this.add.image(640, 500, "btn").setInteractive().setScale(1.5);
        this.btnMenu = this.add.image(640, 620, "btn-menu").setInteractive().setScale(1.5, 1.3);

        this.scoretext = this.add.text(0, 350, parseInt(localStorage.getItem("high score")), {
            fill: "blue",
            fontFamily: "Arial Black",
            fontSize: 75
        })


        this.scoretext.x = (this.sys.canvas.width / 2) - (this.scoretext.width/2) 



        this.btn.on("pointerdown", () => {

            this.scene.start("game");
            formOmit = false;
        })

        this.btnMenu.on("pointerdown", ()=>{
            this.scene.start("menu");
        })


    }


    update(){


        
        if (formOmit) {
        }
    }

}