import { INITIALUPGRADE, leftUps } from "./clickAndB1events.js"

const b10UpCost = INITIALUPGRADE * 1000000000
    export const b10 = async () =>{
    const b10 = leftUps.children[9]
    b10.onclick = function(){
        let leftClicks = document.querySelector(".left-clicks")
        let upNum10 = b10.children[0].innerHTML;
        let previousUp = leftUps.children[8].children[0].innerText
        if (upNum10 > 10){
            if ( parseInt(leftClicks.innerText) >= ( b10UpCost*(upNum10*upNum10) )) {
                b10.children[0].innerText = parseInt(b10.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - b10UpCost*(upNum10*upNum10)
                upNum10 += 1
            }
        }else if (upNum10 > 1 ){
            if ( parseInt(leftClicks.innerText) >= ( (b10UpCost+b10UpCost)*upNum10 )) {
                b10.children[0].innerText = parseInt(b10.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - (b10UpCost+b10UpCost)*upNum10
                upNum10 += 1
            } 
        }else if(upNum10 == 1){
            if ( parseInt(leftClicks.innerText) >= ( b10UpCost+b10UpCost )) {
                b10.children[0].innerText = parseInt(b10.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - (b10UpCost+b10UpCost)
                upNum10 += 1
            } 
        }else{
            if ( parseInt(leftClicks.innerText) >= b10UpCost && previousUp >= 50) {
                b10.children[0].innerText = parseInt(b10.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - b10UpCost
                upNum10 += 1
            } 
        }
    }
    b10.addEventListener('mouseover', showCost)
        
    }

function showCost(){
    let cost10 = document.querySelector('.left_side_up[data-button-id="10"]')
    let b10 = leftUps.children[9]
    let upNum10 = b10.children[0].innerHTML;

    if (upNum10 > 10){
        cost10.setAttribute('data-content', `Cost: ${(b10UpCost*upNum10)*upNum10} clicks `)
    }else if (upNum10 > 1 ){
        cost10.setAttribute('data-content', `Cost: ${(b10UpCost+b10UpCost)*upNum10} clicks`)
    }else if(upNum10 == 1){  
        cost10.setAttribute('data-content', `Cost: ${b10UpCost+b10UpCost} clicks`)
    }else{
        cost10.setAttribute('data-content', `Cost: ${b10UpCost} clicks and you need 50 previous upgrades `)
    }

    $('.left_side_up').popover({
        container: 'body',
        placement: 'right',
        trigger: 'hover',
        html: true,
    })
}