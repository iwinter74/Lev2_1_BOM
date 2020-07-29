// Nutze 
// window.onload
// setInterval()
// clearInterval()
// getElementsByClassName()/getElementById()
// if, else if

let counter = document.getElementById("count")
let myCount = 10
let message = document.querySelector(".message")


window.addEventListener('load', (event) => {
    let countDown = setInterval(function () {
        if (myCount > 0) {
        myCount--
        counter.innerHTML = `0${myCount}`
    } else {
        message.className = "hidden"
        clearInterval(countDown)
    } }, 1000);
  });



