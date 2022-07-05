const colorBlack = document.getElementById('color-1');
colorBlack.style.backgroundColor = 'black';
const colorYellow = document.getElementById('color-2');
colorYellow.style.backgroundColor = 'yellow';
const colorBlue = document.getElementById('color-3');
colorBlue.style.backgroundColor = 'blue';
const colorGreen = document.getElementById('color-4');
colorGreen.style.backgroundColor = 'green';

function criaTag() {
    let count = [];
    for (let i = 1; i <= 25; i +=1){
        count.push(i)
    }
    let quadroPixels = document.createElement('div');
    quadroPixels.id = 'pixel-board';
    document.body.appendChild(quadroPixels);
    for(let i in count){
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        quadroPixels.appendChild(pixel);
    }
    }
    criaTag();
    
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
