const ask = require("readline-sync")

function classificarNota (nota){
    if(nota == 9 || nota == 10){
        console.log("Excelente")

    } else if(nota == 7 || nota == 8){
        console.log("Bom")

    } else if(nota == 5 || nota == 6){
        console.log("Regular")

    } else {
        console.log("Reprovado")
    }
}

let nota = (ask.question("Digite sua nota: "))

classificarNota(nota)