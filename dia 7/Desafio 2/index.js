let nome = prompt("Por gentileza Insira o seu nome")
let cpf = prompt("Por gentileza insira o seu CPF")
let valor = 0
let saldoTotal= 0
let maiorValor = 0
let mediaValores = 0
let continuar = 1
let operacao
let cont = 0

do {
    operacao = prompt("Escolha a operacao desejada (saque ou deposito)")
    valor = Number(prompt("Insira o valor desejado"))
    mediaValores+= valor

    if(valor > maiorValor) {
        maiorValor = valor
    }

    if(operacao === 'saque' && valor <= saldoTotal) {
        saldoTotal -= valor
    }else if (operacao === 'saque' && valor > saldoTotal) {
        console.log(" O valor sacado deve ser menor ou igual ao saldo")
    }else {
        saldoTotal +=valor
    }

    cont++
    console.log("Seu saldo e: " + saldoTotal)
    console.log("O maior valor inserido foi " + maiorValor)
    console.log("A media dos valores foi " + (mediaValores / cont))

    continuar = Number(prompt("voce deseja continuar? 1 - para sim 2 - para"))
  
} while(continuar === 1)