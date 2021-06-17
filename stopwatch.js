let buttonStart = document.getElementById('button-start');
let buttonStop = document.getElementById('button-stop');
let buttonReset = document.getElementById('button-reset');
let seconds = 0;
let hundredths = 0;
let interval;
let hundredthsContainer = document.getElementById("hundredths");
let secondsContainer = document.getElementById("seconds");

buttonStart.onclick = function () {
    clearInterval(interval);
    interval = setInterval(tick, 10);
}

buttonStop.onclick = function () {
    clearInterval(interval);
}

buttonReset.onclick = function () {
    clearInterval(interval);
    hundredths = seconds = 0;
    printClock(seconds, hundredths);
}

function tick() {
    hundredths++;
    !(hundredths %= 100) && seconds++;
    printClock(seconds, hundredths);
}

function addLeadingZeros(number) {
    return (number > 9) ? number : "0" + number;
}

function printClock(seconds, hundredths) {
    secondsContainer.innerHTML = addLeadingZeros(seconds);
    hundredthsContainer.innerHTML = addLeadingZeros(hundredths);
}