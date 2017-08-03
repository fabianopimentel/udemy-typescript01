
// Without Arrow Function
var firstExample = function(height: number, weight: number) {
    return height * weight;
}
let area = firstExample(5, 5);
console.log("Area: ", area);

// With Arrow Function
var secondExample = (height: number, weight: number) => height * weight;
let areaTwo = secondExample(6, 5);
console.log("Area Two: ", areaTwo);

// Without Arrow Function
var multiply = function(numberOne: number, numberTwo: number) : number {
    return numberOne * numberTwo;
}

// With Arrow Function
var multiplyLambda = (numberOne: number, numberTwo: number) => numberOne * numberTwo;

//
readFirstNumber = function(firstNumber: number) {
    console.log(firstNumber);
}

console.log("Without Arrow: ", multiply(5, 7));
console.log("With Arrow: ", multiplyLambda(5, 7));
readFirstNumber(35);