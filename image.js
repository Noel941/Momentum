const body = document.querySelector("body");
const IMG_NUM = 19;


function paintImage(imageNum) {
    const image = new Image();
    image.src = `./pictures/${imageNum + 1}.jpg`
    image.classList.add("bgImage")
    body.appendChild(image)
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUM)
    paintImage(number);
}

function imageDisplay() {
    const randomNumber = genRandom();
}

imageDisplay();