const irisLeft = document.querySelector("div.iris-left")
const irisRight = document.querySelector("div.iris-right")

const moveEye =function (tag, mouseX, mouseY) {
    // center of the eye 
    const eyeMidX = tag.getBoundingClientRect().left
    const eyeMidY = tag.getBoundingClientRect().top

    //find the difference between the eye and the mouse
    const diffX = mouseX - eyeMidX
    const diffY = mouseY - eyeMidY

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

document.addEventListener("mousemove", function (event) {
    moveEye(irisLeft, event.pageX, event.pageY)
    moveEye(irisRight, event.pageX, event.pageY)
})