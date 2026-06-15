const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];
let sorteados = [];

function iniciarBingo() {

    numeros = [];
    sorteados = [];
    
    for (let i = 1; i <= 75; i++) {
        numeros.push(i);
    }
}

function sortearNumero() {
    if (numeros.length === 0) {
        console.log("Todos os números foram sorteados!");
        return;
    }

    let indice = Math.floor(Math.random() * numeros.length);
    let numeroSorteado = numeros[indice];
    sorteados.push(numeroSoerteado);
    numeros.splice(indice, 1);

    console.log(`Número sorteado: ${numeroSorteado}`);
}