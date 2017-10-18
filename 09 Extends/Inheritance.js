var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// First
var Size = /** @class */ (function () {
    function Size(area) {
        this.area = area;
    }
    return Size;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(area) {
        return _super.call(this, area) || this;
    }
    Circle.prototype.areaSizeTotal = function () {
        console.log("Area...: " + this.area);
    };
    return Circle;
}(Size));
var circle = new Circle(250);
circle.areaSizeTotal();
// Second
var Person = /** @class */ (function () {
    function Person(firstName, lastName, email, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }
    Person.prototype.showPerson = function () {
        console.log("Welcome " + this.firstName + " " + this.lastName);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, lastName, email, age, turn, graduationType) {
        var _this = _super.call(this, firstName, lastName, email, age) || this;
        _this.turn = turn;
        _this.graduationType = graduationType;
        return _this;
    }
    Student.prototype.showStudent = function () {
        _super.prototype.showPerson.call(this);
        console.log("My name is " + this.firstName + ", student of "
            + this.graduationType + " on " + this.turn + " turn.");
    };
    return Student;
}(Person));
var student = new Student("Fabiano", "Pimentel", "mail@mail.com", 31, 2, "Science Computer");
student.showStudent();
//# sourceMappingURL=Inheritance.js.map