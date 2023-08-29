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
        let resultado = distancia / (this.velocidadeMaxima / this.aceleracao);
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
    vencedor = ''
    constructor(nome, tipo, distancia,) {
        this.nome = nome
        this.tipo = tipo
        this.distancia = distancia
    }

    VerificarVencedor(carros) {
        let menorTempo = 10000
        for (let i = 0; i < carros.length; i++) {
            let tempo = carros[i].calcularTempoPercurso(this.distancia)
            if(tempo < menorTempo) {
                menorTempo = tempo
                this.vencedor = carros[i].nome
            }         
        }
    }

    MostrarVencedor(carros) {
        this.VerificarVencedor(carros)
        console.log("O vencedor e: " + this.vencedor)
    }
}

let corrida = new Corrida("Monza", "Formula 1", 305)
corrida.MostrarVencedor(carros)

