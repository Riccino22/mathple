export class Menu extends Phaser.Scene {

    constructor(){
        super({ key : "menu" });
    }

    preload(){
        this.load.image("menu", "assets/startImg.png");
        this.load.image("btn", "assets/btn-start.png");
        this.load.image("btn-highScores", "assets/PUNTAJES-BTN.png");
        this.load.audio("theme", "assets/theme.mp3");
    }

    create(){
        loading.style.display = "none";
        this.start = this.add.image(0,0, "menu").setOrigin(0,0);
        this.btn = this.add.image(380,450, "btn").setInteractive().setScale(1.5);
        this.scoresBtn = this.add.image(380,570, "btn-highScores").setInteractive().setScale(0.5);


        this.btn.on("pointerdown", ()=>{
            this.scene.start("game");
        })
        this.scoresBtn.on("pointerdown", ()=>{
            open("/top");
        });
    }
}