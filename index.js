const start = document.querySelector("#start");
const Stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
const HTMLtime = document.querySelector("time");
let WatchTime = 0;
let timerInterval;
const StartWatch = () => {
    startTime = Date.now() - WatchTime;
    timerInterval = setInterval(function printTime() {
        WatchTime = Date.now() - startTime;
        let time = new Date(WatchTime);
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let Milliseconds = Math.floor(time.getMilliseconds() / 10);
        HTMLtime.textContent = `${minutes}:${seconds}:${Milliseconds}`
    }, 10);
}
const stopWatch = () => {
    clearInterval(timerInterval);
}

const resetWatch = () => {
    clearInterval(timerInterval);
    HTMLtime.textContent = `00:00:00`;
    WatchTime = 0;
}

start.addEventListener("click", StartWatch);
Stop.addEventListener("click", stopWatch);
reset.addEventListener("click", resetWatch);