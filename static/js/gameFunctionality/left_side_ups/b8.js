import { INITIALUPGRADE, leftUps } from "./clickAndB1events.js"

const b8UpCost = INITIALUPGRADE * 10000000
    export const b8 = async () =>{
    const b8 = leftUps.children[7]
    b8.onclick = function(){
        let leftClicks = document.querySelector(".left-clicks")
        let upNum8 = b8.children[0].innerHTML;
        let previousUp = leftUps.children[6].children[0].innerText
        if (upNum8 > 10){
            if ( parseInt(leftClicks.innerText) >= ( b8UpCost*(upNum8*upNum8) )) {
                b8.children[0].innerText = parseInt(b8.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - b8UpCost*(upNum8*upNum8)
                upNum8 += 1
            }
        }else if (upNum8 > 1 ){
            if ( parseInt(leftClicks.innerText) >= ( (b8UpCost+b8UpCost)*upNum8 )) {
                b8.children[0].innerText = parseInt(b8.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - (b8UpCost+b8UpCost)*upNum8
                upNum8 += 1
            } 
        }else if(upNum8 == 1){
            if ( parseInt(leftClicks.innerText) >= ( b8UpCost+b8UpCost )) {
                b8.children[0].innerText = parseInt(b8.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - (b8UpCost+b8UpCost)
                upNum8 += 1
            } 
        }else{
            if ( parseInt(leftClicks.innerText) >= b8UpCost && previousUp >= 40) {
                b8.children[0].innerText = parseInt(b8.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - b8UpCost
                upNum8 += 1
            } 
        }
    }
    b8.addEventListener('mouseover', showCost)
        
    }

function showCost(){
    let cost8 = document.querySelector('.left_side_up[data-button-id="8"]')
    let b8 = leftUps.children[7]
    let upNum8 = b8.children[0].innerHTML;

    if (upNum8 > 10){
        cost8.setAttribute('data-content', `Cost: ${(b8UpCost*upNum8)*upNum8} clicks `)
    }else if (upNum8 > 1 ){
        cost8.setAttribute('data-content', `Cost: ${(b8UpCost+b8UpCost)*upNum8} clicks`)
    }else if(upNum8 == 1){  
        cost8.setAttribute('data-content', `Cost: ${b8UpCost+b8UpCost} clicks`)
    }else{
        cost8.setAttribute('data-content', `Cost: ${b8UpCost} clicks and you need 40 previous upgrades `)
    }

    $('.left_side_up').popover({
        container: 'body',
        placement: 'right',
        trigger: 'hover',
        html: true,
    })
}