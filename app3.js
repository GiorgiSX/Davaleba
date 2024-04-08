
function addNumbers(num1, num2, ) {
    return num1 + num2;
}

function addArrayNumbers(numbersArray, sumStorage) {
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i];
    }

    sumStorage.sum = sum;
}


function findMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}


let result1 = addNumbers(15, 21);
console.log("Result of adding numbers:", result1); 
let numbers = [21, 32, 3, 14, 25];
let sumObject = {}; 
addArrayNumbers(numbers, sumObject);
console.log("Sum of array numbers:", sumObject.sum); 

let numbersArray = [23, 17, 52, 9, 11, 55];
let maxNumber = findMax(numbersArray);
console.log("Maximum number in array:", maxNumber); 
