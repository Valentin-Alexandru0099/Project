import { clickAndB1events } from "./js/gameFunctionality/left_side_ups/clickAndB1events.js";
import { loadStats } from "./js/gameFunctionality/loadStats.js"
import { saveData } from "./js/data/saveData.js";


const initGame = async () => {
    loadStats();
    clickAndB1events();
    /*
    b2
    b3
    b4
    b5
    b6
    b7
    b8
    b9
    b10 
    */
   await saveData();
}


initGame()