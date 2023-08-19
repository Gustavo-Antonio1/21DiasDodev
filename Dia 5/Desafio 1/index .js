let number1 = Number(prompt("Insert here the first number."))
let number2 = Number(prompt("Insert here the second number"))

let option = Number(prompt("choose one option on calculator \n1 - addition\n2 - subtraction\n3 - multiplication\n4 - Division"))

switch (option) {
    case 1:
        console.log(" Number1 + Number 2 = " + (number1 + number2))
        break;
    case 2:
        console.log("Number 1 - Number 2 = " + (number1 - number2))
        break;
    case 3:
        console.log(" Number1 x Number 2 = " + (number1 * number2))
        break;
    case 4:
        console.log("Number 1 / Number 2 = " + (number1 / number2))
        break;
    default:
        console.log("Invalid option my friend.")
}

