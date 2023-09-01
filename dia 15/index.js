let arrayA = [10, 23, 62, 45, 89, 21, 67, 102, 302, 75]
let arrayB = [10, 56, 34, 89, 67, 22, 102, 75, 199, 20]
let arrayC = [];
let contadorArrayC = 0

function CompareArrays(array1, array2) {

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]) {
                arrayC[contadorArrayC] = array1[i]
                contadorArrayC++
                j = array2.length
            }
        }

    }
    return arrayC
}


console.log(CompareArrays(arrayA, arrayB))

