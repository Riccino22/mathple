export class Joystick {


    constructor(scene){
        this.relatedScene = scene;
    }

    preload(){
        let url = "js/rexvirtualjoystickplugin.min.js";
        this.relatedScene.load.plugin("rexvirtualjoystickplugin", url, true);
    }

    create(){


        this.body = this.relatedScene.plugins.get("rexvirtualjoystickplugin").add(this, {
            x: 55,
            y: 400,
            base: this.relatedScene.add.circle(0, 0, 50, 0x888888),
            thumb:  this.relatedScene.add.circle(0, 0, 25, 0xcccccc),
        })

        console.log("The jois")

        this.joystickCursors = this.body.createCursorKeys();
  
    }





}