import { INITIALUPGRADE, leftUps } from "./clickAndB1events.js"

const b4UpCost = INITIALUPGRADE * 1000
    export const b4 = async () =>{
    const b4 = leftUps.children[3]
    b4.onclick = function(){
        let leftClicks = document.querySelector(".left-clicks")
        let upNum4 = b4.children[0].innerHTML;
        let previousUp = leftUps.children[2].children[0].innerText
        if (upNum4 > 10){
            if ( parseInt(leftClicks.innerText) >= ( b4UpCost*(upNum4*upNum4) )) {
                b4.children[0].innerText = parseInt(b4.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - b4UpCost*(upNum4*upNum4)
                upNum4 += 1
            }
        }else if (upNum4 > 1 ){
            if ( parseInt(leftClicks.innerText) >= ( (b4UpCost+b4UpCost)*upNum4 )) {
                b4.children[0].innerText = parseInt(b4.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - (b4UpCost+b4UpCost)*upNum4
                upNum4 += 1
            } 
        }else if(upNum4 == 1){
            if ( parseInt(leftClicks.innerText) >= ( b4UpCost+b4UpCost )) {
                b4.children[0].innerText = parseInt(b4.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - (b4UpCost+b4UpCost)
                upNum4 += 1
            } 
        }else{
            if ( parseInt(leftClicks.innerText) >= b4UpCost && previousUp >= 20) {
                b4.children[0].innerText = parseInt(b4.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - b4UpCost
                upNum4 += 1
            } 
        }
    }
    b4.addEventListener('mouseover', showCost)
        
    }

function showCost(){
    let cost4 = document.querySelector('.left_side_up[data-button-id="4"]')
    let b4 = leftUps.children[3]
    let upNum4 = b4.children[0].innerHTML;

    if (upNum4 > 10){
        cost4.setAttribute('data-content', `Cost: ${(b4UpCost*upNum4)*upNum4} clicks `)
    }else if (upNum4 > 1 ){
        cost4.setAttribute('data-content', `Cost: ${(b4UpCost+b4UpCost)*upNum4} clicks`)
    }else if(upNum4 == 1){  
        cost4.setAttribute('data-content', `Cost: ${b4UpCost+b4UpCost} clicks`)
    }else{
        cost4.setAttribute('data-content', `Cost: ${b4UpCost} clicks and you need 20 previous upgrades `)
    }

    $('.left_side_up').popover({
        container: 'body',
        placement: 'right',
        trigger: 'hover',
        html: true,
    })
}