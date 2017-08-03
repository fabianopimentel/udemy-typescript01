function myName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Pimentel"; }
    return firstName + " " + lastName;
}
var name = myName("Fabiano");
console.log(name);
var nameTwo = myName("Fabiano", undefined); // OK
console.log(nameTwo);
var nameThree = myName("Fabiano", "Colombo"); // OK
console.log(nameThree);
function getDiscount(price, tax) {
    if (tax === void 0) { tax = 0.50; }
    var discount = price * tax;
    console.log("The value of discount and tax is: ", discount);
}
getDiscount(1000);
getDiscount(1000, 0.30);
//# sourceMappingURL=defaultParams.js.map