// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, 
// tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare
// sono stati individuati.

// stampare 5 numeri casuali sul browser
let divElements = document.getElementById("number");
let numbers = [];

for (let i = 0; i < 5; i ++){
    let number = Math.floor(Math.random() * 100) + 1;
    numbers.push(number);
    divElements.innerHTML += " " + number + " ";
}
console.log(numbers);


// creo una funzione time di 10 secondi
let divTime = document.getElementById("time");
let time = 0;

let startTime = setInterval(function (){
        if (time === 10){
            clearInterval(time);
            divElements.innerHTML = " ";
            divTime.innerHTML = "Tempo scaduto"

        } else {
            time++;
            divTime.innerHTML = time;
        }
    }
, 1000)

let resulte = document.getElementById("risultato");
let count = 0;

// creo la funzione che si attiva dopo 12 secondi dall'apertura del browser
let endtime = setInterval(
    function(){
        let numbUser;
        let i = 0
        while (i < 5){
            numbUser = parseInt(prompt("Dammi un numero"));
            console.log(numbUser);
        
            if(numbers.includes(numbUser)){
                count++;
            }

            i++;
        }
        clearInterval(endtime);
        console.log("Hai indovinato: " + count + " numeri");
        resulte.innerHTML = "Hai indovinato: " + count + " numeri";
    }
, 12000)