let nome = prompt("Insira aqui o seu nome")
let idade = Number(prompt("Insira aqui a sua idade"))
let peso = Number (prompt("Insira aqui o seu peso em kg"))
let altura = Number(prompt("Insira aqui a sua altura em M"))
let profissao = prompt("Insira aqui a sua profissao")

console.log("Ola " + nome + ", voce tem " + idade + " anos, é " + profissao + ", tem " + altura + "M de altura e pesa " + peso + "kg")

if(idade >= 18){
    console.log("está liberado para tomar umas geladas")
}else {
    console.log("Sem gelada pra você")
}

let idadeEmMeses = idade * 12
let idadeEmSemanas = idade * 48
let idadeEmDias = idade * 365

console.log("sua idade em meses é: " + idadeEmMeses + " meses")
console.log("sua idade em semanas é: " + idadeEmSemanas + " semanas")
console.log("sua idade em dias é: " + idadeEmDias + " dias")