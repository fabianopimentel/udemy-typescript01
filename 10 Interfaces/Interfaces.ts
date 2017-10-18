interface IPhone {
    model: string;
    version: number;
    price: number;
    ring(): string;
}

class Mobile implements IPhone {
    constructor(
        public model: string,
        public version: number,
        public price: number
    ){}
    ring() {
        return "Beep! Beep!"
    }
}    

class Landline implements IPhone {
    constructor(
    public model: string,
    public version: number,
    public price: number
    ){}
    ring() {
        return "Pein! Pein!"
    }
}

let landline = new Landline("IntelBras", 98, 100);
let mobile = new Mobile("iPhone", 10, 3000);

var phones: IPhone[] = [];
phones.push(landline);
phones.push(mobile);

for (var phone of phones) {
    console.log(phone.model + " v." + phone.version + " makes " + phone.ring() + "and cost " + phone.price);
}