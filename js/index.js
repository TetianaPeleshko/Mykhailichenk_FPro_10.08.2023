'use strict';

class Student {
  constructor(name, surname, birthYear) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);
  }

  getAge() {
    const currentAge = new Date().getFullYear();
    return currentAge - this.birthYear;
  }

  getAverageGrade() {
    if (this.grades.length === 0) {
      return 0;
    }

    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  }

  // приватний метод класу, оновлює список відвідуванності, приймає один аргумент isPresent, вказує, чи особа була присутня на занятті
  _upAttendance(isPresent) {
    const index = this.attendance.findIndex((item) => item === null);
    if (index !== -1) {
      // виводе -1 тільки якщо немає елемента з true
      this.attendance[index] = isPresent;
    }
  }

  present() {
    this._upAttendance(true);
  }

  absent() {
    this._upAttendance(false);
  }

  // перевірка середньої оцінки і середньої відвідуванності (кількістьВідвідин / кількістьЗанять)
  summary() {
    const averageGrade = this.getAverageGrade();
    const averageAttendance =
      this.attendance.filter((item) => item === true).length /
      this.attendance.length;

    if (averageGrade > 90 && averageAttendance > 0.9) {
      return 'Well done!';
    } else if (averageGrade > 90 || averageAttendance > 0.9) {
      return 'Good, but it can be better';
    } else {
      return 'Radish!';
    }
  }
}

let student1 = new Student('Alex', 'Ivanov', 2000);
let student2 = new Student('John', 'Smith', 1988);
let student3 = new Student('Bob', 'Konar', 2005);

student1.present();
student1.present();
student1.present();
student1.absent();

student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();

student3.absent();
student3.absent();
student3.present();

student1.grades = [45, 56, 89, 100, 99, 67];
student2.grades = [98, 89, 99, 100, 100];
student3.grades = [95, 88, 100, 100, 92];

console.log(student1.attendance);
console.log(student2.attendance);
console.log(student3.attendance);

console.log(
  `The age of the student and average grade: ${student1.name} ${
    student1.surname
  } ${student1.getAge()} ${student1.summary()}`
);

console.log(
  `The age of the student and average grade: ${student2.name} ${
    student2.surname
  } ${student2.getAge()} ${student2.summary()}`
);

console.log(
  `The age of the student and average grade: ${student3.name} ${
    student3.surname
  } ${student3.getAge()} ${student3.summary()}`
);
