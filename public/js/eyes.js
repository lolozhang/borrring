const irisLeft = document.querySelector("div.iris-left")
const irisRight = document.querySelector("div.iris-right")

let interval = null

// move the evyes every 3s
const startInterval = () => {
    clearInterval(interval)
    interval = setInterval (() => {
        const x = Math.random() * window.innerWidth
        const y = Math.random() * window.innerHeight

        moveEye(irisLeft, x, y)
        moveEye(irisRight, x, y)



    }, 3000)

}

const moveEye =function (tag, mouseX, mouseY) {
    // center of the eye 
    const eyeMidX = tag.getBoundingClientRect().left
    const eyeMidY = tag.getBoundingClientRect().top

    //find the difference between the eye and the mouse
    const diffX = mouseX - eyeMidX
    const diffY = mouseY - eyeMidY - window.pageYOffset

    // pythagorus theorem

    const diff = Math.sqrt(diffX * diffX + diffY * diffY)

    // what is the capped radius

    const radius = Math.min(8, diff)

    // tan in math
    const angle = Math.atan2(diffY, diffX)

    // lets get the capped version of this, based on angle
    const cappedX = radius * Math.cos(angle)
    const cappedY = radius * Math.sin(angle)

    const eyeTag = tag.querySelector("div")

    eyeTag.style.left = cappedX + "px"
    eyeTag.style.top = cappedY + "px"

}

startInterval()

document.addEventListener("mousemove", function (event) {
    startInterval()
    moveEye(irisLeft, event.pageX, event.pageY)
    moveEye(irisRight, event.pageX, event.pageY)
})

const background = document.querySelector("body");

const getRandomNumber = (MIN, MAX) => {
  return Math.ceil(Math.random() * (MAX - MIN) + MIN);

}

const getRandomColor = () => {
  const h = getRandomNumber(0, 360);
  const s = getRandomNumber(90, 100);
  const l = getRandomNumber(80, 90);
  return `hsl(${h}deg, ${s}%, ${l}%)`;
};

const setBackgroundColor = () => {
  const randomColor = getRandomColor();
  background.style.backgroundColor = randomColor;
  background.style.transition = "all 6s";
};

setBackgroundColor();

setInterval(() => {
  setBackgroundColor();
}, 6000);