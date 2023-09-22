export class Score {

    constructor(scene, text){
        this.relatedScene = scene;
    }

    create(){
        this.text = this.relatedScene.add.text(10, 10, "SCORE: 0", {
            fill: "#333",
            fontFamily: "sans-serif",
            fontSize: 30,
        });
    
        
        this.scoreNumber = 0;
        this.scoreVelocity = 0.05;

    }


    update(){
        this.scoreNumber += this.scoreVelocity;
        this.text.setText("SCORE: " + parseInt(this.scoreNumber));


        if (this.scoreNumber < 0) {
            this.scoreNumber = 0;
        }


        


    }

}