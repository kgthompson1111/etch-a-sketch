// HTML variables parsed into javascript (body and button)
const body = document.querySelector('body');
const reset = document.getElementById('resetButton');

// Making a variable for the size of square ("pixel size")
var squareSize = 60;
var countSquares;

//draw one container with a light grey background. height-width always 960
function drawContainer() {
    var containerWidthPixels = 960;
    var containerHeightPixels = 960;
    const container = document.createElement('div');
    container.id = 'container';
    container.setAttribute('style', 'padding: 0px; display: flex; flex-wrap: wrap; background: blue');
    container.style.width = `${containerWidthPixels}px`;
    container.style.height = `${containerHeightPixels}px`;
    body.appendChild(container);
}

// draws a grid which changes its resolution based on size variable.

function drawGrid(size) {
    //for loop that draws an amount of divs
    squareSize = (960/size);
    countSquares = (size*size);
    for (i = 1; i <= countSquares; i++) {
        var newDiv = document.createElement('div');
        newDiv.className = 'gridDiv';
        newDiv.setAttribute('style', 'background: #f8f8ff; margin: 0px');
        newDiv.style.width = `${squareSize}px`;
        newDiv.style.height = `${squareSize}px`;
        container.appendChild(newDiv);
    }

    // add eventlistener to divs to make them change to black on mouseover
    const gridDivs = document.querySelectorAll('.gridDiv');
        gridDivs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        });
    });
}


drawContainer();
drawGrid(60);

reset.addEventListener('click', () => {
    var newSquareSize = parseInt(prompt("What width of container do you want m8?", ""));
    while (newSquareSize > 100) {
        newSquareSize = parseInt(prompt("Nope, under 100 squares BUD", ""));
    }
    const container = document.querySelector('#container');
    container.remove();
    drawContainer();
    drawGrid(newSquareSize);
})