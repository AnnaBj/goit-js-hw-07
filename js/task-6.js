const controlsDiv = document.getElementById("controls");
const inputElement = controlsDiv.querySelector("input");
const createButton = controlsDiv.querySelector("[data-create]");
const destroyButton = controlsDiv.querySelector("[data-destroy]");
const boxesDiv = document.getElementById("boxes");

createButton.addEventListener("click", function () {
  destroyBoxes();
  const amount = parseInt(inputElement.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputElement.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const initialSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const boxSize = initialSize + i * 10;
    const boxColor = getRandomHexColor();

    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = boxColor;

    boxesDiv.appendChild(box);
  }
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
