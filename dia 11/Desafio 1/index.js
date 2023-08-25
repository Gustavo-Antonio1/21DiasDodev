let nomes = [];
let notas =[];
let continuar = 'S'
contador = 0
let somaNotas = 0
let mediaGeral = 0

while(continuar === 'S') {
    let nomeInserido = prompt("Insira aqui o nome do Aluno")
    let notaInserida = Number(prompt("Insira aqui a nota do aluno"))

    nomes[contador] = nomeInserido
    notas[contador] = notaInserida


    contador++

    somaNotas += notaInserida

    let opcao = prompt("Digite 'S' para cadastrar outro aluno")
    
    if(opcao != 'S') {
        continuar = false
    }
}

mediaGeral = somaNotas / nomes.length

console.log("notas dos alunos: " + notas)
console.log("Soma das notas dos alunos: " + somaNotas)
console.log("Media geral da turma: " + mediaGeral)