let modelos = [];
let anos = [];
let valores = [];
let continuar = 'S'
contador = 0


while (continuar === 'S') {
    let modeloInserido = prompt("Por gentileza insira o modelo do carro")
    let anoInserido = Number(prompt("Por gentileza insira o ano de lancamento do carro"))
    let valorInserido = Number(prompt("Por gentileza insira o valor do carro"))

    modelos[contador] = modeloInserido
    anos[contador] = anoInserido
    valores[contador] = valorInserido

    contador++

    let opcao = prompt("Digite 'C' para cadastrar outro carro")
    if (opcao != 'C') {
        continuar = false
    }

    console.log("modelos dos carros: " + modelos + ", ano: " + anos + " e valor: " + valores)
}

for (let i = 0; i < valores.length - 1; i++) {
    for (let j = 0; j < valores.length - i - 1; j++) {
        if (valores[j] > valores[j + 1]) {

            let novoModelos = modelos[j]
            modelos[j] = modelos[j + 1]
            modelos[j + 1] = novoModelos

            let novoAno = anos[j]
            anos[j] = anos[j + 1]
            anos[j + 1] = novoAno

            let MaiorValor = valores[j]
            valores[j] = valores[j + 1]
            valores[j + 1] = MaiorValor
        }
    }
}

for (let i = 0; i < modelos.length; i++) {
    console.log("modelos dos carros: " + modelos[i] + ", ano: " + anos[i] + " e valor: " + valores[i])
}






