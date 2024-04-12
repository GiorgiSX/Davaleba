function trueyFalsyCheck(value) {
    if (value) {
        return "Truthy";
    } else {
        return "Falsy";
    }
}
let age = parseInt(prompt("Enter your age:"));

if (age < 18) {
    alert("You are a minor");
} else if (age >= 18 && age <= 65) {
    alert("You are an adult");
} else {
    alert("You are a senior citizen");
}
let grade = 85;

switch (true) {
    case (grade >= 90 && grade <= 100):
        console.log("A");
        break;
    case (grade >= 80 && grade < 90):
        console.log("B");
        break;
    case (grade >= 70 && grade < 80):
        console.log("C");
        break;
    case (grade >= 60 && grade < 70):
        console.log("D");
        break;
    default:
        console.log("F");
}
