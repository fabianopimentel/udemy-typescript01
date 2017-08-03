// While | Do .. While
function numberDesc(number: number) {
    do {
        console.log(number);
        number--;
    } while (number >= 0);    
}
numberDesc(3);

// For
function numberAsc(maxNumber: number) {
    for (var number = 0; number <= maxNumber; number++) {
        console.log(number);
    }
}
numberAsc(5);

// Foreach
function cities() {
    let cities {
        cityOne: "Rio de Janeiro",
        cityTwo: "Paris",
        cityThree: "Los Angeles"
    }
    for (var city in cities) {
        console.log(city + ' = ' + cities[city]);
    }
}
cities();