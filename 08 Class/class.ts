class Customer {
    // Default: public
    code: number;
    name: string;
    address: string;
    city: string;
    state: string;
    phone: string;
    mail: string;
    age: number;

    constructor(code: number, name: string, address: string, city: string, state: string, phone: string, mail: string, age: number){
        this.code = code;
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.phone = phone;
        this.mail = mail;
        this.age = age;
    }

    dataCustomer() {
        console.log("========== Customer ==========");
        console.log("Id........: ", this.code);
        console.log("Name......: ", this.name);
        console.log("Address...: ", this.address);
        console.log("City......: ", this.city);
        console.log("State.....: ", this.state);
        console.log("Phone.....: ", this.phone);
        console.log("Mail......: ", this.mail);
        console.log("Age.......: ", this.age);
    }
}

let customer = new Customer(1, "Fabiano Pimentel", "Rua das Margaridas, 1", "Maringá", "PR", "+55 123-456", "a@a.com", 31);
customer.dataCustomer();