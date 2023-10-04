let arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

// Task1 Знайти суму та кількість позитивних елементів.
let positNumbers = arr.filter((item) => item > 0);
console.log(positNumbers.length);
let sumPositNumbers = positNumbers.reduce(
  (accumulator, num) => accumulator + num,
  0
);
console.log(sumPositNumbers);

// Task2 Знайти мінімальний елемент масиву та його порядковий номер
let minElement = Math.min(...arr);
console.log(minElement);
let indexNumber = arr.indexOf(minElement);
console.log(indexNumber);

// Task3 Знайти максимальний елемент масиву та його порядковий номер
let maxElement = Math.max(...arr);
console.log(maxElement);
let indexNumberMax = arr.indexOf(maxElement);
console.log(indexNumberMax);

// Task4 Визначити кількість негативних елементів
let negElements = arr.filter((item) => item < 0);
console.log(negElements.length);

// Task5 Знайти кількість непарних позитивних елементів
let oddPositNumbers = positNumbers.filter((item) => item % 2 !== 0);
console.log(oddPositNumbers.length);

// Task6 Знайти кількість парних позитивних елементів
let evenPositNumbers = positNumbers.filter((item) => item % 2 === 0);
console.log(evenPositNumbers.length);

// Task7 Знайти суму парних позитивних елементів
let sumEvenPositNumbers = evenPositNumbers.reduce(
  (accumulator, num) => accumulator + num,
  0
);
console.log(sumEvenPositNumbers);

// Task8 Знайти суму непарних позитивних елементів
let sumOddPositNumbers = oddPositNumbers.reduce(
  (accumulator, num) => accumulator + num,
  0
);
console.log(sumOddPositNumbers);

// Task9 Знайти добуток позитивних елементів
let multPositNumbers = positNumbers.reduce(
  (accumulator, number) => accumulator * number,
  1
);
console.log(multPositNumbers);

// Task10 Знайти найбільший серед елементів масиву, остальні обнулити
arr.forEach((element, index) => {
  if (index !== arr.indexOf(maxElement)) {
    arr[index] = 0;
  }
});
console.log(arr);
