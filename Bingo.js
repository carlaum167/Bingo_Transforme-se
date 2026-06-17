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
    
    if (numeros.length === 0 && sorteados.length === 0) {
        console.log("Nenhum número foi sorteado ainda. Inicie o bingo primeiro.");
        return;
    }

    if (numeros.length === 0) {
        console.log("Todos os números já foram sorteados!");
        return;
    }

    console.log("Sorteando número...");

    let indice = Math.floor(Math.random() * numeros.length);
    let numeroSorteado = numeros[indice];
    sorteados.push(numeroSorteado);
    numeros.splice(indice, 1);

    console.log(`Número sorteado: ${numeroSorteado}`);
}

function exibirSorteados() {
    if (sorteados.length === 0) {
        console.log("Nenhum número foi sorteado ainda.");
    } else {
        console.log("Números sorteados:", sorteados.join(", "));
    }
}

function reiniciarBingo() {
    iniciarBingo();
    console.log("\nBingo reiniciado!");
}

function menu() {
    console.log("\nMenu:");
    console.log("1. Iniciar Bingo");
    console.log("2. Sortear Número");
    console.log("3. Exibir Números Sorteados");
    console.log("4. Reiniciar Bingo");
    console.log("5. Sair");
    rl.question("Escolha uma opção: ", (opcao) => {
        switch (opcao) {
            case '1':
                iniciarBingo();
                console.log("Bingo iniciado!");
                menu();
                break;
            case '2':
                sortearNumero();
                menu();
                break;
            case '3':
                exibirSorteados();
                menu();
                break;
            case '4':
                reiniciarBingo();
                menu();
                break;
            case '5':
                console.log("Saindo do Bingo...");
                rl.close();
                break;
            default:
                console.log("Opção inválida!");
                menu();
        }
    })
    
}

 return menu();