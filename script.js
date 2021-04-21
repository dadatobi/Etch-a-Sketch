const container = document.querySelector('#container');
const gridContainer = document.querySelector('.gridContainer');
const reset = document.querySelector('#reset');
const changeGridSize = document.querySelector('#gridS');
var divBoxes, grid;
// create n*n no of div boxes

grid = prompt("enter the number for your grid per side", " ");

function creatGrid(grid) {
    for (let i=0; i< grid*grid; i++){
        const divElement = document.createElement('div');
        divElement.classList.add('box');
        gridContainer.style.gridTemplateColumns = `repeat(${grid}, 1fr)`
        gridContainer.style.gridTemplateRows = `repeat(${grid}, 1fr)`
        container.appendChild(divElement);
    };
    divBoxes = document.querySelectorAll('.box');
    divBoxes.forEach((box) => {
         box.addEventListener('mouseover', function() {
              box.classList.add('playing'); 
                });
            });
};

function createDivBox(grid){
    if (grid<=100) {
        creatGrid(grid);
    }else {
    alert('enter a number not more than 100');
    grid = prompt("enter the number for your grid per side", " ");
    creatGrid(grid);
    }
};

reset.addEventListener('click', function(){
    divBoxes.forEach((box) => {
        box.classList.remove('playing')
    });
});

changeGridSize.addEventListener('click', function(){
    window.location.reload();
    
});

createDivBox(grid);
