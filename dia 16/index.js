let nomes = [];
let senhas = [];


function EscolhaUsuario() {
    let opcao = Number(prompt("Insira o numero correspondente a acao desejada: \n1 - para Cadastrar\n2 - para fazer login\n3 - para excluir usuario\n4 para encerrar o programa"))

    return opcao;
}

function CadastrarUsuario () {
    let nomeInserido = prompt("Por gentileza insira o nome de usuario.")
    let senhaInserida = prompt("Por gentileza insira a senha desejada.")

    nomes.push(nomeInserido)
    senhas.push(senhaInserida)
}

CadastrarUsuario()
