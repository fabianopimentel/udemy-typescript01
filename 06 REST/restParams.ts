function myName(firstName: string, ... fullLastName: string[]) {
    return firstName + " " + fullLastName.join(" ");
}

let employeeName = myName("Fabiano", "Colombo", "Pimentel"); // Ilimitado
console.log(employeeName);


function sumNumbers(numberOne: number, numberTwo: number, ... numbers: number[]) {
    var result = numberOne + numberTwo;

    for (var index = 0; index < numbers.length; index++) {
        result += numbers[index];
    }
    return result;
}

let sum = sumNumbers(10, 20, 30 , 40, 50, 60, 70, 80, 90);
console.log("Result: ", sum);