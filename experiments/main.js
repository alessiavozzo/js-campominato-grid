//prendo gli elementi dalla pagina html
const gameContainer = document.getElementById("custom-container");
const startBtn = document.getElementById("start-btn");
const level = document.getElementById("level");
const point = document.getElementById("site_footer");
//console.log(level);


//dichiaro cellsNumber che deve cambiare in base alla difficoltà
let cellsNumber;
let poops = [];
let content;
let counter = 0;

//selezionare il numero di celle dal select utilizzando il target
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    cellsNumber = e.target.level.value;
    gameContainer.innerHTML = "";
    poops.splice(0, poops.length)
    generatePoop();
    generateGrid();
})



//funzione che genera la griglia
/**
 * generates the game grid
 * @returns {HTMLElement}
*/
function generateGrid() {
    for (let i = 1; i <= cellsNumber; i++) {
        if (poops.includes(i)) {
            content = "💩";
        }
        else {
            content = i;
        }
        const cellGenerated = generateCell("div", "cell");
        eventCell(cellGenerated, content);
        gameContainer.append(cellGenerated);
    }
    return gameContainer;
}

//funzione che genera la cella a la rende cliccabile
/**
 * ## generates a cell
 * The width of each cell is defined by the whole container width / the square radix of cellsNumber
 * @param {tag} tag 
 * @param {string} className 
 * @returns {HTMLElement}
 */
function generateCell(tag, className) {
    let cell = document.createElement(tag);
    cell.classList.add(className);
    cell.style.width = `calc(100% / ${Math.sqrt(cellsNumber)})`

    return cell;
}

//funzione per attaccare l'evento a ogni cella generata
/**
 * Attach event to a single cell (node)
 * @param {HMTLElement} cell 
 * @param {any} content 
 */
function eventCell(cell, content) {
    cell.setAttribute('content',content)
    cell.addEventListener("click", clickClick, { once: true })    
}

function clickClick(e) {
    //console.log(this);
    const element =e.target
    content =element.getAttribute('content')
    element.innerHTML = content;
    if (content === "💩") {
        element.style.backgroundColor = "red";      
        gameOver()
    }
    else {
        element.style.backgroundColor = "green";
        counter++
        point.innerText = `Punteggio: ${counter}`;
    }
}


//gameover
function gameOver() {
    const cellsNodeList = document.querySelectorAll(".cell");
    console.log(cellsNodeList);
    for (let i = 0; i < cellsNodeList.length; i++) {
        const singleCell = cellsNodeList[i];
        console.log(singleCell);
        singleCell.removeEventListener("click", clickClick);
    }    
    console.log(`GAME OVER! Hai fatto ${counter} punti`); 
    point.innerText = `💩 Hai calpestato una cacca! Hai fatto ${counter} punti 💩`;
    point.classList.add("text-white");
    point.classList.replace("bg-body-tertiary", "bg-danger");
}

function generatePoop() {
    //ciclo while per riempire l'array
    while (poops.length < 16) {
        let randomNumber = getRandomNumber(1, cellsNumber);
        if (!poops.includes(randomNumber)) {
            poops.push(randomNumber)
        }
    }
    console.log(poops);
    return poops;
}

/**
 * Get a random number between a specified minimum and maximum
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
