let calc = prompt('What do you whant to do: add, sub, mult, div?');
let num1 = prompt('Enter a first number:', '2');
let num2 = prompt('Enter a second number:', '2');

let result;
let oper;

if ((Number(num1) || num1 == '0') && (Number(num2) || num2 == '0')) {
  switch (calc) {
    case 'add':
      result = +num1 + +num2;
      oper = '+';
      break;
    case 'sub':
      result = num1 - num2;
      oper = '-';
      break;
    case 'mult':
      result = num1 * num2;
      oper = '*';
      break;
    case 'div':
      result = num1 / num2;
      oper = '/';
      break;
    default:
      alert('Wrong operation input');
  }

  if (Number(result)) {
    result = +result.toFixed(2);
    let showResult = `${num1} ${oper} ${num2} = ${result}`;
    alert(showResult);
  }
} else {
  alert('Wrong number input');
}
