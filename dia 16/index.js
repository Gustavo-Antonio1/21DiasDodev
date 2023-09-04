let nomes = [];
let senhas = [];
let opcao;
let continuar = true

while(continuar) {
    EscolhaUsuario()

    switch (opcao) {
        case 1:
            CadastrarUsuario()
            break;
        case 2:
            LoginUsuario()
            break;
        case 3: 
            ExcluirCadastro()
            break;
        case 4:
            console.log("Sistema encerrado")
            continuar = false
            break;
        default:
            console.log("Acao invalida")
            break;
    }
}



function EscolhaUsuario() {
    opcao = Number(prompt("Insira o numero correspondente a acao desejada: \n1 - para Cadastrar\n2 - para fazer login\n3 - para excluir usuario\n4 - para encerrar o programa"))

    return opcao;
}

function CadastrarUsuario() {
    let nomeInserido = prompt("Por gentileza insira o nome de usuario.")
    let senhaInserida = prompt("Por gentileza insira a senha desejada.")

    nomes.push(nomeInserido)
    senhas.push(senhaInserida)

    console.log("Usuario cadastrado com sucesso")
}

function LoginUsuario(nome, senha) {
    nome = prompt("Insira aqui o nome de usuario")
    senha = prompt("Insira aqui a sua senha")

    if(nomes.includes(nome) && senhas.includes(senha)) {
        console.log("Login efetuado com sucesso")
    } else {
        console.log("login invalido")
    }
}

function ExcluirCadastro(nome){
    nome = prompt("Insira o nome do usuario a ser excluido")
    let indice = nomes.indexOf(nome)
    if(indice !== -1) {
        nomes.splice(indice, 1)
        senhas.splice(indice, 1)
        console.log("Cadastro excluido com sucesso") 
    }else {
        console.log("Usuario nao encontrado")
    }
}

