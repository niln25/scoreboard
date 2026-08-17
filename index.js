let homeEl = document.getElementById("home") 
let homeScore = 0
homeEl.textContent = homeScore

function oneH() {
    homeScore += 1
    homeEl.textContent = homeScore
}

function twoH() {
    homeScore += 2
    homeEl.textContent = homeScore
}

function threeH() {
    homeScore += 3
    homeEl.textContent = homeScore
}

// ------------------------------------------------------------guest

let guestEl = document.getElementById("guest") 
let guestScore = 0
guestEl.textContent = guestScore

function oneG() {
    guestScore += 1
    guestEl.textContent = guestScore
}

function twoG() {
    guestScore += 1
    guestEl.textContent = guestScore
}

function threeG() {
    guestScore += 1
    guestEl.textContent = guestScore
}