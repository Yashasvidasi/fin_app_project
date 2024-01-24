const sbutton = document.getElementById("startbtn");
const mainarea = document.getElementById("game-container");
let colors = ['blue', 'red', 'yellow', 'green'];
let cards = [];
let shuffledcards = [];
let buttons = [];
let matches = [];
let scr = 0;
const score = document.getElementById("score");

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function startgame(){
    text = ``;
    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
            obj={button:`${i}b${j}`,color:colors[(i+j)%4],click:0};
            cards.push(obj);
        }   
    }
    
    shuffledcards = shuffle(cards);
    
    buildeck();
    initcards();
    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function check(){
    
}

function donthn(){
    console.log("ok");
}



function initcards(){
    for(let i = 0; i<64; i++){
        let b = document.getElementById(shuffledcards[i].button);
        b.onclick = async function(){
            
            for(let j = 0; j<64; j++){
                if (b.id == shuffledcards[j].button){
                    if(shuffledcards[j].click == 0){
                        b.innerText = shuffledcards[j].color;
                        b.setAttribute("style",`color:${shuffledcards[j].color};margin-right: 20px; margin-bottom: 20px;`);
                        shuffledcards[j].click = 1;
                        matches.push(shuffledcards[i]);
                    }
                    else{
                        b.innerText = "\\";
                        b.style.removeProperty("color");
                        shuffledcards[j].click = 0;
                        matches.shift();
                    }
                }
            }
            
            if(matches.length > 2){
                matches.shift();
            }
            if(matches.length > 1){
                
                if(matches[0].color == matches[1].color){
                    b1 = document.getElementById(matches[0].button);
                    b2 = document.getElementById(matches[1].button);
                    scr = scr+1;
                    score.innerText = scr;
                    b1.onclick = donthn;
                    b2.onclick = donthn;
                    matches.shift();
                    matches.shift();
                }
                else{
                    await sleep(400);
                    b1 = document.getElementById(matches[0].button);
                    b2 = document.getElementById(matches[1].button);
                    b1.click();
                    b2.click();
                }
            }
            
        };
        
    }
    
}


function buildeck(){
    mainarea.innerHTML = ``;
    for(let i = 0; i<64; i++){
        if(i%8 == 0){
            let t = mainarea.innerHTML;
            t=t+`<br>`;
            mainarea.innerHTML = t;
        }
        let t = mainarea.innerHTML;
        t=t+`<button style="margin-right: 20px; margin-bottom: 20px;" id = ${shuffledcards[i].button}>\\</button>`;
        mainarea.innerHTML = t;
        buttons.push(mainarea.lastChild);
        
    }
        
}


sbutton.onclick = startgame;