// Recursion
// function func(number) {
//   if (number === 0) {
//     return 1;
//   } else {
//     return number * func(number - 1);
//   }
// }

// console.log(func(5));

// exponentiation
const num = 3;
const degree = 4;

function pow(num, degree) {
  if (degree === 0) {
    return 1;
  } else if (num === 0) {
    return 0;
  } else {
    return num * pow(num, degree - 1);
  }
}

console.log(`${num} в ступені ${degree} дорівнює ${pow(num, degree)}`);
