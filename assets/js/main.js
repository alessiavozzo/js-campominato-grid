//variabile per numero di celle
let cellsNumber = 100;

//assegno variabile al contenitore delle celle
const cellContainer = document.querySelector(".container")
//console.log(cellContainer);

//assegno variabile al contenitore del gioco
const gameContainer = document.getElementById("game")

//assegno variabile al bottone play
const btnPlay = document.getElementById("play")
//console.log(btnPlay);

//click per far apparire il gioco
btnPlay.addEventListener("click", function(){
    gameContainer.classList.remove("d-none")
})

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

//console.log(generateCell("div", "cell", 1));



//ciclo for per generare 100 celle con dentro 100 numeri progressivi
for (let i = 1; i <= cellsNumber; i++) {
    //console.log(i);
    let cellNumber = i;
    const cellGenerated = generateCell("div", "cell", cellNumber);
    cellContainer.insertAdjacentElement("beforeend", cellGenerated)

    //al click la casella diventa blu
    cellGenerated.addEventListener("click", function(){
        cellGenerated.classList.toggle("blue")

        //stampa numero in console al click
        console.log(cellNumber);
    })   
}