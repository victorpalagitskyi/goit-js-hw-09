
const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const body = document.querySelector("body")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

start.addEventListener("click", changeColorEverySec)

function changeColorEverySec() {
const intervalId = setInterval(changeColorEverySec, 1000)
    body.style.backgroundColor = getRandomHexColor();
    start.disabled = true
    stop.disabled = false
 stop.addEventListener("click", stopChangrColor)
    function stopChangrColor() { 
        clearInterval(intervalId)
        start.disabled = false
        stop.disabled = true
}
}


