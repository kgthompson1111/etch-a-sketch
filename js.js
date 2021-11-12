// HTML variables parsed into javascript
const body = document.querySelector('body');
const reset = document.getElementById('resetButton');
var canvasSize = 20;

//draw one container with a light grey background. height-width TBD

function drawContainer(containerSize) {
    // canvas width in 20x20 units and pixels
    var containerWidth = containerSize;
    var containerHeight = containerSize;
    var containerWidthPixels = containerWidth*20;
    var containerHeightPixels = containerHeight*20;
    // # of squares
    canvasSize = containerWidth*containerWidth; 

    const container = document.createElement('div');
    container.id = 'container';
    container.setAttribute('style', 'padding: 0px; display: flex; flex-wrap: wrap');
    container.style.width = `${containerWidthPixels}px`;
    container.style.height = `${containerHeightPixels}px`;
    body.appendChild(container);
}

// draws a grid of specified size

function drawGrid(size) {

    //for loop that draws an amount of divs

    for (i = 1; i <= size; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = 'gridDiv';
        newDiv.setAttribute('style', 'background: #f8f8ff; height: 20px; width: 20px; margin: 0px');
        container.appendChild(newDiv);
    }

    // add eventlistened to divs to make them change to black on mouseover

    const gridDivs = document.querySelectorAll('.gridDiv');
        gridDivs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        });
    });
}


drawContainer(canvasSize);
drawGrid(canvasSize);

reset.addEventListener('click', () => {
    var newSize = parseInt(prompt("What width of container do you want m8?", ""));
    while (newSize > 100) {
        newSize = parseInt(prompt("Nope, under 100 squares BUD", ""));
    }
    const container = document.querySelector('#container');
    container.remove();
    drawContainer(newSize);
    var redrawNumberOfSquares = newSize*newSize;
    drawGrid(redrawNumberOfSquares);
})