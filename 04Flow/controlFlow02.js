// While | Do .. While
function numberDesc(number) {
    do {
        console.log(number);
        number--;
    } while (number >= 0);
}
numberDesc(3);
// For
function numberAsc(maxNumber) {
    for (var number = 0; number <= maxNumber; number++) {
        console.log(number);
    }
}
numberAsc(5);
// Foreach
function cities() {
    var cities = {
        cityOne: "Rio de Janeiro",
        cityTwo: "Paris",
        cityThree: "Los Angeles"
    };
    for (var key in cities) {
        console.log(key + ' = ' + cities[key]);
    }
}
cities();
//# sourceMappingURL=controlFlow02.js.map