const board = document.querySelector("#container");

function renderSquare() {
  // <div class="square"></div>
  const div = document.createElement("div");
  div.className = "square";
  return div;
}

function squareTurnOn(event) {
  const colors = ["red", "yellow", "lightgreen", "blue", "pink"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  event.target.style.backgroundColor = randomColor;
}

function squareTurnOff(event) {
  event.target.style.backgroundColor = "#1d1d1d";
}

function renderBoard(count) {
  board.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const div = renderSquare();
    board.appendChild(div);
    div.addEventListener("mouseover", squareTurnOn);
    div.onmouseleave = squareTurnOff;
  }
}

const sizes = {
  S: 200,
  M: 400,
  L: 600,
};

const sizesButtons = document.querySelectorAll("#panel input");

for (const sizeButton of sizesButtons) {
  sizeButton.addEventListener("change", changeSize);
}

// hoisting - поднятие, всплытие, хоистинг
function changeSize(event) {
  switch (event.target.value) {
    case "S":
      renderBoard(sizes.S);
      break;
    case "M":
      renderBoard(sizes.M);
      break;
    case "L":
      renderBoard(sizes.L);
      break;
  }
}

renderBoard(sizes.S);
