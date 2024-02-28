# Esercizio: Campominato
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

## Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

## Steps
- Creare struttura html: 
    - Header con bottone play
    - Container per gioco in cui inserire la griglia dinamica
    - Footer
- Creare una variabile che contenga il numero di celle che vogliamo (dovrà cambiare con bonus = let)
- Generare le celle > ogni cella deve contenere un numero 
- Generare con ciclo for numeri progressivi da 1 a 100, uno per cella
    (funzione per generare la cella da inserire in un ciclo for?)
- Click su cella: al click la cella diventa azzurra (.toggle) e stampa numero in console
