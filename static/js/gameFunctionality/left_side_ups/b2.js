import { INITIALUPGRADE, leftUps } from "./clickAndB1events.js"

const b2UpCost = INITIALUPGRADE * 10
    export const b2 = async () =>{
    const b2 = leftUps.children[1]
    b2.onclick = function(){
        let leftClicks = document.querySelector(".left-clicks")
        let upNum2 = b2.children[0].innerHTML;
        let previousUp = leftUps.children[0].children[0].innerText
        if (upNum2 > 10){
            if ( parseInt(leftClicks.innerText) >= ( b2UpCost*(upNum2*upNum2) )) {
                b2.children[0].innerText = parseInt(b2.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - b2UpCost*(upNum2*upNum2)
                upNum2 += 1
            }
        }else if (upNum2 > 1 ){
            if ( parseInt(leftClicks.innerText) >= ( (b2UpCost+b2UpCost)*upNum2 )) {
                b2.children[0].innerText = parseInt(b2.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - (b2UpCost+b2UpCost)*upNum2
                upNum2 += 1
            } 
        }else if(upNum2 == 1){
            if ( parseInt(leftClicks.innerText) >= ( b2UpCost+b2UpCost )) {
                b2.children[0].innerText = parseInt(b2.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - (b2UpCost+b2UpCost)
                upNum2 += 1
            } 
        }else{
            if ( parseInt(leftClicks.innerText) >= b2UpCost && previousUp >= 10) {
                b2.children[0].innerText = parseInt(b2.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - b2UpCost
                upNum2 += 1
            } 
        }
    }
    b2.addEventListener('mouseover', showCost)
        
    }

function showCost(){
    let cost2 = document.querySelector('.left_side_up[data-button-id="2"]')
    let b2 = leftUps.children[1]
    let upNum2 = b2.children[0].innerHTML;

    if (upNum2 > 10){
        cost2.setAttribute('data-content', `Cost: ${(b2UpCost*upNum2)*upNum2} clicks `)
    }else if (upNum2 > 1 ){
        cost2.setAttribute('data-content', `Cost: ${(b2UpCost+b2UpCost)*upNum2} clicks`)
    }else if(upNum2 == 1){  
        cost2.setAttribute('data-content', `Cost: ${b2UpCost+b2UpCost} clicks`)
    }else{
        cost2.setAttribute('data-content', `Cost: ${b2UpCost} clicks and you need 10 previous upgrades `)
    }

    $('.left_side_up').popover({
        container: 'body',
        placement: 'right',
        trigger: 'hover',
        html: true,
    })
}