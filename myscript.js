'use strict';

//INPUT DATA
const elementName = document.getElementById('name-id');
const elementKmUtente = document.getElementById('distance-id');
const elementAge = document.querySelector('#age-selector');
const elementButtonGenerator = document.getElementById('generate');
const elementClear = document.getElementById('clean');
const elementTicket = document.getElementById('biglietto-virtuale')

// dati costo biglietto
const costoBigliettoKm = 0.21;


// campi biglietto virtuale
const elementUserName = document.getElementById('nome-utente');
const elementTariff = document.getElementById('tariffa');
const elementCarrozza = document.getElementById('n-carrozza');
const elementCpCode = document.getElementById('cp-code');
const elementFinalPrice = document.getElementById('final-price');




// calcolo del biglietto
elementButtonGenerator.addEventListener('click', function(){

   let ticketPrice= costoBigliettoKm * Number(elementKmUtente.value);
    
    console.log(ticketPrice);

    if(elementAge.value === 'minorenne'){

     // applico sconto 20%
    ticketPrice -= (ticketPrice * 20) / 100;



    }else if(elementAge.value === 'over-65'){

         // applico sconto 40%
        ticketPrice -= (ticketPrice * 40) / 100;

    }
    console.log('Il prezzo del biglietto è ' + ticketPrice + ' euro');

   
    // faccio comparire il biglietto
    elementTicket.classList.remove('hidden');


     // assegno valori dom
    elementUserName.innerHTML= elementName.value;
    // elementTariff.innerHTML= elementName.value;
    elementFinalPrice.innerHTML= ticketPrice.toFixed(2) + ` €`;
    elementCarrozza.innerHTML =  Math.floor(Math.random() * 19 + 1);
    elementCpCode.innerHTML =  Math.floor(Math.random()*90000) + 10000;






 



});



// reset dei dati 
elementClear.addEventListener('click', function(){
    console.log('Svuoto i campi di input e nascondo il biglietto virtuale');

    elementKmUtente.value='';
    elementName.value='';






    elementTicket.classList.add('hidden');
    

});

