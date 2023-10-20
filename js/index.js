// Створити скрипт який має визначити середнє арифметичне трьох чисел з насутпними умовами:

// отримати від користувача через три prompt три числа
// показати через alert середнє арифметичне цих чисел

let firstNumber = prompt('Enter the first number:');
let secondNumber = prompt('Enter the second number:');
let thirdNumber = prompt('Enter the third number:');

if (
  firstNumber !== '' &&
  !isNaN(firstNumber) &&
  secondNumber !== '' &&
  !isNaN(secondNumber) &&
  thirdNumber !== '' &&
  !isNaN(thirdNumber)
) {
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  thirdNumber = Number(thirdNumber);

  let resultNumber = parseFloat(
    ((firstNumber + secondNumber + thirdNumber) / 3).toFixed(2)
  );
  alert(`Average value is: ${resultNumber}`);
} else {
  alert(`Please enter valid number`);
}
