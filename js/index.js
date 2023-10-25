// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)
const tableBody = document.querySelector('#tableBody');

for (let i = 0; i < 10; i++) {
  const row = document.createElement('tr');

  for (let j = 0; j < 10; j++) {
    const cell = document.createElement('td');
    result = i * 10 + j + 1;
    cell.textContent = result;
    row.appendChild(cell);
  }
  tableBody.appendChild(row);
}
