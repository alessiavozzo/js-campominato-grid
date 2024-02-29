//variabile per numero di celle
let cellsNumber;

//assegno variabile al contenitore delle celle
const cellContainer = document.getElementById("cells-container");
//console.log(cellContainer);

//assegno variabile al contenitore del gioco
const gameContainer = document.getElementById("game");

//assegno variabile al bottone play
const btnPlay = document.getElementById("play");
//console.log(btnPlay);

//assegno variabile al select
const setDifficulty = document.getElementById("difficulty");
//console.log(setDifficulty, setDifficulty.value);

//creo un array per contenere i numeri casuali
const mushroomArray = [];

//click per far apparire il gioco
btnPlay.addEventListener("click", function () {

    cellContainer.innerHTML = "";
    mushroomArray.splice(0, mushroomArray.length)
    
    //assegnare un valore a cellsNumber per la quantità di celle da generare
    if (setDifficulty.value === "easy") {
        cellsNumber = 100;
        cellContainer.style.maxWidth = "600px";
    }
    else if (setDifficulty.value === "normal") {
        cellsNumber = 81;
        cellContainer.style.maxWidth = "540px";
    }
    else if (setDifficulty.value === "hard") {
        cellsNumber = 49;
        cellContainer.style.maxWidth = "420px";
    }
    //console.log(cellsNumber, typeof cellsNumber);
    

    //ciclo while per riempire l'array con i numeri casuali da 1 a cellsNumber
    while (mushroomArray.length < 16) {
        
        let randomNumber = getRandomNumber(1, cellsNumber);

        if(!mushroomArray.includes(randomNumber)){
            mushroomArray.push(randomNumber)
        }        
    }
    console.log(mushroomArray);


    //ciclo for per generare 100 celle con dentro 100 numeri progressivi
    //richiamo la funzione di generazione celle 
    for (let i = 1; i <= cellsNumber; i++) {
        //console.log(i);
        let cellNumber = i;
        const cellGenerated = generateCell("div", "cell", cellNumber);
        cellContainer.insertAdjacentElement("beforeend", cellGenerated)

        //al click la casella diventa blu
        cellGenerated.addEventListener("click", function () {

            if(!mushroomArray.includes(cellNumber)){
                cellGenerated.classList.add("blue")
            }
            else if(mushroomArray.includes(cellNumber)){
                cellGenerated.classList.add("red")
            }

            //stampa numero in console al click
            console.log(cellNumber);
        })
    }
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


//funzione per generazione numeri casuali

/**
 * Get a random number between a specified minimum and maximum
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;            
  }
 