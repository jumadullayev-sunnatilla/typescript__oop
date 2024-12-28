console.log("OOP");
class Person {
  name: string;
  age: number;
  isMarried: boolean;
  constructor(name: string, age: number, married: boolean) {
    this.name = name;
    this.age = age;
    this.isMarried = married;
  }
  getInfo(): string {
    return `${this.name} is ${this.age} year${this.age === 1 ? "" : "s"} old`;
  }
}
const person = new Person("Sunnat", 16, true);
console.log(person);

class Student extends Person {
  course: string;
  constructor(name: string, age: number, married: boolean, kurs: string) {
    super(name, age, married);
    this.course = kurs;
  }
}
const student = new Student("qwee", 1, false, "n72");
console.log(student.getInfo());
class Car {
  private name: string;
  public price: number;
  readonly year: number;
  constructor(name: string, price: number, year: number) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}
const car = new Car("BMW", 30_000, 2022);

console.log(car.year);

// 3 -abstract

abstract class Shape {
  abstract calcYuza(): number;
}
class Kvadrad extends Shape {
  a: number;
  constructor(a: number) {
    super();
    this.a = a;
  }
  calcYuza(): number {
    return this.a * this.a;
  }
}
const shape = new Kvadrad(3);
console.log(shape.calcYuza());
