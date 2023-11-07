'use strict';

//INPUT DATA
const distance = document.getElementById('distance-id');
const age = document.getElementById('age-selector');

console.log(distance);
// const distance = prompt('inserir;e la distanza da percorrere (in km)');

// TRASFORMO IN NUMERO LE STRINGHE (DATI DEI PROMPT)
console.log('età inserita ' + +age);
console.log('distanza da percorrere in km ' + +distance);

// CALCOLO IL PREZZO DEL BIGLIETTO
const ticket= distance*0.21;

// CONDIZIONI DEGLI SCONTI EVENTUALI

// sconto 20% per minorenni
if(+age < '18'){
    console.log('il prezzo del biglietto per minorenni è ' + ticket *0.8 +' €');
}
// sconto 40% per over 65
else if(+age >= '65'){
    console.log('il prezzo del biglietto per gli over 65 è ' + ticket *0.6 +' €');
}
// condizione nessuno sconto
else{
    console.log('il prezzo del biglietto è ' + ticket.toFixed(2) + ' €');
}