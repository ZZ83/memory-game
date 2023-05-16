import { Game } from "./Game.js";
import { Settings } from "./Settings.js";

const settings = new Settings();
settings.setSettings();

/** 
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
document.getElementById('startGame').addEventListener('click', function(){
    const game = new Game(settings);
    game.startGame();
    settings.hideSettingsMenu();
});