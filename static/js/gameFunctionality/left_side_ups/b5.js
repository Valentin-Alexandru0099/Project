import { INITIALUPGRADE, leftUps } from "./clickAndB1events.js"

const b5UpCost = INITIALUPGRADE * 10000
    export const b5 = async () =>{
    const b5 = leftUps.children[4]
    b5.onclick = function(){
        let leftClicks = document.querySelector(".left-clicks")
        let upNum5 = b5.children[0].innerHTML;
        let previousUp = leftUps.children[3].children[0].innerText
        if (upNum5 > 10){
            if ( parseInt(leftClicks.innerText) >= ( b5UpCost*(upNum5*upNum5) )) {
                b5.children[0].innerText = parseInt(b5.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - b5UpCost*(upNum5*upNum5)
                upNum5 += 1
            }
        }else if (upNum5 > 1 ){
            if ( parseInt(leftClicks.innerText) >= ( (b5UpCost+b5UpCost)*upNum5 )) {
                b5.children[0].innerText = parseInt(b5.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - (b5UpCost+b5UpCost)*upNum5
                upNum5 += 1
            } 
        }else if(upNum5 == 1){
            if ( parseInt(leftClicks.innerText) >= ( b5UpCost+b5UpCost )) {
                b5.children[0].innerText = parseInt(b5.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - (b5UpCost+b5UpCost)
                upNum5 += 1
            } 
        }else{
            if ( parseInt(leftClicks.innerText) >= b5UpCost && previousUp >= 25) {
                b5.children[0].innerText = parseInt(b5.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - b5UpCost
                upNum5 += 1
            } 
        }
    }
    b5.addEventListener('mouseover', showCost)
        
    }

function showCost(){
    let cost4 = document.querySelector('.left_side_up[data-button-id="5"]')
    let b5 = leftUps.children[4]
    let upNum5 = b5.children[0].innerHTML;

    if (upNum5 > 10){
        cost4.setAttribute('data-content', `Cost: ${(b5UpCost*upNum5)*upNum5} clicks `)
    }else if (upNum5 > 1 ){
        cost4.setAttribute('data-content', `Cost: ${(b5UpCost+b5UpCost)*upNum5} clicks`)
    }else if(upNum5 == 1){  
        cost4.setAttribute('data-content', `Cost: ${b5UpCost+b5UpCost} clicks`)
    }else{
        cost4.setAttribute('data-content', `Cost: ${b5UpCost} clicks and you need 25 previous upgrades `)
    }

    $('.left_side_up').popover({
        container: 'body',
        placement: 'right',
        trigger: 'hover',
        html: true,
    })
}