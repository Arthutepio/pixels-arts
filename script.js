function randomColor() {
  const color1 = Math.floor(Math.random() * 10 * 25.5);
  const color2 = Math.floor(Math.random() * 10 * 25.5);
  const color3 = Math.floor(Math.random() * 10 * 25.5);
  const rGBColor = `rgb(${color1}, ${color2}, ${color3})`;
  return rGBColor;
}

const colorBlack = document.getElementById('color-1');
colorBlack.style.backgroundColor = 'black';
const colorOne = document.getElementById('color-2');
colorOne.style.backgroundColor = randomColor();
const colorTwo = document.getElementById('color-3');
colorTwo.style.backgroundColor = randomColor();
const colorThree = document.getElementById('color-4');
colorThree.style.backgroundColor = randomColor();

const pixelBoard = document.createElement('div');
pixelBoard.id = 'pixel-board';
document.body.appendChild(pixelBoard);
let gridSize = 5;

function generatePixelBoard(size) {
  for (let i = 1; i <= size * size; i += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelBoard.style.width = `${(size * 40) + (size * 2)}px`;
    pixelBoard.style.he = `${(size * 40) + (size * 2)}px`;
    pixelBoard.appendChild(pixel);
  }
}

generatePixelBoard(gridSize);

window.onload = function start() {
  colorBlack.classList.add('selected');
};

const palleteColor = document.getElementsByClassName('color');
const pixelList = document.getElementsByClassName('pixel');
let selectedPixel = document.querySelector('#color-1');
let selectedCSS = window.getComputedStyle(selectedPixel, null);
let selectedColor = selectedCSS.getPropertyValue('background-color');
let pixelTarget;

function colorSelector(event) {
  if (event.target.classList.contains('color')) {
    for (let i = 0; i < palleteColor.length; i += 1) {
      palleteColor[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
    selectedPixel = document.querySelector('.selected');
    selectedCSS = window.getComputedStyle(selectedPixel, null);
    selectedColor = selectedCSS.getPropertyValue('background-color');
  }
}

document.addEventListener('click', colorSelector, true);

function paintThePixel(event) {
  if (event.target.classList.contains('pixel')) {
    pixelTarget = event.target;
    pixelTarget.style.backgroundColor = selectedColor;
  }
}
document.addEventListener('click', paintThePixel, true);

const clearBtn = document.getElementById('clear-board');

function clearBoard() {
  for (let index = 0; index < pixelList.length; index += 1) {
    pixelList[index].style.backgroundColor = 'white';
  }
}

clearBtn.addEventListener('click', clearBoard);

const input = document.getElementById('board-size');

input.setAttribute('min', 1);

const vqvBtn = document.getElementById('generate-board');
vqvBtn.innerText = 'VQV';

function removePixels() {
  const pixelRemoveList = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelRemoveList.length; index += 1) {
    pixelRemoveList[index].remove();
  }
}

function boardSizer() {
  gridSize = input.value;
  if (gridSize === '') {
    alert('Board inválido!');
  }
  if (gridSize < 5) {
    gridSize = 5;
  }
  if (gridSize > 50) {
    gridSize = 50;
  }
  removePixels();
  generatePixelBoard(gridSize);
}

vqvBtn.addEventListener('click', boardSizer);
