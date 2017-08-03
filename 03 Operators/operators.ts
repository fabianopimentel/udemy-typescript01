function sumOperator(numberOne: number, numberTwo: number) {
    sum = numberOne + numberTwo;
    console.log("Sum: " + sum);
}
sumOperator(10,2);

function subOperator(numberOne: number, numberTwo: number) {
    sub = numberOne - numberTwo;
    console.log("Sub: " + sub);
}
subOperator(10,2);

function multOperator(numberOne: number, numberTwo: number) {
    mult = numberOne * numberTwo;
    console.log("Mult: " + mult);
}
multOperator(10,2);

function divOperator(numberOne: number, numberTwo: number) {
    div = numberOne / numberTwo;
    console.log("Div: " + div);
}
divOperator(10,2);

function modOperator(numberOne: number, numberTwo: number) {
    mod = numberOne % numberTwo;
    console.log("Mod: " + mod);
}
modOperator(10,2);

var numberOne: number = 17;
numberOne++;
console.log(`Next value: ${numberOne}`)

var numberTwo: number = 15;
numberOne--;
console.log(`Prev value: ${numberTwo}`)