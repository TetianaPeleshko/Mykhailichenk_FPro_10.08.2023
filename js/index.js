let num1 = prompt('Enter the first number', '5');
let num2 = prompt('Enter the second number', '5');

if (
  (Number(num1) || Number(num1) == 0) &&
  (Number(num2) || Number(num2) == 0)
) {
  let sum = +num1 + +num2;
  let sub = num1 - num2;
  let mult = num1 * num2;
  let div = num1 / num2;
  alert(`The user entered ${num1} and ${num2}:
  ${num1} + ${num2} = ${sum}
  ${num1} - ${num2} = ${sub};
  ${num1} * ${num2} = ${mult};
  ${num1} / ${num2} = ${div}`);
} else {
  alert('Please enter the numbers');
}
