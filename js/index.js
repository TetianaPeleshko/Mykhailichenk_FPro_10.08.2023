'use strict';

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  printInfo() {
    console.log(`Ім'я: ${this.name}, вік: ${this.age}`);
  }
}

const person1 = new Person('John', 34);
const person2 = new Person('Jack', 17);
const person3 = new Person('Mary', 21);
const person4 = new Person('Mark', 15);

class Car {
  constructor(brand, model, year, licensPlate) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.licensPlate = licensPlate;
  }

  assignOwner(owner) {
    if (owner.age >= 18) {
      this.owner = owner;
    } else {
      this.errorMessage(owner.name);
    }
  }

  errorMessage(ownerName) {
    console.log(`Error: owner ${ownerName} must be over 18 years old`);
  }

  carInfo() {
    // метод виводу інформації про автомобіль
    console.log(
      `Brand: ${this.brand}, model: ${this.model}, year: ${this.year}, licensPlate: ${this.licensPlate}`
    );
    if (this.owner) {
      console.log('Information about the owner:');
      this.owner.printInfo();
    } else {
      console.log('The car has no owner');
    }
  }
}

const car1 = new Car('Ford', 'Focus', 2018, 'LM789UV');
const car2 = new Car('BMW', 'X5', 2021, 'МН2345КЕ');
const car3 = new Car('Honda', 'Civic', 2019, 'XY456ZT');
const car4 = new Car('Volkswagen', 'Passat', 2023, 'ВС4567АА');

car1.assignOwner(person1);
car2.assignOwner(person2);
car3.assignOwner(person3);
car4.assignOwner(person4);

car1.carInfo();
car2.carInfo();
car3.carInfo();
car4.carInfo();
