import { clickAndB1events } from "./js/gameFunctionality/left_side_ups/clickAndB1events.js";
import { loadStats } from "./js/gameFunctionality/loadStats.js"
import { saveData } from "./js/data/saveData.js";
import { b2 } from "./js/gameFunctionality/left_side_ups/b2.js";
import { autos } from "./js/gameFunctionality/left_side_ups/autos.js";
import { b3 } from "./js/gameFunctionality/left_side_ups/b3.js";
import { b4 } from "./js/gameFunctionality/left_side_ups/b4.js";
import { b5 } from "./js/gameFunctionality/left_side_ups/b5.js";
import { b6 } from "./js/gameFunctionality/left_side_ups/b6.js";
import { b7 } from "./js/gameFunctionality/left_side_ups/b7.js";
import { b8 } from "./js/gameFunctionality/left_side_ups/b8.js";
import { b9 } from "./js/gameFunctionality/left_side_ups/b9.js";
import { b10 } from "./js/gameFunctionality/left_side_ups/b10.js";


const initGame = async () => {
    loadStats();
    clickAndB1events();
    b2();
    b3();
    b4();
    b5();
    b6();
    b7();
    b8();
    b9();
    b10();
    await autos();
   await saveData();
}


initGame()