const colorBlack = document.getElementById('color-1');
colorBlack.style.backgroundColor = 'black';
const colorYellow = document.getElementById('color-2');
colorYellow.style.backgroundColor = 'yellow';
const colorBlue = document.getElementById('color-3');
colorBlue.style.backgroundColor = 'blue';
const colorGreen = document.getElementById('color-4');
colorGreen.style.backgroundColor = 'green';


const pixelBoard = document.createElement('div');
pixelBoard.id = 'pixel-board';
document.body.appendChild(pixelBoard);
let pixel = [];    
    for(let i = 1; i <= 25; i +=1){
        pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixelBoard.appendChild(pixel);
    }
  
//================================================================// 


window.onload = function start() {
        colorBlack.classList.add('selected')
    }

    
    
    let coresDaPaleta = document.getElementsByClassName("color");
    
    function addRemoveSelec(event) {
        const corSelect = document.querySelector('.selected');
        corSelect.classList.remove('selected');
        event.target.classList.add('selected');
    }

    function clickCorPaleta() {
        for (let i = 0; i < coresDaPaleta.length; i += 1) {
          coresDaPaleta[i].addEventListener("click", addRemoveSelec);
        }
      } clickCorPaleta();

     //==================================================//
     let apliCorPixel = document.querySelectorAll('.pixel');
 
     function addcolorSelec(event2){
        const corSelect = document.querySelector('.selected');
        const pixel = event2.target;
        if(corSelect === colorBlack){
            pixel.style.backgroundColor = 'black';
        }
        if(corSelect === colorYellow){
            pixel.style.backgroundColor = 'yellow';
        }
        if(corSelect === colorBlue){
            pixel.style.backgroundColor = 'blue';
        }
        if(corSelect === colorGreen){
            pixel.style.backgroundColor = 'green';
        }
     }
     
     
     function aplicaCores(){
     for (let i = 0; i < apliCorPixel.length; i += 1) {
        apliCorPixel[i].addEventListener("click", addcolorSelec);
     }
    } aplicaCores();

    
    
    
    
    
    
    let button = document.getElementById('clear-board');
    button.addEventListener('click', clear);
    function clear(){
        pixel = document.querySelectorAll('.pixel');
        for(let i = 0; i < pixel.length; i += 1)
        pixel[i].style.backgroundColor = 'white';
    }

    //=============================================================//
    
const btnVqv = document.getElementById('generate-board')

btnVqv.addEventListener('click', function () {
  pixelBoard.innerHTML = null; // apaga pixels anteriores
  let boardSize = document.getElementById('board-size').value;
  pixelBoard.style.width = (boardSize * 42) + 'px';
  boardSize *= boardSize
  // Insere a quantidade de pixels do input (ao quadrado)
  verificaInput(boardSize);
  for (let index = 0; index < boardSize; index += 1) {   
        pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixelBoard.appendChild(pixel);
    
    }
})


function verificaInput(input) {
    if (!input) alert('Board inválido!');
    else if (input < 5) boardSize = 5;
    else if (input > 50) boardSize = 50;
  }

// Bonus - Cores randomicas
// function randomColor() {
//   let randColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
//   if (randColor !== '#000000') {
//     color[1].style.backgroundColor = randColor
//     randColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
//   }
//   if (randColor !== '#000000' && randColor !== color[1].style.backgroundColor) {
//     color[2].style.backgroundColor = randColor
//     randColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
//   }
//   if (randColor !== '#000000' && randColor !== color[1].style.backgroundColor
//       && randColor !== color[2].style.backgroundColor) {
//     color[3].style.backgroundColor = randColor
//   }
// }
// window.onload = randomColor();
