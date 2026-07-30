const ask = require("readline-sync");

function evenOrOdd (number){
    if(number % 2 === 0){
        console.log("Par")
   } else {
    console.log("Impar")
   }
}


let number = (ask.question("Digite seu numero: "))

evenOrOdd (number)