// Without Arrow Function
var firstExample = function (height, weight) {
    return height * weight;
};
var area = firstExample(5, 5);
console.log("Area: ", area);
// With Arrow Function
var secondExample = function (height, weight) { return height * weight; };
var areaTwo = secondExample(6, 5);
console.log("Area Two: ", areaTwo);
// Without Arrow Function
var multiply = function (numberOne, numberTwo) {
    return numberOne * numberTwo;
};
// With Arrow Function
var multiplyLambda = function (numberOne, numberTwo) { return numberOne * numberTwo; };
//
readFirstNumber = function (firstNumber) {
    console.log(firstNumber);
};
console.log("Without Arrow: ", multiply(5, 7));
console.log("With Arrow: ", multiplyLambda(5, 7));
readFirstNumber(35);
//# sourceMappingURL=arrowFunctions.js.map