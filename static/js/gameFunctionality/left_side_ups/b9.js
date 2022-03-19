import { INITIALUPGRADE, leftUps } from "./clickAndB1events.js"

const b9UpCost = INITIALUPGRADE * 100000000
    export const b9 = async () =>{
    const b9 = leftUps.children[8]
    b9.onclick = function(){
        let leftClicks = document.querySelector(".left-clicks")
        let upNum9 = b9.children[0].innerHTML;
        let previousUp = leftUps.children[7].children[0].innerText
        if (upNum9 > 10){
            if ( parseInt(leftClicks.innerText) >= ( b9UpCost*(upNum9*upNum9) )) {
                b9.children[0].innerText = parseInt(b9.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - b9UpCost*(upNum9*upNum9)
                upNum9 += 1
            }
        }else if (upNum9 > 1 ){
            if ( parseInt(leftClicks.innerText) >= ( (b9UpCost+b9UpCost)*upNum9 )) {
                b9.children[0].innerText = parseInt(b9.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - (b9UpCost+b9UpCost)*upNum9
                upNum9 += 1
            } 
        }else if(upNum9 == 1){
            if ( parseInt(leftClicks.innerText) >= ( b9UpCost+b9UpCost )) {
                b9.children[0].innerText = parseInt(b9.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - (b9UpCost+b9UpCost)
                upNum9 += 1
            } 
        }else{
            if ( parseInt(leftClicks.innerText) >= b9UpCost && previousUp >= 45) {
                b9.children[0].innerText = parseInt(b9.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - b9UpCost
                upNum9 += 1
            } 
        }
    }
    b9.addEventListener('mouseover', showCost)
        
    }

function showCost(){
    let cost9 = document.querySelector('.left_side_up[data-button-id="9"]')
    let b9 = leftUps.children[8]
    let upNum9 = b9.children[0].innerHTML;

    if (upNum9 > 10){
        cost9.setAttribute('data-content', `Cost: ${(b9UpCost*upNum9)*upNum9} clicks `)
    }else if (upNum9 > 1 ){
        cost9.setAttribute('data-content', `Cost: ${(b9UpCost+b9UpCost)*upNum9} clicks`)
    }else if(upNum9 == 1){  
        cost9.setAttribute('data-content', `Cost: ${b9UpCost+b9UpCost} clicks`)
    }else{
        cost9.setAttribute('data-content', `Cost: ${b9UpCost} clicks and you need 45 previous upgrades `)
    }

    $('.left_side_up').popover({
        container: 'body',
        placement: 'right',
        trigger: 'hover',
        html: true,
    })
}