let arrLength = +prompt('Enter the length of the array:', '7');
let arr = [];

if (isNaN(arrLength) || arrLength <= 0) {
  alert('Please, enter the correct number!');
} else {
  for (let i = 0; i <= arrLength; i++) {
    let elements = +prompt('Enter the elements of the array', '2');
    arr.push(elements);
  }
}
console.log(arr);

arr.sort((a, b) => a - b);
console.log(`Масив за зростанням: ${arr}`);

arr.splice(1, 3);
console.log(`Видалити елементи з масиву з 2 по 4 (включно!); ${arr}`);
