// Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел (наприклад [1,2, 3]) і генерує список з елементів:

'use strict';

function generateList(array) {
  let result = '<ul>';
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result += `<li>${generateList(array[i])}</li>`;
    } else {
      result += `<li>${array[i]}</li>`;
    }
  }
  result += '</ul>';
  return result;
}

const inputArray1 = [1, 2, 3];
const inputArray2 = [1, 2, [1.1, 1.2, 1.3], 3];
const htmlList1 = generateList(inputArray1);
const htmlList2 = generateList(inputArray2);

// Додавання списку до DOM:
document.body.innerHTML = `${htmlList1}${htmlList2}`;
