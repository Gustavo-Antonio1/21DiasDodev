let numeros = [];
let numerosInvertidos = [];
let continuar = 'S'
let contador = 0
let opcao;


while (continuar === 'S') {
    let numeroInserido = Number(prompt("insira aqui o numero desejado"))

    numeros[contador] = numeroInserido

    contador++


    opcao = prompt("Deseja inserir mais um numero? digite 'S' caso sim ")
    if (opcao != 'S') {
        continuar = false

    }
}

let contador2 = numeros.length - 1

for (let i = 0; i < numeros.length; i++) {

    numerosInvertidos[i] = numeros[contador2]

    contador2--
}


console.log("array: " + numeros)
console.log("arrayInvertido: " + numerosInvertidos)

