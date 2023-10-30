'use strict';

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

const person1 = new Person('Andriy', 'man');
const person2 = new Person('Mariay', 'female');
const person3 = new Person('Tata', 'female');

console.log(person1);
console.log(person2);
console.log(person3);

class Flat {
  residents = [];
  addResident(person, flat) {
    if (person instanceof Person) {
      this.residents.push(person);
      console.log(`The resident ${person.name} was added to the apartment`);
    } else {
      console.error(
        `Error: the parameter must bean an instance of the class Person`
      );
    }
  }
}

const flat1 = new Flat();
const flat2 = new Flat();
const flat3 = new Flat();
const flat4 = new Flat();

flat1.addResident(person1);
flat1.addResident(person2);
flat2.addResident(person3);

class House {
  flats = [];
  maxFlats;

  constructor(maxFlats) {
    this.maxFlats = maxFlats;
  }

  addFlat(flat) {
    if (this.flats.length < this.maxFlats) {
      this.flats.push(flat);
      if (this.flats.length === this.maxFlats) {
        console.log(
          'The maximum number of flats in the building has been reached'
        );
      } else {
        console.log('The flat was added to the house');
      }
    } else {
      console.log(
        'Can`t be added, the maximum number of flats has already been reached'
      );
    }
  }
}

const house = new House(3);

house.addFlat(flat1);
house.addFlat(flat2);
house.addFlat(flat3);
house.addFlat(flat4);
