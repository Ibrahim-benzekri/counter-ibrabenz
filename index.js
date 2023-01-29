let dec = document.getElementById("Decrement");
let inc = document.getElementById("Increment");
let reset = document.getElementById("Reset");
window.addEventListener("keydown",keychoice);
function keychoice(elemnt){
    switch(elemnt.key){
        case "ArrowUp":
            count+=1;
            number.textContent = count;
            break;
        case "ArrowDown":
            count-=1;
            number.textContent = count ;
            break;
        default:
            count = 0;
            number.textContent = count;
    }
}


dec.addEventListener("click",decrementFunction);
inc.addEventListener("click",incrementFunction);
reset.addEventListener("click",resetFunction);
let number = document.querySelector("#number");
let count=0;

function decrementFunction(){
    count-=1;
    number.textContent = count ; 
}

function incrementFunction(){
    count+=1;
    number.textContent = count;
}

function resetFunction(){
    count = 0;
    number.textContent = count;
}

