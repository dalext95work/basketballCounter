let homePoint = document.getElementById("home-point")
let guestPoint = document.getElementById("guest-point")
pointHome = 0
pointGuest = 0
console.log(homePoint)

function plus1(){
    pointHome +=1
    homePoint.textContent = pointHome
}

function plus2(){
    pointHome +=2
    homePoint.textContent = pointHome
}
function plus3(){
    pointHome +=3
    homePoint.textContent = pointHome
}

function plus11(){
    pointGuest +=1
    guestPoint.textContent = pointGuest
}

function plus22(){
    pointGuest +=2
    guestPoint.textContent = pointGuest
}
function plus33(){
    pointGuest +=3
    guestPoint.textContent = pointGuest
}

function newgame(){
    homePoint.textContent = 0
    guestPoint.textContent = 0
    pointHome = 0
    pointGuest = 0
}