import { handleEvents } from "./js/gameFunctionality/handleEvents.js";
import { loadStats } from "./js/gameFunctionality/loadStats.js"


const initGame = async () => {
    loadStats();
    handleEvents();
}


initGame()