let nomes = [];
let senhas = [];
let continuar = 'S'
let nomeInserido;
let senhaInserida;
let contador = 0

while (continuar === 'S') {

    let opcao = Number(prompt("Selecione a acao que deseja realizar: \n1 - Cadastrar\n2 - Login\n3 - Excluir usuario\n4 - Encerrar programa"));

    switch (opcao) {
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
            for (let i = 0; i < nomes.length; i++) {
                if (nomes[i] === nomeInserido) {
                    if (senhas[i] === senhaInserida)
                        console.log("Login efetuado com sucesso")
                } else if (i == (nomes.length - 1)) {
                    console.log("Login invalido")
                }
            }
            break;
        case 3:
            let nomesSup = [];
            let senhasSup = [];
            let contSup = 0
            nomeInserido = prompt("Insira aqui o nome do usuario")
            for (let i = 0; i < nomes.length; i++) {
                if (nomeInserido === nomes[i]) {
                    console.log("Usuario excluido com sucesso")
                } else {
                    nomesSup[contSup] = nomes[i]
                    senhasSup[contSup] = senhas[i]
                    contSup++
                }
            }
            nomes = nomesSup
            senhas = senhasSup
            break;
        default:
            console.log("Sistema encerrado")
            continuar = false
            break;
    }
}