import { Board } from "./Board.js";

export class Game {
    constructor() {
      this.board = new Board(); 
    }


   
    startGame() {
        console.log("Game Started!")
    }
}