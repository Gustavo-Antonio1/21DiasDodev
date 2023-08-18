let fome = prompt(" Você está com fome? digite 's' para sim e 'n' para não")
let dinheiro = prompt(" Você tem dinheiro? digite 's' para sim e 'n' para não")
let restaurante = prompt(" O restaurante está aberto? digite 's' para sim e 'n' para não")

if(fome === 'n' || dinheiro === 'n' ) {
    console.log("Hoje a janta será em casa")
} else if (fome === 's' && dinheiro === 's' && restaurante === 'n') {
    console.log("Peça um delivery!")
}else if(fome === 's' && dinheiro === 's' && restaurante === 's') {
    console.log("Hoje o jantar será no seu restaurante preferido!")
}