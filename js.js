// HTML variables parsed into javascript (body and button)
const body = document.querySelector('body');
const reset = document.getElementById('resetButton');

// Making a variable for the size of square ("pixel size")
var squareSize = 60;
var countSquares;
var modeType = "rainbow";

function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//draw one container with a light grey background. height-width always 960
function drawContainer() {
    var containerWidthPixels = 960;
    var containerHeightPixels = 960;
    const container = document.createElement('div');
    container.id = 'container';
    container.setAttribute('style', 'padding: 0px; display: flex; flex-wrap: wrap; background: white; border: solid 2px black; margin-top: 10px');
    container.style.width = `${containerWidthPixels}px`;
    container.style.height = `${containerHeightPixels}px`;
    body.appendChild(container);
}

// rainbow event handler and event object functions
function rainbow(e) {
    let divOpacity = Number(e.target.style.opacity);
    if (e.target.style.backgroundColor == "rgb(248, 248, 255)" || e.target.style.backgroundColor == "black") {
        var randomColor = generateRandomColor();
        e.target.style.backgroundColor = `${randomColor}`;
        divOpacity = 1;
    }

    if(divOpacity > 0) {
    divOpacity = (divOpacity-0.1);
    e.target.style.opacity = divOpacity;
    }
}

function rainbowMode() {
    const gridDivs = document.querySelectorAll('.gridDiv');
    gridDivs.forEach((div) => {
    div.removeEventListener('mouseover', rainbow);
    div.removeEventListener('mouseover', black);
    div.addEventListener('mouseover', rainbow);
    });
    modeType = "rainbow";
}

// black event handler and event object functions
function black(e) {
    e.target.style.backgroundColor = 'black';
    e.target.style.opacity = 1;
}

function blackMode() {
    const gridDivs = document.querySelectorAll('.gridDiv');
        gridDivs.forEach((div) => {
            div.removeEventListener('mouseover', black);
            div.removeEventListener('mouseover', rainbow);
            div.addEventListener('mouseover', black);
        })
    modeType = "black";
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

if (modeType === "rainbow") {
    rainbowMode();
} else if (modeType === "black") {
    blackMode();
}
}

/* add event listener to reset button to prompt user for input andchange resolution
    returns an error if >100 or not a number */
reset.addEventListener('click', () => {
    var newSquareSize = parseInt(prompt("What pixel size do you want m8?", ""));
    while (typeof(newSquareSize) != "number") {
    newSquareSize = prompt("Please put a number in bud", "");
    newSquareSize = parseInt(newSquareSize);
    }
    while (newSquareSize > 100 || newSquareSize < 1) {
        newSquareSize = parseInt(prompt("Invalid, please enter a number between 1-100", ""));
    }
    const container = document.querySelector('#container');
    container.remove();
    drawContainer();
    drawGrid(newSquareSize);
})

// add event listener to black button, running blackmode function
blackButton.addEventListener('click', () => {
    blackMode();
})

rainbowButton.addEventListener('click', () => {
    rainbowMode();
})

drawContainer();
drawGrid(60);