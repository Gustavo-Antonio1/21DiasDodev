let continuar = 's'
do {
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

let imc = peso / (altura * altura)

if( imc < 18.5) {
    console.log("Magreza")
}else if(imc < 25) {
    console.log("Normal")
}else if (imc <= 30) {
    console.log("Sobrepeso")
}else {
    console.log("Obesidade")
}

let anoNascimento = 2023 - idade
let idadeAgora = 0
console.log("voce nasceu em: " + anoNascimento)

for (let anonasceu = anoNascimento; anonasceu <= 2023; anonasceu++) {
    console.log(anonasceu + " = " + idadeAgora + " anos de idade")
    idadeAgora++
}

continuar = prompt("Deseja inserir outras informacoes? (s/n)")

}while(continuar === 's')

