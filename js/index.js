// Task1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
let result = '';
for (let i = 10; i <= 20; i++) {
  result += i;
  if (i < 20) {
    result += ', ';
  }
}
alert(result);

// Task2. Вивести квадрати чисел від 10 до 20.
let square = '';
for (let j = 10; j <= 20; j++) {
  square += `${j * j} `;
}
alert(square);

// Task3. Вивести таблицю множення на 7
let multTableSeven = '';
for (let k = 1; k <= 10; k++) {
  multTableSeven += `7 * ${k} = ${7 * k}
  `;
}
alert(multTableSeven);

let multTableSevenWhile = 7;
let n = 1;
let result = '';

while (n <= 10) {
  result += `${multTableSevenWhile} * ${n} = ${multTableSevenWhile * n}
  `;
  n++;
}
alert(result);

// Task4. Знайти суму всіх цілих чисел від 1 до 15.
let sum = 0;

for (let s = 1; s <= 15; s++) {
  if (Number.isInteger(s)) {
    sum += s;
  }
}
alert(sum);

// Task5. Знайти добуток усіх цілих чисел від 15 до 35.
let mult = 1;

for (let t = 15; t <= 35; t++) {
  if (Number.isInteger(t)) {
    mult *= t;
  }
}
alert(mult);

// Task6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let sum1 = 0;
for (let d = 1; d <= 500; d++) {
  sum1 += d;
}
alert(sum1 / 500);

let sum2 = 0;
let b = 1;
let m = 500;
while (b <= m) {
  sum2 += b;
  b++;
}
alert(sum2 / 500);

// Task7. Вивести суму лише парних чисел в діапазоні від 30 до 80.
let sum3 = 0;
for (let v = 30; v <= 80; v++) {
  if (v % 2 === 0) {
    sum3 += v;
  }
}
alert(sum3);

// Task8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let result2 = '';
for (let c = 100; c <= 200; c++) {
  if (c % 3 === 0) {
    result2 += `${c} `;
  }
}
alert(result2);

let result3 = '';
let s = 100;
let a = 200;
while (s <= a) {
  if (s % 3 === 0) {
    result3 += `${s} `;
  }
  s++;
}
alert(result3);

// Task9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let natNum = +prompt('Enter a natural number:', '7');
let result4 = '';
for (let h = 1; h <= natNum; h++) {
  if (natNum % h === 0) {
    result4 += `${h} `;
  }
}
alert(result4);

// Task10. Визначити кількість його парних дільників.

let natNum = +prompt('Enter a natural number:', '88');
let result5 = '';
let divider = 0;
for (let h = 1; h <= natNum; h++) {
  if (natNum % h === 0) {
    result5 += `${h} `;
    if (h % 2 === 0) {
      divider++;
    }
  }
}
alert(divider);

// Task11. Знайти суму його парних дільників.
let natNum = +prompt('Enter a natural number:', '88');
let result5 = '';
let divider = 0;
for (let h = 1; h <= natNum; h++) {
  if (natNum % h === 0) {
    result5 += `${h} `;
    if (h % 2 === 0) {
      divider += h;
    }
  }
}
alert(divider);

// Task12. Надрукувати повну таблицю множення від 1 до 10.

for (let r = 1; r <= 10; r++) {
  for (let f = 1; f <= 10; f++) {
    console.log(`${r} * ${f} = ${r * f}`);
  }
}

let i = 1;
let j = 1;

while (i <= 10) {
  while (j <= 10) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
  j = 1;
  i++;
}
