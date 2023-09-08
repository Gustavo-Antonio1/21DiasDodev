class Hotel {
    Id
    Nome
    Categoria
    Endereco
    Telefone
    constructor(id, nome, categoria, endereco, telefone){
        this.Id = id
        this.Nome = nome
        this.Categoria = categoria
        this.Endereco = endereco
        this.Telefone = telefone
    }
}

class Reserva {
    Id
    IdHotel
    Responsavel
    DiaEntrada
    DiaSaida
    constructor(id, idHotel, responsavel, diaEntrada, diaSaida) {
        this.Id = id
        this.IdHotel = idHotel
        this.Responsavel = responsavel
        this.DiaEntrada = diaEntrada
        this.DiaSaida = diaSaida
    }
}

let hoteis = [];
let reservas = [];
let idHotel = 1;
let idReserva = 1;

function CadastrarHotel() {
    let nome = prompt("Insira o nome do hotel que deseja cadastrar");
    let categoria = parseInt(prompt("Insira a Categoria do hotel que deseja cadastrar"));
    let endereco = prompt("Insira aqui o endereco do hotel que deseja cadastrar");
    let telefone = prompt("Insira o telefone do hotel que deseja cadastrar")
    let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone,)
    idHotel++
    hoteis.push(hotel)
}

CadastrarHotel()