
function createDiv() {

    let thisDiv = document.createElement('div');
    return thisDiv;

}

let body = document.querySelector('body');
let container = document.createElement('div');
container.setAttribute('style', 'display: flex; flex-direction: column; width: 960px; height: 960px');
body.appendChild(container);

function createRow(numOfRows) {

    for (let i=0; i < numOfRows; i++) {
        let currentRow = createDiv();
        container.appendChild(currentRow);
        currentRow.setAttribute('style', 'border: 5px solid black; display: flex; flex: 1');



        for (let j=0; j < numOfRows; j++) {
            let squareDiv = createDiv();
            squareDiv.setAttribute('style', 'display: flex; border: 5px solid salmon; flex: 1');
            currentRow.appendChild(squareDiv);
        }

    }
}

createRow(5);
