class Carro {
    nome
    potencia
    velocidadeMaxima
    aceleracao
    constructor(nome, potencia, velocidadeMaxima, aceleracao) {
        this.nome = nome
        this.potencia = potencia
        this.velocidadeMaxima = velocidadeMaxima
        this.aceleracao = aceleracao
    }

    calcularTempoPercurso(distancia) {
        let resultado = distancia / (velocidadeMaxima / aceleracao);
        return resultado;
    }
}

let carros = []

let carroUm = new Carro('mercedes', 1044, 326, 3.2)
let carroDois = new Carro('Ferrari', 1065, 320, 5 )
let carroTres = new Carro ('Haas', 1025, 330, 7)
carros[0] = carroUm
carros[1] = carroDois
carros[2] = carroTres

class Corrida {
    nome
    tipo
    distancia
    vencedor
    constructor(nome, tipo, distancia, vencedor) {
        this.nome = nome
        this.tipo = tipo
        this.distancia = distancia
        this.vencedor = vencedor
    }
}

