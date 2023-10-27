// Task 1 Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….)

let result = '';

for (let i = 20; i <= 30; i += 0.5) {
  result += i;
  if (i < 30) {
    result += ' ';
  }
}
alert(result);

// Task 2 Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
let result2 = '';
for (let j = 10; j <= 100; j += 10) {
  result2 += `${j} * 27 = ${j * 27}
  `;
}
alert(result2);

// Task 3 Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N
let numInteger = Number(prompt('Ведить ціле число:'));
let integerResult = '';

for (let k = 1; k * k <= numInteger; k++) {
  integerResult += `${k}, `;
}
alert(integerResult);

// Task 4 Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

let numInteger1 = Number(prompt('Ведить ціле число:'));
let resultInt = '';

if (numInteger1 <= 1) {
  console.log('Число не є простим');
} else {
  for (let l = 2; numInteger1 % l !== 0; l++) {
    resultInt = l;
  }
  if (resultInt === numInteger1 - 1) {
    alert('Число є простим');
  } else {
    alert('Число не є простим');
  }
}

// Task 5 Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна)

let someNumber = Number(prompt('Ведить число:'));
let degreeNumber;

for (let g = 1; 3 ** g <= someNumber; g++) {
  degreeNumber = g;
}

if (3 ** degreeNumber === someNumber) {
  alert(
    `Число ${someNumber} можна отримати шляхом зведення числа 3 у ступінь ${degreeNumber}`
  );
} else {
  alert(
    `Число ${someNumber} не можна отримати шляхом зведення числа 3 у деякий ступінь`
  );
}
