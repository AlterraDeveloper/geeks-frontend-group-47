// DOM - Document Object Model

// Search elements

// let counterValue = document.querySelector("#counter");

// counterValue.innerText = "TEST";
// counterValue.textContent = 555;

// let minusButton = document.getElementById("decrease");
// minusButton.textContent = "minus";
// minusButton.style.color = "yellow";
// minusButton.style.border = "10px dashed purple";

// let resetButton =
//     document.getElementsByClassName("reset-btn")[0];
// let resetButton =
//     document.querySelector(".reset-btn");
// resetButton.textContent = "СБРОС";

// let plusButton = document.getElementsByTagName("button")[2];
// let plusButton =
//     document.querySelector(".buttons button:last-child");
// plusButton.remove();

// YAGNI - You Aren't Gonna Need It
// KISS - Keep It Simple and Stupid
// DRY - Don't repeat yourself

let counterValue = document.querySelector("#counter");
let minusButton = document.querySelector("#decrease");
let resetButton = document.querySelector("#reset");
let plusButton = document.querySelector("#increase");

function plusCounter() {
  let currentValue = Number(counterValue.textContent);
  currentValue += 1;
  counterValue.textContent = currentValue;
  setCounterColor();
}

function resetCounter() {
  counterValue.textContent = 0;
  setCounterColor();
}

function minusCounter() {
  let currentValue = Number(counterValue.textContent);
  currentValue -= 1;
  counterValue.textContent = currentValue;
  setCounterColor();
}

function setCounterColor() {
  let currentValue = counterValue.textContent;
  if (currentValue > 0) {
    counterValue.style.color = "green";
  } else if (currentValue < 0) {
    counterValue.style.color = "red";
  } else {
    counterValue.style.color = "cyan";
  }
}

plusButton.addEventListener("click", plusCounter);
resetButton.addEventListener("click", resetCounter);
minusButton.onclick = minusCounter;
