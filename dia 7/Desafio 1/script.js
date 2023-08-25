let mediaGeral;
let quantidadeHomens = 0;
let quantidadeMulheresAcima7 = 0;
let maiorNotaHomens = 0;
let condicao = 's'
let totalAlunos = 0
let somaNotas = 0


while(condicao == 's') {
    let nota = Number(prompt("Insira aqui a nota do aluno"))
    let sexo = (prompt("Insira aqui o sexo do aluno: m para masculino e f para feminino"))
    
    somaNotas +=nota
    totalAlunos++

    if (sexo === 'm') {
        quantidadeHomens++
    }

    if (sexo === 'f' && nota > 7) {
        quantidadeMulheresAcima7++
    }else if (nota > maiorNotaHomens){
        maiorNotaHomens = nota;
    }

    condicao = prompt("Deseja Cadastrar outro aluno? s para sim e n para nao")
}

mediaGeral = somaNotas / totalAlunos

console.log("Média geral dos alunos: " + mediaGeral)
console.log("Quantidade de homens que enviaram notas: " + quantidadeHomens)
console.log("Quantidade de mulheres com nota maior que 7: " + quantidadeMulheresAcima7)
console.log("Maior nota entre os homens: " + maiorNotaHomens)

