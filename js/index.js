// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

function removeElement(array, item) {
  return array.filter((element) => element !== item);
}
const array = [1, 2, 3, 4, 5, 6, 7];
let newArray = removeElement(array, 5);
console.log(newArray);
