let color = "black";
let click = true;

// Creates divs and adds hover events to them
export const populateBoard = () => {
  let board = document.querySelector(".paint__board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());

  let screenSize = 80;

  board.style.gridTemplateColumns = `repeat(${screenSize} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${screenSize} , 1fr)`;

  for (let i = 0; i < screenSize ** 2; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", (e) => {
      colorSquare(e);
    });
    square.style.backgroundColor = "white";
    board.appendChild(square);
  }
};

// Changes div background to the variable color, or randomizes a number if the variable is random
export const colorSquare = (e) => {
  if (click) {
    if (color === "random") {
      e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      e.target.style.backgroundColor = color;
    }
  }
};

// Sets global variable to specific color choice
export const changeColor = (choice) => {
  color = choice;
};

// Changes divs background to white
export const resetBoard = () => {
  let board = document.querySelector(".paint__board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
};

// Changes global variable to true or false
export const toggleDraw = (e) => {
  if (e.target.tagName != "BUTTON") {
    click = !click;
    if (click) {
      document.querySelector(".paint__mode").textContent = "Mode: Coloring";
    } else {
      document.querySelector(".paint__mode").textContent = "Mode: Not Coloring";
    }
  }
};
