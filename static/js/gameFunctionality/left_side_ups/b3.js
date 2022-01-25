import { INITIALUPGRADE, leftUps } from "./clickAndB1events.js"

const b3UpCost = INITIALUPGRADE * 100
    export const b3 = async () =>{
    const b3 = leftUps.children[2]
    b3.onclick = function(){
        let leftClicks = document.querySelector(".left-clicks")
        let upNum3 = b3.children[0].innerHTML;
        let previousUp = leftUps.children[1].children[0].innerText
        if (upNum3 > 10){
            if ( parseInt(leftClicks.innerText) >= ( b3UpCost*(upNum3*upNum3) )) {
                b3.children[0].innerText = parseInt(b3.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - b3UpCost*(upNum3*upNum3)
                upNum3 += 1
            }
        }else if (upNum3 > 1 ){
            if ( parseInt(leftClicks.innerText) >= ( (b3UpCost+b3UpCost)*upNum3 )) {
                b3.children[0].innerText = parseInt(b3.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - (b3UpCost+b3UpCost)*upNum3
                upNum3 += 1
            } 
        }else if(upNum3 == 1){
            if ( parseInt(leftClicks.innerText) >= ( b3UpCost+b3UpCost )) {
                b3.children[0].innerText = parseInt(b3.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - (b3UpCost+b3UpCost)
                upNum3 += 1
            } 
        }else{
            if ( parseInt(leftClicks.innerText) >= b3UpCost && previousUp >= 15) {
                b3.children[0].innerText = parseInt(b3.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - b3UpCost
                upNum3 += 1
            } 
        }
    }
    b3.addEventListener('mouseover', showCost)
        
    }

function showCost(){
    let cost3 = document.querySelector('.left_side_up[data-button-id="3"]')
    let b3 = leftUps.children[2]
    let upNum3 = b3.children[0].innerHTML;

    if (upNum3 > 10){
        cost3.setAttribute('data-content', `Cost: ${(b3UpCost*upNum3)*upNum3} clicks `)
    }else if (upNum3 > 1 ){
        cost3.setAttribute('data-content', `Cost: ${(b3UpCost+b3UpCost)*upNum3} clicks`)
    }else if(upNum3 == 1){  
        cost3.setAttribute('data-content', `Cost: ${b3UpCost+b3UpCost} clicks`)
    }else{
        cost3.setAttribute('data-content', `Cost: ${b3UpCost} clicks and you need 15 previous upgrades `)
    }

    $('.left_side_up').popover({
        container: 'body',
        placement: 'right',
        trigger: 'hover',
        html: true,
    })
}