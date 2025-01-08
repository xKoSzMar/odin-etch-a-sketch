const data = {
  genButton: document.querySelector("#generateButton"),
  resButton: document.querySelector("#resetButton"),
  numInput: document.querySelector("#number"),
  colorInput: document.querySelector("#color"),
  grid: document.querySelector("#grid"),
  gridWidth: document.querySelector("#grid").offsetWidth,
  gridHeight: document.querySelector("#grid").offsetHeight,
  gridNumber: null,
  currentColor: document.querySelector("#color").value,
  squares: document.querySelectorAll(".square"),
  painting: false,
};

data.genButton.addEventListener("click", generateGrid);
data.resButton.addEventListener("click", resetGrid);

data.numInput.addEventListener("keyup", (e) => {
  if (e.target.value < 1) {
    e.target.value = 1;
  } else if (e.target.value > 100) {
    e.target.value = 100;
  }
});

data.colorInput.addEventListener("change", () => {
  data.currentColor = data.colorInput.value;
});

data.grid.addEventListener("click", () => (data.painting = !data.painting));

function generateGrid() {
  if (data.numInput.value === "") {
    return;
  }

  while (data.grid.firstChild) {
    data.grid.removeChild(data.grid.firstChild);
  }

  data.gridNumber = parseInt(data.numInput.value);

  for (let i = 0; i < data.gridNumber * data.gridNumber; i++) {
    const square = document.createElement("div");
    const width = data.gridWidth / data.gridNumber;
    const height = data.gridHeight / data.gridNumber;
    square.classList.add("square");
    square.style.cssText = `width: ${width}px; height: ${height}px; background-color: #fff; border: 1px solid black`;
    data.grid.appendChild(square);
  }

  data.squares = document.querySelectorAll(".square");

  for (let i = 0; i < data.squares.length; i++) {
    data.squares[i].addEventListener("mouseover", (e) => {
      if (data.painting) {
        e.target.style.backgroundColor = data.currentColor;
      }
    });
  }
}

function resetGrid() {
  for (let i = 0; i < data.squares.length; i++) {
    data.squares[i].style.backgroundColor = "#fff";
  }
}
