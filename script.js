let homeScore = 0;
let guestScore = 0;
let period = 0;
document.getElementById("homescore-el").textContent = homeScore;
document.getElementById("guestscore-el").textContent = guestScore;
document.getElementById("period-el").textContent = period;

function add1() {
    // console.log("boom tchakalaka");
    homeScore+= 1;
    // console.log(homeScore);
    document.getElementById("homescore-el").textContent = homeScore;
}
function add1() {
    // console.log("boom tchakalaka");
    homeScore += 1;
    // console.log(homeScore);
    document.getElementById("homescore-el").textContent = homeScore;
}
function add2() {
    // console.log("boom tchakalaka");
    homeScore += 2;
    // console.log(homeScore);
    document.getElementById("homescore-el").textContent = homeScore;
}
function add3() {
    // console.log("boom tchakalaka");
    homeScore += 3;
    // console.log(homeScore);
    document.getElementById("homescore-el").textContent = homeScore;
}

//guest score board controls
function add1guest() {
    // console.log("boom tchakalaka");
    guestScore += 1;
    // console.log(homeScore);
    document.getElementById("guestscore-el").textContent = guestScore;
}


function add2guest() {
    // console.log("boom tchakalaka");
    guestScore += 2;
    // console.log(homeScore);
    document.getElementById("guestscore-el").textContent = guestScore;
}

function add3guest() {
    // console.log("boom tchakalaka");
    guestScore += 3;
    // console.log(homeScore);
    document.getElementById("guestscore-el").textContent = guestScore;
}
function roundincrement() {
    period += 1;
    document.getElementById("period-el").textContent = period;
}
function rounddecrement() {
    period -= 1;
    document.getElementById("period-el").textContent = period;
}
function reset() {
    homeScore = 0;
    guestScore = 0;
    period = 0;
    // console.log(homeScore);
    document.getElementById("homescore-el").textContent = homeScore;
    document.getElementById("guestscore-el").textContent = guestScore;
    document.getElementById("period-el").textContent = period;
    // console.log("reset button is clicked");
}