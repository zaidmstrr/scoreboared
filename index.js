
let homeCnt = document.getElementById("count-ch")
let guestCnt = document.getElementById("count-gs")
let hcount = 0
let gcount = 0
function homeplus1(){
    hcount += 1
    homeCnt.textContent = hcount
}
function homeplus2(){
    hcount += 2
    homeCnt.textContent = hcount
}
function homeplus3(){
    hcount += 3
    homeCnt.textContent = hcount
}

function guestplus1(){
    gcount += 1
    guestCnt.textContent = gcount;
}
function guestplus2(){
    gcount += 2
    guestCnt.textContent = gcount;
}
function guestplus3(){
    gcount += 3
    guestCnt.textContent = gcount;
}