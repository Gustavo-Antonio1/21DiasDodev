let nomes = [];
let senhas = [];
let continuar = 'S'
let nomeInserido;
let senhaInserida;
let contador = 0

while(continuar === 'S'){
    
    let opcao = Number(prompt("Selecione a acao que deseja realizar: \n1 - Cadastrar\n2 - Login\n3 - Excluir usuario\n4 - Encerrar programa"));

switch(opcao) {
    case 1:
        nomeInserido = prompt("Insira aqui o nome do usuario")
        senhaInserida = prompt("Insira uma senha")
        nomes[contador] = nomeInserido
        senhas[contador] = senhaInserida
        contador++
        console.log("Cadastro realizado com sucesso")
        break;
    case 2:
        nomeInserido = prompt("Insira aqui o nome do usuario")
        senhaInserida = prompt("insira aqui a sua senha")

}

}