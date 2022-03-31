import { dataHandler } from "../data/data.js"

const imgHuman = "url('/static/images/race_background/human_background.jpg')"
const humanUps = "url('/static/images/buttons_background/human-button.jpg')"

const imgOrc = "url('/static/images/race_background/orc_background.jpg')"
const orcUps = "url('/static/images/buttons_background/orc-button.jpg')"

const imgElf = "url('/static/images/race_background/elf_background.jpg')"
const elfUps = "url('/static/images/buttons_background/elf-button.jpg')"

const imgDwarf = "url('/static/images/race_background/dwarf_background.jpg')"
const dwarfUps = "url('/static/images/buttons_background/dwarf-button.jpg')"

const imgDefault = "url('/static/images/race_background/default.jpg')"


export const loadStats = async () =>{
    const stats = await dataHandler.getStats();
    if ( stats.left_side_race == 0) {
        const races = await dataHandler.getRaces();
        $('#race-picker').modal('show'); // document.querySelectorALL // document.querySelector()
        const title = document.querySelector('.modal-title');
        const body = document.querySelector('.modal-body');
        title.innerText = 'Pick a race for left side';

        body.children[0].innerText = races[0].name;
        body.children[0].setAttribute("data-race-id", `${races[0].id}`)

        body.children[1].innerText = races[1].name;
        body.children[1].setAttribute("data-race-id", `${races[1].id}`)

        body.children[2].innerText = races[2].name;
        body.children[2].setAttribute("data-race-id", `${races[2].id}`)

        body.children[3].innerText = races[3].name;
        body.children[3].setAttribute("data-race-id", `${races[3].id}`)

        const leftSide = document.querySelector('.left_side');
        leftSide.style.backgroundImage = imgDefault;
        
        leftSide.onclick = function () {
            $('#race-picker').modal('show');
         };

        const raceButtons = Array.from(body.children)
        
        raceButtons.forEach(element => {
            element.onclick = async function (e) {
                const specificRaceData = await dataHandler.pickRace(e.target.dataset.raceId);
                $('#race-picker').modal('hide');
                const upsButtons = document.querySelector('.btn-group[data-div-id="1"]');

                upsButtons.children[0].innerHTML = specificRaceData.b1 + `<span class="up-num">${stats.b1}</span>`;
                upsButtons.children[1].innerHTML = specificRaceData.b2 + `<span class="up-num">${stats.b2}</span>`;
                upsButtons.children[2].innerHTML = specificRaceData.b3 + `<span class="up-num">${stats.b3}</span>`;
                upsButtons.children[3].innerHTML = specificRaceData.b4 + `<span class="up-num">${stats.b4}</span>`;
                upsButtons.children[4].innerHTML = specificRaceData.b5 + `<span class="up-num">${stats.b5}</span>`;
                upsButtons.children[5].innerHTML = specificRaceData.b6 + `<span class="up-num">${stats.b6}</span>`;
                upsButtons.children[6].innerHTML = specificRaceData.b7 + `<span class="up-num">${stats.b7}</span>`;
                upsButtons.children[7].innerHTML = specificRaceData.b8 + `<span class="up-num">${stats.b8}</span>`;
                upsButtons.children[8].innerHTML = specificRaceData.b9 + `<span class="up-num">${stats.b9}</span>`;
                upsButtons.children[9].innerHTML = specificRaceData.b10 + `<span class="up-num">${stats.b10}</span>`;


                const buttonsBackgrounds = Array.from(upsButtons.children)

                if (specificRaceData.name == 'human'){
                    leftSide.style.backgroundImage = imgHuman;
                    buttonsBackgrounds.forEach(element => {
                        element.style.backgroundImage = humanUps
                    })

                }else if(specificRaceData.name == 'orc'){
                    leftSide.style.backgroundImage = imgOrc;
                    buttonsBackgrounds.forEach(element => {
                        element.style.backgroundImage = orcUps
                    })

                }else if(specificRaceData.name == 'elf'){
                    leftSide.style.backgroundImage = imgElf;
                    buttonsBackgrounds.forEach(element => {
                        element.style.backgroundImage = elfUps
                    })
                    
                }else if (specificRaceData.name == 'dwarf'){
                    leftSide.style.backgroundImage = imgDwarf;
                    buttonsBackgrounds.forEach(element => {
                        element.style.backgroundImage = dwarfUps
                    })

                };


                const showClicks = document.querySelector('.side-click-left')
                const clickCount = document.querySelector('.left-clicks')
                clickCount.innerText = stats.left_side_click 
                showClicks.removeAttribute('hidden')

                leftSide.onclick = ''
                
            };
        });
    };
    const specificRaceData = await dataHandler.pickRace(stats.left_side_race);
    const leftSide = document.querySelector('.left_side');
    const upsButtons = document.querySelector('.btn-group[data-div-id="1"]');

                upsButtons.children[0].innerHTML = specificRaceData.b1 + `<span class="up-num">${stats.b1}</span>`;
                upsButtons.children[1].innerHTML = specificRaceData.b2 + `<span class="up-num">${stats.b2}</span>`;
                upsButtons.children[2].innerHTML = specificRaceData.b3 + `<span class="up-num">${stats.b3}</span>`;
                upsButtons.children[3].innerHTML = specificRaceData.b4 + `<span class="up-num">${stats.b4}</span>`;
                upsButtons.children[4].innerHTML = specificRaceData.b5 + `<span class="up-num">${stats.b5}</span>`;
                upsButtons.children[5].innerHTML = specificRaceData.b6 + `<span class="up-num">${stats.b6}</span>`;
                upsButtons.children[6].innerHTML = specificRaceData.b7 + `<span class="up-num">${stats.b7}</span>`;
                upsButtons.children[7].innerHTML = specificRaceData.b8 + `<span class="up-num">${stats.b8}</span>`;
                upsButtons.children[8].innerHTML = specificRaceData.b9 + `<span class="up-num">${stats.b9}</span>`;
                upsButtons.children[9].innerHTML = specificRaceData.b10 + `<span class="up-num">${stats.b10}</span>`;


                const buttonsBackgrounds = Array.from(upsButtons.children)

                if (specificRaceData.name == 'human'){
                    leftSide.style.backgroundImage = imgHuman;
                    buttonsBackgrounds.forEach(element => {
                        element.style.backgroundImage = humanUps
                    })

                }else if(specificRaceData.name == 'orc'){
                    leftSide.style.backgroundImage = imgOrc;
                    buttonsBackgrounds.forEach(element => {
                        element.style.backgroundImage = orcUps
                    })

                }else if(specificRaceData.name == 'elf'){
                    leftSide.style.backgroundImage = imgElf;
                    buttonsBackgrounds.forEach(element => {
                        element.style.backgroundImage = elfUps
                    })
                    
                }else if (specificRaceData.name == 'dwarf'){
                    leftSide.style.backgroundImage = imgDwarf;
                    buttonsBackgrounds.forEach(element => {
                        element.style.backgroundImage = dwarfUps
                    })

                };


                const showClicks = document.querySelector('.side-click-left')
                const clickCount = document.querySelector('.left-clicks')
                clickCount.innerText = stats.left_side_click 
                showClicks.removeAttribute('hidden')


};