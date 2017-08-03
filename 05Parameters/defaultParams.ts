function myName(firstName: string, lastName = "Pimentel") {
    return firstName + " " + lastName;
}
let name = myName("Fabiano");
console.log(name);

let nameTwo = myName("Fabiano", undefined); // OK
console.log(nameTwo);

let nameThree = myName("Fabiano", "Colombo"); // OK
console.log(nameThree);

function getDiscount(price: number, tax = 0.50) {
    var discount = price * tax;
    console.log("The value of discount and tax is: ", discount);
}

getDiscount(1000);
getDiscount(1000, 0.30);