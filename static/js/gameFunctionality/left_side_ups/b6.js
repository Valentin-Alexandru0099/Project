import { INITIALUPGRADE, leftUps } from "./clickAndB1events.js"

const b6UpCost = INITIALUPGRADE * 100000
    export const b6 = async () =>{
    const b6 = leftUps.children[5]
    b6.onclick = function(){
        let leftClicks = document.querySelector(".left-clicks")
        let upNum6 = b6.children[0].innerHTML;
        let previousUp = leftUps.children[4].children[0].innerText
        if (upNum6 > 10){
            if ( parseInt(leftClicks.innerText) >= ( b6UpCost*(upNum6*upNum6) )) {
                b6.children[0].innerText = parseInt(b6.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - b6UpCost*(upNum6*upNum6)
                upNum6 += 1
            }
        }else if (upNum6 > 1 ){
            if ( parseInt(leftClicks.innerText) >= ( (b6UpCost+b6UpCost)*upNum6 )) {
                b6.children[0].innerText = parseInt(b6.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - (b6UpCost+b6UpCost)*upNum6
                upNum6 += 1
            } 
        }else if(upNum6 == 1){
            if ( parseInt(leftClicks.innerText) >= ( b6UpCost+b6UpCost )) {
                b6.children[0].innerText = parseInt(b6.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - (b6UpCost+b6UpCost)
                upNum6 += 1
            } 
        }else{
            if ( parseInt(leftClicks.innerText) >= b6UpCost && previousUp >= 30) {
                b6.children[0].innerText = parseInt(b6.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - b6UpCost
                upNum6 += 1
            } 
        }
    }
    b6.addEventListener('mouseover', showCost)
        
    }

function showCost(){
    let cost6 = document.querySelector('.left_side_up[data-button-id="6"]')
    let b6 = leftUps.children[5]
    let upNum6 = b6.children[0].innerHTML;

    if (upNum6 > 10){
        cost6.setAttribute('data-content', `Cost: ${(b6UpCost*upNum6)*upNum6} clicks `)
    }else if (upNum6 > 1 ){
        cost6.setAttribute('data-content', `Cost: ${(b6UpCost+b6UpCost)*upNum6} clicks`)
    }else if(upNum6 == 1){  
        cost6.setAttribute('data-content', `Cost: ${b6UpCost+b6UpCost} clicks`)
    }else{
        cost6.setAttribute('data-content', `Cost: ${b6UpCost} clicks and you need 30 previous upgrades `)
    }

    $('.left_side_up').popover({
        container: 'body',
        placement: 'right',
        trigger: 'hover',
        html: true,
    })
}