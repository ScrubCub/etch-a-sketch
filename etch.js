
function createDiv() {

    let thisDiv = document.createElement('div');
    return thisDiv;

}

let body = document.querySelector('body');
let container = document.createElement('div');
container.setAttribute('style', 'display: flex; flex-direction: column; width: 960px; height: 960px; border: 5px solid black');
body.appendChild(container);

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
                squareDiv.setAttribute('style', 'display: flex; flex: 1; background-color: salmon')
            })
        }

    }
}

createRow(16);
