let nome = prompt("Insira aqui o seu nome.")
let idade = parseInt(prompt("Insira aqui a sua idade."))
let altura = parseFloat(prompt("Insira aqui a sua altura (em metros)."))
let peso = parseFloat(prompt("Insira aqui o seu peso (em Kg)."))

let anoNascimento = 2023 - idade

let imc = peso / (altura * altura)

console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + anoNascimento + " tem " + altura + " de altura, pesa " + peso +"kg seu IMC é " + imc + "kg/m2")