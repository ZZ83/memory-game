import { Board } from "./Board.js";

export class Game {
    constructor(settings) {
        this.settings = settings;
        this.board = new Board(); 
    }


   
    startGame() {
        this.board.showGameBoard();
        console.log(this.settings);
    }
}