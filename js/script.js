import { Game } from "./Game.js";

const game = new Game();

/** 
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
document.getElementById('startGame').addEventListener('click', function(){
    game.startGame();
});