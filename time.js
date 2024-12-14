const clockDisplay = document.querySelector(".clock-display");
const clockTime = clockDisplay.querySelector(".clock-number");

function getTime() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    clockTime.innerHTML = `${hours < 10 ? `0${hours}` : `${hours}`}:${minutes < 10 ? `0${minutes}` : `${minutes}`}`;

}

function setTime() {
    setInterval(getTime, 1000);
}

setTime();