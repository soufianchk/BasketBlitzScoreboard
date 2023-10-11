let count = 0;
let homeBtn = document.getElementById("home-btn");
let guestBtn = document.getElementById("guest-btn");

function add1H() {
    count += 1;
    homeBtn.innerText = count;
}

function add2H() {
    count += 2;
    homeBtn.innerText = count;
}

function add3H() {
    count += 3;
    homeBtn.innerText = count;
}
function add1G() {
    count += 1;
    guestBtn.innerText = count;
}
function add2G() {
    count += 2;
    guestBtn.innerText = count;
}
function add3G() {
    count += 3;
    guestBtn.innerText = count;
}
let resultElement = document.getElementById('result');
function save() {
    let homeScore = document.getElementById("home-btn").textContent;
    let guestScore = document.getElementById("guest-btn").textContent;
    document.getElementById("result").textContent = homeScore + " : " + guestScore;
    document.getElementById("home-btn").textContent = 0;
    document.getElementById("guest-btn").textContent = 0;
    count = 0;
    resultElement.textContent= homeScore + " : " + guestScore;

}
function reset() {
    count = 0;
    homeBtn.innerText = count;
    guestBtn.innerText = count;
    resultElement.textContent = "Result : ";
}
