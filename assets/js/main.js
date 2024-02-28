//variabile per numero di celle
let cellsNumber = 100;

//assegno variabile al contenitore delle celle
const cellContainer = document.querySelector(".container")
//console.log(cellContainer);


//funzione per generare una cella

/**
 * ## Generate a cell
 * Create an element, add a class name to the element and add the content of the element
 * @param {string} tag tag name
 * @param {string} className class name
 * @param {number} number number
 * @returns 
 */
function generateCell(tag, className, number) {
    const singleCell = document.createElement(tag);
    singleCell.classList.add(className);
    singleCell.innerHTML = number;

    return singleCell;
}

console.log(generateCell("div", "cell", 1));
