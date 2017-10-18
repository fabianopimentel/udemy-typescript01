var Mobile = /** @class */ (function () {
    function Mobile(model, version, price) {
        this.model = model;
        this.version = version;
        this.price = price;
    }
    Mobile.prototype.ring = function () {
        return "Beep! Beep!";
    };
    return Mobile;
}());
var Landline = /** @class */ (function () {
    function Landline(model, version, price) {
        this.model = model;
        this.version = version;
        this.price = price;
    }
    Landline.prototype.ring = function () {
        return "Pein! Pein!";
    };
    return Landline;
}());
var landline = new Landline("IntelBras", 98, 100);
var mobile = new Mobile("iPhone", 10, 3000);
var phones = [];
phones.push(landline);
phones.push(mobile);
for (var _i = 0, phones_1 = phones; _i < phones_1.length; _i++) {
    var phone = phones_1[_i];
    console.log(phone.model + " v." + phone.version + " makes " + phone.ring() + "and cost " + phone.price);
}
//# sourceMappingURL=Interfaces.js.map