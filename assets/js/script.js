"use strict";

const previousButton = document.querySelector(".buttons .previous");
const nextButton = document.querySelector(".buttons .next");
const box = document.querySelector(".box");
let degree = 0;

function previous() {
    degree += 90;
    box.style = `transform: perspective(1000px) rotateY(${degree}deg);`;
}

function next() {
    degree -= 90;
    box.style = `transform: perspective(1000px) rotateY(${degree}deg);`;
}

previousButton.addEventListener("click", previous);
nextButton.addEventListener("click", next);
setInterval(next, 6000);