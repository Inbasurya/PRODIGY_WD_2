let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let savedTime = 0;

function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
    }
}

function pauseTimer() {
    if (running) {
        clearInterval(tInterval);
        savedTime += difference;
        running = false;
    }
}

function resetTimer() {
    clearInterval(tInterval);
    running = false;
    savedTime = 0;
    display.innerHTML = "00:00:00";
    laps.innerHTML = "";
}

function lapTimer() {
    let li = document.createElement("li");
    li.innerText = display.innerText;
    laps.appendChild(li);
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = (updatedTime - startTime) + savedTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000));

    display.innerHTML = (hours < 10 ? "0" + hours : hours) + ":" +
                        (minutes < 10 ? "0" + minutes : minutes) + ":" +
                        (seconds < 10 ? "0" + seconds : seconds) + "." +
                        (milliseconds < 10 ? "0" + milliseconds : milliseconds);
}

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
reset.addEventListener("click", resetTimer);
lap.addEventListener("click", lapTimer);
