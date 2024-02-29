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
- Click su bottone play: al click appare la griglia


# Esercizio parte 2
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: i funghi magici.
Attenzione: nella stessa cella può essere posizionato al massimo un fungo, perciò nell’array dei funghi non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: 
- Se il numero è presente nella lista dei numeri generati:
    - abbiamo calpestato una fungo
    - la cella si colora di rosso e la partita termina.
- Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una fungo o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono funghi).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una fungo.

BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

Nota: Se non vi piacciono i funghi :fungo: potete usare fiori :girasole: o cacca  :pupù: basta che non mettete bombe - purtroppo il nome della repo al momento non puó essere cambiato.

## Steps
- Creare un array per inserire i numeri casuali
- Generare 16 numeri casuali compresi tra 1 e cellsNumber
- Riempire l'array:
    - Finchè l'array non arriva a 16 elementi, continuare a generarne:
        - SE il numero non è già presente nell'array, allora pushalo
- Creare counter per i numeri cliccati
- Check: a ogni click su numero, counter +1
    - SE il numero cliccato è nell'array, hai perso
        - Restituisci numero di click sul numero
    - SE numeri cliccati = cellsNumber - array.length, hai vinto
    - ALTRIMENTI vai avanti a giocare
- Restart game?