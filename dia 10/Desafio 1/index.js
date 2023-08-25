let numeros = [];
let indices = [];

for (let i = 0; i < 10; i++) {
    let numeroInserido = Number(prompt("Insira aqui o " + (i + 1) + " numero"))
    numeros[i] = numeroInserido
}

let numeroProcurado = Number(prompt("Insira aqui o numero procurado"))
let cont = 0

for (let j = 0; j < numeros.length; j++) {
    if(numeros[j] === numeroProcurado) {

    indices[cont] = j
    cont++  
 }
}

console.log("O numero procurado aparece no indice: " + indices)

