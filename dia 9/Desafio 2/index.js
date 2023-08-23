let continuar = 'n'
while(continuar !='s') {
let nome = prompt("Insira aqui o seu nome")
let idade = Number(prompt("Insira aqui a sua idade"))
let salarioAtual = Number(prompt("Insira aqui o seu salario atual"))
continuar = prompt(" as informacoes estao corretas? (s/n")
console.log("Seu nome e: " + nome + "voce tem " + idade + " anos,e seu salario e de R$ " + salarioAtual)


let aumento = 0.015
for (let i = 1; i <= 10; i++) {
        salarioAtual += salarioAtual * aumento
        aumento *= 2

        let salario = salarioAtual
        let anoDoSalario = 2023 + i
        console.log(anoDoSalario + " - R$ , " + salario) 
 }
}



