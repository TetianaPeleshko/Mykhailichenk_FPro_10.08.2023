// Task 1 Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
let arr = [
  5,
  7,
  89,
  -1,
  0,
  null,
  'fgh',
  56,
  -34,
  '77',
  'xcvfdg',
  undefined,
  true,
  -2,
  25,
];

function averageNumber(arr) {
  let arrayOfNumber = [];

  for (let value of arr) {
    if (typeof value === 'number') {
      arrayOfNumber.push(value);
    }
  }
  return (
    arrayOfNumber.reduce((acc, cur) => acc + cur, 0) / arrayOfNumber.length
  ).toFixed(2);
}

let average = averageNumber(arr);
console.log(average);

// Task2 Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

let x = +prompt('Enter number x:');
let znak = prompt('Enter znak:');
let y = +prompt('Enter number y:');

function doMath(x, znak, y) {
  let result;
  switch (znak) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    case '/':
      result = x / y;
      break;
    case '%':
      result = x % y;
      break;
    case '^':
      result = x ** y;
      break;
    default:
      alert('Wrong input');
  }

  return result;
}

let outputResult = doMath(x, znak, y);
console.log(outputResult);

// Task3 Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.
let rowNumber = +prompt('Enter the number of row in the array:');
let columnNumber = +prompt('Enter the number of column in the array:');

function userData(rowNumber, columnNumber) {
  let mainArray = [];
  for (let i = 0; i < rowNumber; i++) {
    let internalArray = [];
    for (let j = 0; j < columnNumber; j++) {
      internalArray.push(prompt(`Enter element [${i}, ${j}]`));
    }
    mainArray.push(internalArray);
  }
  return mainArray;
}
let resultArray = userData(rowNumber, columnNumber);
console.log(resultArray);

// Task4 Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
let inputText = prompt('Enter the input string:');
let charsToDel = prompt('Enter the items to delete:');

function func(inputString, itemsDel) {
  let addToArray = inputString.split(''); // поділили на масив рядків
  let delFromArray = itemsDel.split('');
  let filteredArray = addToArray.filter((char) => !delFromArray.includes(char));
  let resultStr = filteredArray.join('');
  return resultStr;
}
let newText = func(inputText, charsToDel);
console.log(newText);
