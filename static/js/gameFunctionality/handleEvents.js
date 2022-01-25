import { dataHandler } from "../data/data.js"

const clickPower = 1


export const handleEvents = async () =>{
    const clickArea = document.querySelector('.left_side')
    clickArea.onclick = function () {
        const clicks = document.querySelector('.left-clicks')
        clicks.innerText = parseInt(clicks.innerText) + clickPower
    }
}
