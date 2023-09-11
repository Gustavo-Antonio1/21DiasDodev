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
CadastrarReserva()

function CadastrarReserva() {
    let idHotel;
    let existe = false
    do {
        idHotel = parseInt(prompt("insira o id do hotel no qual deseja fazer a reserva"))
        hoteis.forEach(hotel =>  {
            if (hotel.Id === idHotel) {
                existe = true;
            } 
        });

        if (!existe) {
            console.log("Hotel nao encontrado.");
            idHotel = parseInt(prompt("insira o id do hotel no qual deseja fazer a reserva"))
        }
    } while (!existe) {
        let responsavel = prompt("por gentileza informar o nome do responsavel")
        let diaEntrada = parseInt(prompt("Insira o dia de entrada no hotel"))
        let diaSaida;

        do {
            diaSaida = parseInt(prompt("Insira o dia de saida"))
            if (diaSaida < diaEntrada ) {
                console.log("Reserva feita com sucesso")
            }
        } while (diaEntrada >= diaSaida)
            console.log("o dia de saida deve ser posterior ao o dia de entrada")

        let reserva = new Reserva(idReserva, idHotel, responsavel, diaEntrada, diaSaida)
        idReserva++
        reservas.push(reserva)
    }
}

function ProcurarReservasPorHotel(idHotel) {
    reservas.forEach(reserva => {
        if(idHotel == reserva.idHotel) {
            let i = idHotel -1 
            console.log("hotel:", hoteis[i].Nome)
            console.log("responsavel:", reserva.Responsavel)
            console.log("Dia de entrada", reserva.DiaEntrada)
            console.log("Diam de Saida:", reserva.DiaSaida)
        }
    })
}

function ProcurarHotelPorReserva(idReserva) {
    let idHotel = reservas[idReserva -1].idHotel
    console.log("hotel:", hoteis[idHotel - 1].Nome)
    console.log("endereco:", hoteis[idHotel - 1].Endereco)
    console.log("Dia de entrada", reservas[idReserva - 1].DiaEntrada)
    console.log("Diam de Saida:", reservas[idReserva - 1].DiaSaida)
}

function ProcurarReservaPeloNome(nome){
    for (let i = 0; i< reservas.length; i++) {
        if(nome == reservas[i].Responsavel) {
            console.log("Id da Reserva: " + reservas[i].Id)
            console.log("hotel: " + hoteis[(reservas[i].idHotel) - 1].Nome)
        }
         
    }
}

function ProcurarHotelPelaCategoria(categoria) {
    let hoteisProcurados = []
    for (let i = 0; i < hoteis.length; i++) {
        if(categoria == hoteis[i].Categoria) {
            hoteisProcurados.push(hoteis[i].Nome)
        }
    
    }
    return hoteisProcurados
}



function AtualizarTelefone(idHotel, telefone) {
    hoteis[idHotel-1].Telefone = telefone
    console.log("Numero de telefone atualizado!")
}


let continuar = true

do {
    let opcao = prompt("escolha uma opcao: \n1 - CadastrarHotel\n2 - CadastrarReserva\n3 - Procurar Reserva pelo Hotel\n4 - Procurar hotel pela reserva\n5 - Procurar reserva pelo responsavel\n6 - Procurar hoteis por categoria\n7 - Atualizar telefone de um hotel \n8 - encerrar o programa")

    switch(opcao) {
        case 1:
            CadastrarHotel();
            break;
        case 2:
            CadastrarReserva();
            break;
        case 3:
            ProcurarReservasPorHotel(prompt("Digite o id do hotel"))
            break;
        case 4:
            ProcurarHotelPorReserva(prompt("Digite o id da reserva"))
            break;
        case 5:
            ProcurarReservaPeloNome(prompt("Digite o nome do responsavel pela reserva"))
            break;
        case 6:
            let hoteisProcurados = ProcurarHotelPelaCategoria(parseInt(prompt("Digite a catergoria que deseja procurar")))
            console.log(hoteisProcurados)
        case 7:
            let idHotel = parseInt(prompt("Digite o id do hotel que deseja atualizar"))
            let telefone = prompt("digite o novo telefone")
            AtualizarTelefone(idHotel, telefone)
            break;
        case 8:
            console.log("programa encerrado")
            continuar= false
            break;
        default:
            console.log("opcao invalida")
            break;
    }
}while (continuar)   




