function fullName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var resultOne = fullName("Fabiano");
var resultTwo = fullName("Fabiano", "Pimentel");
console.log("Just firstName: " + resultOne);
console.log("firstName + lastName: " + resultTwo);
function sumParams(numberOne, numberTwo, numberThree) {
    var sum = numberOne + numberTwo;
    if (numberThree != undefined)
        sum += numberThree;
    return sum;
}
// With Optional Parameter
var result = sumParams(15, 20, 35);
console.log("Sum Result: " + result);
// Without Optional Parameter
result = sumParams(15, 20);
console.log("Sum Result: " + result);
//# sourceMappingURL=optionalParams.js.map