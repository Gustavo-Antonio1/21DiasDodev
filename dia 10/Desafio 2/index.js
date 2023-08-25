let numeros = [];
let numerosInvertidos = [];

for (let i = 0; i < 5 ; i++) {
    let numeroInserido = Number(prompt("insira aqui o: " + (i + 1) + " numero."))
    numeros[i] = numeroInserido
    
}

console.log("numeros do Array: " + numeros)

contador = 4
for (let i = 0; i < 5; i++) {
    numerosInvertidos[i] = numeros[contador]
    contador --  
}

console.log("Array invertido: " + numerosInvertidos)

