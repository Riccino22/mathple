import { Game } from "./scenes/game.js";
import { Menu } from "./scenes/menu.js";
import { GameOver } from "./scenes/gameOver.js";

const game = new Phaser.Game({ 
    backgroundColor: "#eee",
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    parent: document.querySelector("#game"),
    scene: [Menu, Game, GameOver],
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        debug: false
      }
    }
});

let loading = document.querySelector("#loading");
if (document.querySelector("canvas")) loading.style.color = "#fff";
