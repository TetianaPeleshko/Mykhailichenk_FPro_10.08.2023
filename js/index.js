// Дано 3 блоки

// В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення, що товар куплений і повернення у вихідний стан програми ( коли відображається лише список категорій).

let products = [
  {
    category: 'Fruit',
    nameProd: 'Apple',
    productsFact: 'An apple is a round, edible fruit produced by an apple tree',
  },
  {
    category: 'Vegetables',
    nameProd: 'Potato',
    productsFact: 'Potato change the world',
  },
  {
    category: 'Drinks',
    nameProd: 'Tea',
    productsFact:
      'Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves',
  },
  {
    category: 'Fruit',
    nameProd: 'Banana',
    productsFact:
      'A long, curved fruit with a yellow skin and soft, sweet, white flesh inside',
  },
  {
    category: 'Vegetables',
    nameProd: 'Tomato',
    productsFact:
      ' A round, red fruit with a lot of seeds, eaten cooked or uncooked as a vegetable',
  },
  {
    category: 'Drinks',
    nameProd: 'Coffee',
    productsFact:
      'Coffee is a beverage prepared from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans',
  },
  {
    category: 'Fruit',
    nameProd: 'Orange',
    productsFact: 'Orange Is the New Black',
  },
  {
    category: 'Vegetables',
    nameProd: 'Zucchine',
    productsFact: 'Common in home gardens and supermarkets',
  },
  {
    category: 'Drinks',
    nameProd: 'Cola',
    productsFact:
      'Coca-Cola is a world-famous soft drink with a special flavour that has gained recognition among millions of people around the world',
  },
];

const categContainer = document.getElementById('categories-wrapper');
const productsContainer = document.getElementById('list-wrapper');
const productsInfoContainer = document.getElementById('information-wrapper');

const uniqCategories = [];

// Знаходимо унікальні категорії
products.forEach((product) => {
  if (!uniqCategories.includes(product.category)) {
    uniqCategories.push(product.category);
  }
});

// Виводимо категорії
uniqCategories.forEach((category) => {
  const categoryButton = document.createElement('button');
  categoryButton.classList.add('category-button', category.toLowerCase());
  categoryButton.textContent = category;
  categoryButton.addEventListener('click', () => displayCategory(category));
  categContainer.appendChild(categoryButton);
});

function displayCategory(category) {
  // очищаємо контейнер товарів та інформації про товар перед виводом
  productsContainer.innerHTML = '';
  productsInfoContainer.innerHTML = '';

  // вибираємо елементи з початкового масиву в новий масив для обраної категорії
  const prodInCatagory = products.filter(
    (product) => product.category === category
  );

  // виводимо продукти обраної категорії
  prodInCatagory.forEach((product) => {
    const productItem = document.createElement('div');
    productItem.textContent = `${product.nameProd}`;
    productItem.classList.add('product-item');

    // додаемо обробник події для виведення інформації про товар при кліку
    productItem.addEventListener('click', () => displayProductInfo(product));
    productsContainer.appendChild(productItem);
  });
}

function displayProductInfo(product) {
  // очищуємо контейнер з інформацією про товар перед виводом
  productsInfoContainer.textContent = '';

  //  виводимо інформацію про товар справа
  const productInfo = document.createElement('div');
  //   productInfo.textContent = `Name: ${product.nameProd}
  // Category: ${product.category}
  // Info: ${product.productsFact}`;
  productInfo.innerHTML = `Name: ${product.nameProd}<br>Category: ${product.category}<br>Info: ${product.productsFact}`;

  const buyButton = document.createElement('button');
  buyButton.textContent = 'To Buy';
  buyButton.classList.add('buy-button');
  buyButton.addEventListener('click', () => buyProduct(product));

  productsInfoContainer.appendChild(productInfo);
  productsInfoContainer.appendChild(buyButton);
}

function buyProduct(product) {
  //  виводимо повідомлення про обраний товар
  alert(`The product ${product.nameProd} is purchased!`);

  //  повернення до вихідного стану (лише список категорій)
  productsContainer.innerHTML = '';
  productsInfoContainer.innerHTML = '';
}

//
//FORM
document.getElementById('saveButton').addEventListener('click', function () {
  if (validateForm()) {
    submitForm();
  } else {
    alert('Please fill in all required fields');
  }
});

function validateForm() {
  const requiredFields = document.querySelectorAll('[required]');
  let isValid = true;

  requiredFields.forEach((field) => {
    if (!field.value.trim()) {
      isValid = false;
    }
  });
  return isValid;
}

function submitForm() {
  const formData = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    birthDate: document.getElementById('birthDate').value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    city: document.getElementById('city').value,
    address: document.getElementById('address').value,
    languages: getSelectedLanguages(),
  };
  displayUserData(formData); // вивід даних у таблицю
}

function getSelectedLanguages() {
  const checkboxes = document.querySelectorAll(
    'input[name="language"]:checked'
  );
  const selectedLanguages = [];

  checkboxes.forEach((checkbox) => {
    selectedLanguages.push(checkbox.value);
  });
  return selectedLanguages;
}

function displayUserData(data) {
  const userDataDiv = document.getElementById('userData');
  userDataDiv.innerHTML = ''; // Зачистити попередню дату

  const table = document.createElement('table');
  const headerRow = table.insertRow(0);
  const dataRow = table.insertRow(1);

  for (const key in data) {
    const headerCell = headerRow.insertCell(-1); // вставляє нову комірку у вказаному індексі,  в кінець рядка
    const dataCell = dataRow.insertCell(-1); //

    headerCell.textContent = key;
    dataCell.textContent = Array.isArray(data[key])
      ? data[key].join(', ')
      : data[key];
  }
  userDataDiv.appendChild(table);
}
