let valor = 0
let quantidade = 0

let opcao = Number(prompt("Escolha uma das seguintes opces \n1 - abastecer com gasolina\n2 - abastecer com álcool\n3 - calibrar pneus"))

switch(opcao) {
    case 1:
        valor = Number(prompt("Qual o valor em R$ que deseja abastecer?"))
        quantidade = valor / 5 
        console.log("Foram abastecidos " + quantidade + " litros de gasolina")
        break;
    case 2:
        valor = Number(prompt("Qual o valor em R$ que deseja abastecer?"))
        quantidade = valor / 3 
        console.log("Foram abastecidos " + quantidade + " litros de alcool")
        break;
    case 3:
        console.log("Pneus calibrados com sucesso!")
        break;
    default:
        console.log("Opcão invalida!") 
}