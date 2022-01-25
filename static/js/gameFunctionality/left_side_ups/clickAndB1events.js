import { dataHandler } from "../../data/data.js";

export let INITIALUPGRADE = 10;
const stats = await dataHandler.getStats()
export let LEFTCLICKPOWER = stats.left_side_click_power
export const leftUps = document.querySelector('.btn-group[data-div-id="1"]')


export const clickAndB1events = async () =>{
    const clickArea = document.querySelector('.left_side')
    clickArea.onclick = function () {
        let clicks = document.querySelector('.left-clicks')
        clicks.innerText = parseInt(clicks.innerText) + LEFTCLICKPOWER
    }
    let b1 = leftUps.children[0]
    b1.onclick = function(){
        let leftClicks = document.querySelector(".left-clicks")
        let upNum1 = b1.children[0].innerHTML
        if (upNum1 > 10){
            if ( parseInt(leftClicks.innerText) >= ( INITIALUPGRADE*(upNum1*upNum1) )) {
                b1.children[0].innerText = parseInt(b1.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - INITIALUPGRADE*(upNum1*upNum1)
                LEFTCLICKPOWER += 1
            }
        }else if (upNum1 > 1 ){
            if ( parseInt(leftClicks.innerText) >= ( (INITIALUPGRADE+INITIALUPGRADE)*upNum1 )) {
                b1.children[0].innerText = parseInt(b1.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - (INITIALUPGRADE+INITIALUPGRADE)*upNum1
                LEFTCLICKPOWER += 1
            } 
        }else if(upNum1 == 1){
            if ( parseInt(leftClicks.innerText) >= ( INITIALUPGRADE+INITIALUPGRADE )) {
                b1.children[0].innerText = parseInt(b1.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - (INITIALUPGRADE+INITIALUPGRADE)
                LEFTCLICKPOWER += 1
            } 
        }else{
            if ( parseInt(leftClicks.innerText) >= INITIALUPGRADE) {
                b1.children[0].innerText = parseInt(b1.children[0].innerText) + 1
                leftClicks.innerText = parseInt(leftClicks.innerText) - INITIALUPGRADE
                LEFTCLICKPOWER += 1
            } 
        }
    }
    b1.addEventListener('mouseover', showCost)
}


function showCost(){
    let cost1 = document.querySelector('.left_side_up[data-button-id="1"]')
    let b1 = leftUps.children[0]
    let upNum1 = b1.children[0].innerHTML;
    if (upNum1 > 10){
        cost1.setAttribute('data-content', `Cost: ${(INITIALUPGRADE*upNum1)*upNum1} clicks `)
    }else if (upNum1 > 1 ){
        cost1.setAttribute('data-content', `Cost: ${(INITIALUPGRADE+INITIALUPGRADE)*upNum1} clicks`)
    }else if(upNum1 == 1){  
        cost1.setAttribute('data-content', `Cost: ${INITIALUPGRADE+INITIALUPGRADE} clicks`)
    }else{
        cost1.setAttribute('data-content', `Cost: ${INITIALUPGRADE} clicks`)
    }

    $('.left_side_up').popover({
        container: 'body',
        placement: 'right',
        trigger: 'hover',
        html: true,
    })
}