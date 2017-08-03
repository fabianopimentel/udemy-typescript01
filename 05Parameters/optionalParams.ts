function fullName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let resultOne = fullName("Fabiano");
let resultTwo = fullName("Fabiano", "Pimentel");

console.log(`Just firstName: ${resultOne}`);
console.log(`firstName + lastName: ${resultTwo}`);

function sumParams(numberOne: number, numberTwo: number, numberThree?: number) {
    let sum = numberOne + numberTwo;
    if (numberThree != undefined)
        sum += numberThree;
    return sum;
}
// With Optional Parameter
let result = sumParams(15,20, 35);
console.log(`Sum Result: ${result}`);
// Without Optional Parameter
result = sumParams(15,20);
console.log(`Sum Result: ${result}`);