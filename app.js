var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("OOP");
var Person = /** @class */ (function () {
    function Person(name, age, married) {
        this.name = name;
        this.age = age;
        this.isMarried = married;
    }
    Person.prototype.getInfo = function () {
        return "".concat(this.name, " is ").concat(this.age, " year").concat(this.age === 1 ? "" : "s", " old");
    };
    return Person;
}());
var person = new Person("Sunnat", 16, true);
console.log(person);
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, married, kurs) {
        var _this = _super.call(this, name, age, married) || this;
        _this.course = kurs;
        return _this;
    }
    return Student;
}(Person));
var student = new Student("qwee", 1, false, "n72");
console.log(student.getInfo());
var Car = /** @class */ (function () {
    function Car(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
    return Car;
}());
var car = new Car("BMW", 30000, 2022);
console.log(car.year);
// 3 -abstract
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Kvadrad = /** @class */ (function (_super) {
    __extends(Kvadrad, _super);
    function Kvadrad(a) {
        var _this = _super.call(this) || this;
        _this.a = a;
        return _this;
    }
    Kvadrad.prototype.calcYuza = function () {
        return this.a * this.a;
    };
    return Kvadrad;
}(Shape));
var shape = new Kvadrad(3);
console.log(shape.calcYuza());
