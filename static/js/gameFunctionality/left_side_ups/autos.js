import { leftUps } from "./clickAndB1events.js"

export const autos = async () =>{
    setTimeout(() => {
        setInterval(() => {
            let b2 = leftUps.children[1].children[0].innerText
            let b3 = leftUps.children[2].children[0].innerText
            let b4 = leftUps.children[3].children[0].innerText
            let b5 = leftUps.children[4].children[0].innerText
            let b6 = leftUps.children[5].children[0].innerText
            let b7 = leftUps.children[6].children[0].innerText
            let b8 = leftUps.children[7].children[0].innerText
            let b9 = leftUps.children[8].children[0].innerText
            let b10 = leftUps.children[9].children[0].innerText
            let clicks = document.querySelector(".left-clicks")
            clicks.innerText = parseInt(clicks.innerText) + b2*10 +b3*50+ b4*1000 + b5*10000+ b6*100000
        }, 1000)
        
    }, 1000);
}