const start = document.querySelector("#start");
const Stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
const HTMLtime = document.querySelector("time");
const divMinutes = document.querySelector(".minutes");
const divSeconds = document.querySelector(".seconds");
const divMillsec = document.querySelector(".millsec");
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
        const desplay = minutes ? "inline" : "none";
        divMinutes.style.display = desplay;
        divMinutes.textContent = ` ${minutes}`
        divSeconds.textContent = ` ${seconds}`
        divMillsec.textContent = ` ${Milliseconds}`
    }, 10);
    Stop.style.display = "inline";
    start.style.display = "none";
}
const stopWatch = () => {
    start.style.display = "inline";
    Stop.style.display = "none";
    clearInterval(timerInterval);
    divMinutes.textContent = ` ${minutes}`
    divSeconds.textContent = ` ${seconds}`
    divMillsec.textContent = ` ${Milliseconds}`

}

const resetWatch = () => {
    clearInterval(timerInterval);
    divMinutes.style.display = "none";
    divSeconds.textContent = ` 0`
    divMillsec.textContent = ` 00`
    WatchTime = 0;
}

start.addEventListener("click", StartWatch);
Stop.addEventListener("click", stopWatch);
reset.addEventListener("click", resetWatch);