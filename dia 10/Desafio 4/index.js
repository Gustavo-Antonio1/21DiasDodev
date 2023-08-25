let numeroEscolhido = Number(prompt("Insira aqui o numero Desejado!"))
let numerosdeFibonacci = []

numerosdeFibonacci[0] = numeroEscolhido - 1
numerosdeFibonacci[1] = numeroEscolhido

for (let i = 2; i < 10; i++) {
    numerosdeFibonacci[i] = numerosdeFibonacci[i - 1] + numerosdeFibonacci[i - 2]
}

console.log("numeros de fibonacci: " + numerosdeFibonacci)

    
