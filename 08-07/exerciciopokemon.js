const ask = require("readline-sync")
let pokémon = ask.question("Insira seu pokemon: ")

switch (pokémon) {
    case "Bulbasauro":
        console.log("Planta e veneno")
        break
    case "Charmander":
        console.log("Fogo")
        break
    case "Squirtle":
        console.log("Água")
        break
        default:
            console.log("pokemon nao encontrado!")
}
