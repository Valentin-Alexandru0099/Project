import { INITIALUPGRADE, leftUps } from "./clickAndB1events.js"

const b7UpCost = INITIALUPGRADE * 1000000
    export const b7 = async () =>{
    const b7 = leftUps.children[6]
    b7.onclick = function(){
        let leftClicks = document.querySelector(".left-clicks")
        let upNum7 = b7.children[0].innerHTML;
        let previousUp = leftUps.children[5].children[0].innerText
        if (upNum7 > 10){
            if ( parseInt(leftClicks.innerText) >= ( b7UpCost*(upNum7*upNum7) )) {
                b7.children[0].innerText = parseInt(b7.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - b7UpCost*(upNum7*upNum7)
                upNum7 += 1
            }
        }else if (upNum7 > 1 ){
            if ( parseInt(leftClicks.innerText) >= ( (b7UpCost+b7UpCost)*upNum7 )) {
                b7.children[0].innerText = parseInt(b7.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - (b7UpCost+b7UpCost)*upNum7
                upNum7 += 1
            } 
        }else if(upNum7 == 1){
            if ( parseInt(leftClicks.innerText) >= ( b7UpCost+b7UpCost )) {
                b7.children[0].innerText = parseInt(b7.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - (b7UpCost+b7UpCost)
                upNum7 += 1
            } 
        }else{
            if ( parseInt(leftClicks.innerText) >= b7UpCost && previousUp >= 35) {
                b7.children[0].innerText = parseInt(b7.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - b7UpCost
                upNum7 += 1
            } 
        }
    }
    b7.addEventListener('mouseover', showCost)
        
    }

function showCost(){
    let cost7 = document.querySelector('.left_side_up[data-button-id="7"]')
    let b7 = leftUps.children[6]
    let upNum7 = b7.children[0].innerHTML;

    if (upNum7 > 10){
        cost7.setAttribute('data-content', `Cost: ${(b7UpCost*upNum7)*upNum7} clicks `)
    }else if (upNum7 > 1 ){
        cost7.setAttribute('data-content', `Cost: ${(b7UpCost+b7UpCost)*upNum7} clicks`)
    }else if(upNum7 == 1){  
        cost7.setAttribute('data-content', `Cost: ${b7UpCost+b7UpCost} clicks`)
    }else{
        cost7.setAttribute('data-content', `Cost: ${b7UpCost} clicks and you need 35 previous upgrades `)
    }

    $('.left_side_up').popover({
        container: 'body',
        placement: 'right',
        trigger: 'hover',
        html: true,
    })
}