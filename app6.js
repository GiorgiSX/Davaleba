function fizzBuzzForLoop(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
function fizzBuzzWhileLoop(n) {
    let i = 1;
    while (i <= n) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
        i++;
    }
}
function fizzBuzzDoWhileLoop(n) {
    let i = 1;
    do {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
        i++;
    } while (i <= n);
}

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));


let doubledNumbers = numbers.map(num => num * 2);

let evenNumbers = numbers.filter(num => num % 2 === 0);


let sortedNumbers = numbers.sort((a, b) => a - b);
