let nome = prompt ("Insira aqui o seu nome")
let idade = Number(prompt("Insira aqui a sua idade"))
let cnh = prompt("Você possui carta de motorista? insira 's' para sim e 'n' para não")
let carro = prompt("Você possui algum carro? insira 's' para sim e 'n' para não")

if (idade < 18 || cnh === 'n' ) {
    console.log(nome + ", você não pode dirigir.")
}else if(idade >= 18 && cnh === 's' && carro === 'n') {
    console.log(nome + ", você pode dirigir mas não tem um carro")
}else{
    console.log(nome + ", você será o motorista!")
}
