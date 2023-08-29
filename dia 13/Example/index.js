class Aluno {
    nome
    idade
    areaAtuacao
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    apresentar() {
        console.log("Ola, meu nome e: " + this.nome + "minha idade e: " + this.idade + 'e minha area de atuacao e:' + this.areaAtuacao)
    }
}
console.log(" ====== Cadastro de alunos ========")
let alunos = [];
let continuar = true;
let indexDeAluno = 0

while(continuar) {
    let nome = prompt("insira aqui o nome do aluno")
    let idade = parseInt(prompt("Insira a idade do aluno"))
    let aluno = new Aluno(nome, idade)

    let areaAtuacao = prompt("Insira  a area de atuacao do aluno");
    aluno.areaAtuacao = areaAtuacao;

    alunos[indexDeAluno ] = aluno;
    let desejaContinuar = prompt("Insira 1 caso deseje cadastrar outro aluno");
    if(desejaContinuar != 1) {
        continuar = false;
    }else {
        indexDeAluno++
    }
}