// Task 1 Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);

let firstStr = prompt('Enter first string:');
let secondtStr = prompt('Enter second string:');
let thirdStr = prompt('Enter third string:');

let result = [firstStr, secondtStr, thirdStr]
  .sort(function () {
    return Math.random() - 0.5;
  })
  .join('');

alert(`Concatenation result: ${result}`);

// Task 2 Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл

let numbers = 12345;
let digits = numbers.toString().split('').join(' ');
alert(digits);
