function myName(firstName) {
    var fullLastName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fullLastName[_i - 1] = arguments[_i];
    }
    return firstName + " " + fullLastName.join(" ");
}
var employeeName = myName("Fabiano", "Colombo", "Pimentel"); // Ilimitado
console.log(employeeName);
function sumNumbers(numberOne, numberTwo) {
    var numbers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        numbers[_i - 2] = arguments[_i];
    }
    var result = numberOne + numberTwo;
    for (var index = 0; index < numbers.length; index++) {
        result += numbers[index];
    }
    return result;
}
var sum = sumNumbers(10, 20, 30, 40, 50, 60, 70, 80, 90);
console.log("Result: ", sum);
//# sourceMappingURL=restParams.js.map