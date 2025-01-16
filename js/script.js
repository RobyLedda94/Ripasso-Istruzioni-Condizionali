// Verifico con la funzione alert che lo script sia correttamente importato
// alert('TEST IMPORT');


// Le istruzioni condizionali consentono di eseguire blocchi di codice a seconda che una condizione sia vera o falsa, il costrutto più comnune è if (e le sue varianti else e else if)


// Sintassi :

// se si verifica la condizione allora eseguo il seguente blocco di codice
// if (condizione) {

//     //blocco di codice 1

// altrimenti viene eseguito il seguente blocco di codice
// } else {

//     //blocco di codice 2

// }



// if (condizione){

// blocco di codice 1

// } else if (condizione){

// blocco di codice 2

// } else {

// blocco di codice 3

// }





// Primi esempi :

// In questo esempio la condizione può essere vera o falsa non esiste una via di mezzo

// Dichiaro una variabile in cui restituisco un valore inserito dall'utente tramite prompt
// let numero = parseInt(prompt('Inserisci un numero'), 10);

// // Istruzione condizionale costutto (if), se il numero è pari mostro stampo in pagina il risultato con il metodo getElementById
// if (numero % 2 == 0) {

//     // document.getElementById('result').innerText = document.getElementById('result').innerText + ' ' + 'pari';
//     // forma contratta (+=)
//     document.getElementById('result').innerText += ' ' + 'pari';

//     // altrimenti costrutto (elese) è dispari allora eseguo il seguente blocco
// } else {

//     // document.getElementById('result').innerText = document.getElementById('result').innerText + ' ' + 'dispari';
//     // forma contratta (+=)
//     document.getElementById('result').innerText += ' ' + 'dispari';

// }





// Operatori relazionali : ci permetto no di confrontare i valori


// let num1 = parseInt(prompt('Inserisci il primo numero'), 10);
// let num2 = parseInt(prompt('Inserisci il secondo numero'), 10);

// // confrontiamo i risultati con l'operatore di minoranza <

// if (num1 < num2) {
//     console.log('il primo numero è minore del secondo numero');
// } else if (num1 > num2) {
//     console.log('Il primo numero è maggiore del secondo numero');
// } else {
//     console.log('I due numeri sono uguali');
// }



// Creo una variabile in cui chiedo all'utente di unserire un numero tramite prompt

// let number = parseInt(prompt('Inserisci un numero'), 10);

// if (number % 2 == 0) { // condizione in cui utilizzo l'oratore di uguaglianza (semplice confonta solo il valore non il tipo di valore)
//     document.getElementById('result').innerText += ' ' + 'Pari'; // forma contratta
// } else {
//     document.getElementById('result').innerText = document.getElementById('result').innerText + ' ' + 'Dispari';
// }












// Facciamo un esempio per capire la differenza tra (uguaglianza e uguaglianza stretta)

// let x = prompt('Inserisci il numero 5');
// // funzione typeof verifico il tipo di dato in questo caso se stringa o numero
// console.log(typeof x);
// console.log(typeof 5);

// if (x === 5) {
//     console.log('il numero è 5');
// } else {
//     console.log('il numero non è 5');
// }


// Concateniamo delle istruzioni con gli operatori logici (and && / or ||)

// Vediamo un altro esempio

// dichiaro una variabile che tramite prompt chiede all'utente di inserire un importo
// let prezzo = parseInt(prompt("Inserisci il prezzo dell' immobile"), 10);


// if (prezzo < 100) {  // condizione in cui se il prezzo è minore di € 100 non hai ditirro allo sconto (disuguaglianza stretta)
//     document.getElementById('price').innerText += ' ' + 'Non hai diritto allo sconto';
// } else if (prezzo >= 100 && prezzo <= 199) { // condizione in cui se il prezzo è minore o uguale a € 200 hsi uno sconto del 5% (disuguaglianza semplice)
//     document.getElementById('price').innerText += ' ' + 'Hai diritto ad uno sconto del 5%';
// } else { // altrimenti in questo caso il prezzo e maggiore di 200 € hsi uno sconto del 10 %
//     document.getElementById('price').innerText += ' ' + 'Hai diritto ad uno sconto del 10%';
// }


// Operatore unario negazione
// l' operatore not è il contrario di qualcosa

// let user = false;
// if (!user) {
//     console.log('Non loggato');
// } else {
//     console.log('Loggato')
// }


// ESERCIZIO 1 ETA' PER GUIDARE

// recupero il bottone attraverso il suo id dal DOM
let age_btn = document.getElementById('age-btn');

// metto il bottone che ho recuperato in attesa di un evento click
age_btn.addEventListener('click', function () {
    // all'interno dell'evento recupero l'input che converto in valore numerico e catturo il valore inserito dall'utente tramite il .value
    let age_input = parseInt(document.getElementById('age-input').value, 10);
    console.log(age_input);
    // recupero l'elemento che genera il messaggio all'utente
    let age_message = document.getElementById('age-message');
    // Svuoto il campo input
    document.getElementById('age-input').value = ''; // Imposta il valore dell'input a una stringa vuota
    // Svuoto tutte le classi dell'elemento messaggio
    age_message.className = ''; // Rimuove tutte le classi eventualmente presenti
    // istruzione condizionale 1 - controllo che l'utente sta inserendo dei dati valido (vuoto non valido - minore uguale a zero non valido)
    if (isNaN(age_input) || age_input <= 0) {
        // inietto nell'elemento messaggio la seguente stringa
        age_message.innerText = 'Perfavore inserisci un dato valido';
        // proprietà classList per aggiungere all'elemento una classe 
        age_message.classList.add('text-warning');
    } else if (age_input < 18) {
        age_message.innerText = "Hai meno di 18 anni non puoi guidare";
        age_message.classList.add('text-danger');
    } else {
        age_message.innerText = "Hai l'età giusta per guidare";
        age_message.classList.add('text-green');
    };

});


// ESERCIZIO ETA FATTO CON IL PROMPT

// dichiaro una variabile dove chiedo tramite ptompt l'età all'utente
// let age = parseInt(prompt("Inserisci la tua età"), 10);

// // esguo un controllo sul dato inserito dall'utente
// if (isNaN(age) || age <= 0) {
//     console.log("Per favore inserire un dato valido");
// } else if (age < 18) { // condizione in cui l'utente se ha meno di 18 anni non può guidate
//     console.log("Hai meno di 18 anni non puoi guidare");
// } else { // altrimenti se ha 18 anni o più puo guidare
//     console.log("Hai l'età giusta per guidare");
// }

// -----------------------------------------------------------------------------------------------------------------

// ESERCIZIO 2 PARI O DISPARI

// Recupero il bottone da DOM
let pari_dispari_btn = document.getElementById('pari-dispari-btn');
// Evento click per il bottone pari-dispari
pari_dispari_btn.addEventListener('click', function () {
    // recuopero il campo input converto il valore restituito in numero e catturo il dato inserito dall'utente
    let pari_dispari_input = parseInt(document.getElementById('pari-dispari').value, 10);
    // recuopero l'elemento che mostra un messaggio
    let pari_dispari_message = document.getElementById('pari-dispari-message');
    // condizione di controllo del dato attraverso l'utilizzo dell'operatore unario !not e poratore logico &&
    // svuoto il valore del campo input
    document.getElementById('pari-dispari').value = '';
    // svuoto le classi dell'elemento messaggio
    pari_dispari_message.classList = '';
    // consdizione di controllo sul dato inserito
    if (isNaN(pari_dispari_input) || pari_dispari_input < 0) {
        pari_dispari_message.innerText = "Attenzione inserisci un dato valido";
        pari_dispari_message.classList.add('text-warning');
        // se pari eseguo il seguente blocco di codice
    } else if (pari_dispari_input % 2 === 0) {
        pari_dispari_message.innerText = "Il numero inserito è pari";
        pari_dispari_message.classList.add('text-green');
        // atrimenti condizione dispari
    } else {
        pari_dispari_message.innerText = "Il numero inserito è dispari";
        pari_dispari_message.classList.add('text-danger');
    };
});

// ESERCIZIO SVOLTO CON IL PROMPT

// dichiaro una variabile dove chiedo all'utente di inserire un numero tramite prompt

// let num = parseInt(prompt('Inserisci un numero'), 10);

// if (!num && num !== 0) { // condizione in cui controllo che l'utente abbia inserito un numero valido tramite forma contratta dell'operatore unario !not (entra in questo blocco se è vero che il valore inserito non è un numero) e controllo anche che lo zero sia un numro valido
//     console.log('Perfavore inserisci un numero valido.');
// } else if (num % 2 === 0) {
//     console.log('Il numero che hai inserito è pari.');
// } else {
//     console.log('Il numero che hai inserito è dispari');
// }

// ---------------------------------------------------------------------------------


// ERECIZIO 3 NUMERO PIU GRANDE

// Recuperiamo il bottone che gestirà il nostro evento
let maggiore_minore_btn = document.getElementById('maggiore-minore-btn');

maggiore_minore_btn.addEventListener('click', function () {
    // recupero gli elementi input catturo il valore inserito dall'utente e converto il dato in valore numerico
    let primo_valore_input = parseInt(document.getElementById('primo-valore').value, 10);
    let secondo_valore_input = parseInt(document.getElementById('secondo-valore').value, 10);
    // recupero l'elemento che mostra il messaggio che varia in base alla condizione
    let maggiore_minore_messaggio = document.getElementById('maggiore-minore');
    // condizione di controllo
    // svuoto le classi del messaggio
    maggiore_minore_messaggio.classList = '';
    if (isNaN(primo_valore_input) || isNaN(secondo_valore_input) || primo_valore_input < 0 || secondo_valore_input < 0) {
        maggiore_minore_messaggio.innerText = 'Inserisci valori numeri validi';
        maggiore_minore_messaggio.classList.add('text-warning');
        // condizione valore 1 maggiore
    } else if (primo_valore_input > secondo_valore_input) {
        maggiore_minore_messaggio.innerText = "Il primo valore è maggiore del secondo valore";
        maggiore_minore_messaggio.classList.add('underline');
        // condizione valore 2 maggiore
    } else if (primo_valore_input < secondo_valore_input) {
        maggiore_minore_messaggio.innerText = "Il secondo valore è maggiore del primo valore"
        maggiore_minore_messaggio.classList.add('underline');
        // condizione i valori sono uguali
    } else {
        maggiore_minore_messaggio.innerText = "I numeri inseriti sono pari"
        maggiore_minore_messaggio.classList.add('text-green');

    }

});

// dichiaro le variabili con cui chiedo all'utente di inserire un valore numerico tramite il prompt (converto il valore in numerico con il parseInt)
// let num_one = parseInt(prompt('Inserisci il primo numero'), 10);
// let num_two = parseInt(prompt('Inserisci il secondo numero'), 10);

// if (!num_one && !num_two) { // condizione in cui controllo se l'utente ha inserito un valore valido al primo numero and secondo
//     console.log('Perfavore inserisci un numero valido');
// } else if (num_one > num_two) { // condizione se il primo numero è maggiore entro in questo blocco
//     console.log('Il primo valore è maggiore');
// } else if (num_one < num_two) { // condizione se il secondo numero è maggiore entro in questo blocco
//     console.log('Il secondo valore è maggiore');
// } else { // altrimenti se sono uguali entro in questo blocco
//     console.log('I numeri inseriti sono uguali');
// }


// ESERCIZIO 4 CALCOLATRICE SEMPLICE

// dichiaro le variabili con cui chiedo all'utente di inserire un valore numerico tramite prompt (e utilizzo il parseInt per conertire il tipo di valore inserito dall'utente in numero)

// let somma_num_one = parseInt(prompt('Inserisci il primo valore numerico'), 10);
// let somma_num_two = parseInt(prompt('Inserisci il secondo valore numerico'), 10);

// if (isNaN(somma_num_one) || isNaN(somma_num_two)) { // nella condizione utilizzo isNAN() per verificare che i valori immesso sono numerici ( in questa condizione se è vero che non sono numerici entro nel blocco)
//     console.log('Inserisci dei valori validi');
// } else { // altrimenti entro in questo blocco dell'operaione somma
//     let risultato_somma = somma_num_one + somma_num_two; // dichiarazione della variabile che contiene il risultato della somma
//     console.log('Il risultato è' + ' ' + risultato_somma);
// }


// ESERCIZIO NUMERO 5 VOTO SCOLASTICO
// "Insufficiente" se il voto è tra 0 e 5,
// "Sufficiente" se il voto è 6,
// "Buono" se il voto è 7 o 8,
// "Ottimo" se il voto è 9 o 10.

// dichiaro una variabile in cui chiedo di inserire un valore nuemrico tamite il prompt
// let voto = parseInt(prompt('Inserisci il voto un feedback sulla valutazione'), 10);

// if (isNaN(voto)) { // controllo se l'utente ha inserito un dato valido (numerico)
//     console.log('Per favore, inserisci un dato valido.');
// } else if (voto >= 0 && voto <= 5) { // condizione se il voto ha un range tra 0 e 5 risulta insufficente
//     console.log('Il tuo voto è insufficente');
// } else if (voto === 6) { // se il voto è 6 risulta suggicente
//     console.log('Il tuo voto è sufficente');
// } else if (voto === 7 || voto === 8) { // se il voto ha un range tra 7 e 8 risulta buono (|| almeno una delle due condizioni risulta vera)
//     console.log('Il tuo voto è buono');
// } else if (voto === 9 || voto === 10) { // se il voto ha un range tra 9 e 10 risulta ottimo (|| almeno una delle due condizioni risulta vera)
//     console.log('Il tuo voto è ottimo');
// } else { // altrimenti il voto non esiste (esempio inserisco da 11 in su)
//     console.log('Il voto inserito non è valdo');
// }


// ESERCIZIO 6 ACCESSO AL SITO

// Dichiaro le variabili per chiedere all'utente user_name e password, (restituisce valori formato striga)
// let user_name = prompt('Inserisci il tuo nome utente');
// let password = prompt('Inserisci la password');

// if (user_name === 'admin' && password === '1234') { // condizione in cui controllo con uguaglianza stretta valore e tipo di dato
//     console.log('Accesso consentito');
// } else {
//     console.log('Accesso negato');
// }


// Esercizio 7 NUMERI POSITIVI E NEGATIVI
// "Il numero è positivo" se è maggiore di 0,
// "Il numero è negativo" se è minore di 0,
// "Il numero è zero" se è uguale a 0.

// let number = parseInt(prompt('Inserisci un numero verifichiamo se è positivo o negativo'), 10);

// if (isNaN(number)) {
//     console.log('Inserisci un numero valido');
// } else if (number > 0) {
//     console.log('Il numero è positivo');
// } else if (number < 0) {
//     console.log('Il numero è negativo');
// } else {
//     console.log('Il numero è uguale a 0')
// }



// Esercizio 7 chiedi all'utente 2 parole e controlla qual'è quella più lunga


// chiedo all'utente di inserire 2 parole tramite prompt
// let first_word = prompt('Inserisci la prima parola');
// let second_word = prompt('Inserisci la seconda parola');

// // Confronto la lunghezza delle 2 parole con .lenght (resriruisce la lunghezza di una stringa ma non solo)
// if (first_word.length > second_word.length) {  // se la prima parola è più lunga enro nell'if
//     console.log('La prima parola inserita è più lunga');
// } else if (first_word.length < second_word.length) { // se la seconda parola è più lunga entro nell'else
//     console.log('La seconda parola è più lunga');
// } else { // altrimenti le due parole sono uguali
//     console.log('Le due parole sono uguali');
// }


// Esercizio 8 Calcolo lo sconto in base all'età dell'utente

// chiedo all'utente di inserire la sua età
// let eta = parseInt(prompt('Inserisci la tua età per il calcolo dello sconto'), 10);
// chiedo all'utente di inserire un prezzo
// let prezzo = parseInt(prompt('Inserisci il prezzo'), 10);
// variabile a cui assegno una percentuale di sconto predefinita
// let perc_sconto = 0;


// // creo condizione in cui verifico l'età inserita per applicare lo sconto in base all'eta
// if (eta < 18) { // se minori di 18 anni
//     perc_sconto = 10; // lo sconto sarà del 10%
// } else if (eta > 65) { // altrimenti se over 65
//     perc_sconto = 20; // sconto pari al 20%
// }

// if (perc_sconto != 0) { // condizione per il calcolo dello sconto se c'e uno sconto applicabile
//     let sconto = prezzo * perc_sconto / 100; // calcolo dello sconto
//     prezzo -= sconto; // aggiorno il prezzo sottraendo lo sconto (sottrszione abbreviata = prezzo = prezzo - sconto)
// }

// console.log(`Il prezzo finale con lo sconto applicato è : ${prezzo.toFixed(2)}€`); // mostro in console il prezzo finale con il template literal e il .toFixed(2) per arrotondare in cifre decimali


// // Esercizio 9 simulazione lancio dadi con il metodo Math.random

// // dichiaro una variabile a cui assegno il metodo Math.floor che genera un numero randomico da 1 a 6 per l'utente
// let human_dice = Math.floor((Math.random() * 6 + 1));
// console.log(`Il numero genrato per l'utente è : ${human_dice}`);
// // dichiaro una variabile che genera un numero randomico per il computer
// let computer_dice = Math.floor((Math.random() * 6 + 1));
// console.log(`Il numero genrato per il computer è : ${computer_dice}`);


// if (human_dice > computer_dice) {
//     console.log(`L' utente vince con un punteggio di ${human_dice} contro ${computer_dice}`); // condizione in cui vince l'utente
// } else if (human_dice < computer_dice) {
//     console.log(`Il computer vince con un punteggio ${computer_dice} conntro ${human_dice}`); // condizione in cui vince il computer
// } else {
//     console.log(`Pareggio! Entrambi hanno ottenuto ${human_dice}`); // altrimenti preggio
// }


// Esercizio 10 calcolo del prezzo del biglietto del treno
// chiedi all'utente di inserire i kilometri che vuole percorrere e la sua età
// sulla base di queste informazioni :
// il prezzo del biglietto è definito in base ai km (0.21 al km)
// applica uno sconto del 20% per i minorenni
// applica uno sconto del 40% per gli over 65
// l'output del prezzo va messo in forma umana con massimo due decimali, per indicare i centesimi sul prezzo

// variabile per chiedere l'età al cliente metodo (parseInt converto da stringa a valore intero)
// let human_age = parseInt(prompt("Inserisci la tua età per calcolare lo sconto sul prezzo del bilietto"), 10);
// variabile per chiedere al cliente quanti km vuole percorrere (parseInt)
// let human_kilo_meters = parseInt(prompt("Inserisci i kilometri che vuoi percorrere"), 10);
// prezzo base del biglietto a km
// let ticket_km_price = 0.21;
// // percentuale sconto predefinita
// let perc_discount = 0;
// // dichiaro variabile prezzo vinale a cui assegno valore 0
// let final_price = 0;

// // condizione con la quale controllo se l'utente sta inserendo dei dati validi
// if (isNaN(human_age) || isNaN(human_kilo_meters) || human_age <= 0 || human_kilo_meters <= 0) {
//     console.log("Per favore inserisci dai dati validi")
// } else if (human_age < 18) { // sconto per i minorenni
//     perc_discount = 20;
// } else if (human_age > 65) { // sconto per gli over 65
//     perc_discount = 40;
// }

// // contollo che ci sia la condizione per effettuare lo sconto
// if (perc_discount != 0) {
//     // dichiaro una variabile in cui stabilisco il prezzo base del biglietto (km percorsi per prezzo base)
//     let base_price = human_kilo_meters * ticket_km_price;
//     // dichiaro una variabile per calocale la percentuale di sconto
//     let discount_amount = base_price * perc_discount / 100;
//     // variabile con il calcolo del prezzo finale
//     final_price = base_price - discount_amount;
// }

// console.log(`Il prezzo finale del biglieto è di : ${final_price.toFixed(2)} €`);





// Esercizio 11: Multiplo di 3 e 5
// Scrivi un programma che chiede all'utente un numero.
// Stampa:

// "Il numero è multiplo di 3" se è divisibile per 3,
// "Il numero è multiplo di 5" se è divisibile per 5,
// "Il numero è multiplo sia di 3 che di 5" se è divisibile per entrambi.

// let human_number = parseInt(prompt('Insrisci un numero'), 10); // permetto all'utente di inserire un valore tramite il prompt

// if (isNaN(human_number)) { // condizione di controllo se il valore inserito nel promp non è un numero allora
//     //  mostro in console il messaggio di inserire un valore valido
//     console.log('Prego di inserire un numero valido');
// } else if (human_number % 3 === 0 && human_number % 5 === 0) { // condizione con operatore binario and (entro in questo blocco se entrmbe le condizioni sono vere)
//     console.log('Il numero inserito è un multiplo sia di 3 che di 5');
// } else if (human_number % 3 === 0) {
//     console.log('Il numero è multiplo di 3');
// } else if (human_number % 5 === 0) {
//     console.log('Il numero è multiplo di 5')
// } else {
//     console.log('Il numero inserito non è multiplo ne di 3 ne di 5');
// }





// Esercizio 12: Controllo della temperatura
// Chiedi all'utente la temperatura attuale.
// Stampa:

// "Fa freddo" se la temperatura è sotto i 10 gradi,
// "Temperatura normale" se è tra 10 e 25 gradi,
// "Fa caldo" se supera i 25 gradi.



// Esercizio 13: Il semaforo
// Chiedi all'utente di inserire un colore del semaforo (rosso, giallo, verde).
// Stampa:

// "Devi fermarti" se il colore è rosso,
// "Devi rallentare" se è giallo,
// "Puoi passare" se è verde.




