// First
class Size {
    area: number;

    constructor(area: number) {
        this.area = area;
    }
}

class Circle extends Size {
    constructor(area: number) {
        super(area)
    }

    areaSizeTotal() {
        console.log("Area...: " + this.area);
    }
}

let circle = new Circle(250);
circle.areaSizeTotal();

// Second
class Person {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        private age: number
    ){}

    showPerson() {
        console.log("Welcome " + this.firstName + " " + this.lastName);
    }
}

class Student extends Person {
    constructor(
        firstName: string,
        lastName: string,
        email: string,
        age: number,
        private turn: number,
        private graduationType: string
    ) {
        super(firstName, lastName, email, age);
    }

    showStudent() {
        super.showPerson();
        console.log("My name is " + this.firstName + ", student of " 
        + this.graduationType + " on " + this.turn + " turn.")
    }
}

let student = new Student("Fabiano", "Pimentel", "mail@mail.com", 31, 2, "Science Computer");
student.showStudent();