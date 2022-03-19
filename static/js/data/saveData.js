import { LEFTCLICKPOWER } from "../gameFunctionality/left_side_ups/clickAndB1events.js"
import { dataHandler } from "./data.js"


export const saveData = async () =>{    
    setInterval( async () => {
        let data = {
            "left_side_click_power": LEFTCLICKPOWER,
            "left_side_click":document.querySelector('.left-clicks').innerText,
            "b1":document.querySelector('.left_side_up[data-button-id="1"]').children[0].innerText,
            "b2":document.querySelector('.left_side_up[data-button-id="2"]').children[0].innerText,
            "b3":document.querySelector('.left_side_up[data-button-id="3"]').children[0].innerText,
            "b4":document.querySelector('.left_side_up[data-button-id="4"]').children[0].innerText,
            "b5":document.querySelector('.left_side_up[data-button-id="5"]').children[0].innerText,
            "b6":document.querySelector('.left_side_up[data-button-id="6"]').children[0].innerText,

            
            
            
    }
    await dataHandler.saveData(data)
    console.log(data)
    },1000)
}