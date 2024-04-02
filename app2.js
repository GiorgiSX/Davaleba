
const firstName = "George";
const lastName = "Skhirtladze";
const fullName = `${firstName} ${lastName}`;
console.log(fullName); 


const lowercaseString = "hello world";
const uppercaseString = lowercaseString.toUpperCase();
console.log(uppercaseString); 


const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber); 


const numbersArray = [1, 2, 3, 4, 5];
const reversedArray = numbersArray.reverse();
const withoutLastDigit = reversedArray.map(num => Math.floor(num / 10));
const remainder = 5 % 2;
console.log(remainder);


const myObject = { id: 1234678, name: "Hello" };
const keysArray = Object.keys(myObject);
const newArray = [...numbersArray, myObject.id, myObject.name];
console.log(newArray); 