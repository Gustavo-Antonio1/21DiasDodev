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