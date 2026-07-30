const ask = require("readline-sync")

function verificarMaioridade (age){
    if(age >= 18){
        console.log("Maior de idade")
    } else {
        console.log("Menor de idade")
    }
}

let age = (ask.question("Digite sua idade: "))

verificarMaioridade (age)