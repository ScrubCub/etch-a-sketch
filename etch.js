
function createDiv() {

    let thisDiv = document.createElement('div');
    return thisDiv;

}

function randomColor() {
    rand = Math.floor(Math.random()*16777215).toString(16);
    color = '#' + rand;
    return color;
}

function createRow(numOfRows) {

    for (let i=0; i < numOfRows; i++) {
        let currentRow = createDiv();
        container.appendChild(currentRow);
        currentRow.setAttribute('style', 'display: flex; flex: 1');



        for (let j=0; j < numOfRows; j++) {
            let squareDiv = createDiv();
            squareDiv.setAttribute('style', 'display: flex; flex: 1');
            currentRow.appendChild(squareDiv);

            squareDiv.addEventListener('mouseover', () => {
                color = randomColor();
                squareDiv.setAttribute('style', `display: flex; flex: 1; background-color: ${color}`);
            })
        }

    }
}

function removeRow() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

let numOfRows = 16;
let body = document.querySelector('body');
let container = document.createElement('div');
let btn = document.createElement('button');
btn.setAttribute('style', 'font-size: 18px');
btn.textContent = 'Change size';
container.setAttribute('style', 'display: flex; flex-direction: column; width: 960px; height: 960px; border: 5px solid black');
body.appendChild(btn);
body.appendChild(container);

btn.addEventListener('click', () => {
    numOfRows = Number(prompt('Enter number of sides of the square grid: '));
    if (numOfRows > 100) {
        alert('Too high! Maximum limit is 100');
        return;
    }
    removeRow();
    createRow(numOfRows);
})



createRow(16);
