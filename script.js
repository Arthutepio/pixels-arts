let colorBlack = document.getElementById('color-1');
colorBlack.style.backgroundColor = 'black';
let colorYellow = document.getElementById('color-2');
colorYellow.style.backgroundColor = 'yellow';
let colorBlue = document.getElementById('color-3');
colorBlue.style.backgroundColor = 'blue';
let colorGreen = document.getElementById('color-4');
colorGreen.style.backgroundColor = 'green';

function criaTag(){
    let count = [];
    for (let i = 1; i <= 25; i +=1){
        count.push(i)
    }
    let quadroPixels = document.createElement('div');
    quadroPixels.id = 'pixel-board';
    document.body.appendChild(quadroPixels);
    for(let i in count){
        let pixel = document.createElement('div');
        pixel.classList.add('pixel')
        quadroPixels.appendChild(pixel);
    }
    }
    criaTag()