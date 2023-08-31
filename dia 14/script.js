let yourName;
let salary;
let Increase = 0
let finalSalary

getInfos()

function getInfos() {
    yourName = prompt("Insert here your name");
    salary = parseFloat(prompt("Insert here your actual salary"));
    calcSalaryIncrease(yourName, salary);
}

function calcSalaryIncrease(yourName, salary) {

    if (salary <= 1500) {
        Increase = 0.2
    } else if (salary <= 2000) {
        Increase = 0.15
    } else if (salary <= 3000) {
        Increase = 0.1
    } else {
        Increase = 0.05
    }

    finalSalary = salary + (salary * Increase)

    console.log(yourName + " your salary is: " + salary + " your increase is " + (Increase * 100) + "%, and your finalSalary is gonna be: " + finalSalary)

    askAgain()
}

function askAgain() {
    let option = Number(prompt("You want to redo the operation with new infos? \n1 for yes\n2 for no "))

    switch (option) {
        case 1:
            getInfos();
            break;
        case 2:
            console.log("Operation ended")
            break;
        default:
            console.log("Invalid operation")
    }
}