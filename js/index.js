let products = [
  {
    category: 'Fruit',
    nameProd: 'Apple',
    productsFact: 'An apple is a round, edible fruit produced by an apple tree',
    cost: 15,
  },
  {
    category: 'Vegetables',
    nameProd: 'Potato',
    productsFact: 'Potato change the world',
    cost: 34,
  },
  {
    category: 'Drinks',
    nameProd: 'Tea',
    productsFact:
      'Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves',
    cost: 23,
  },
  {
    category: 'Fruit',
    nameProd: 'Banana',
    productsFact:
      'A long, curved fruit with a yellow skin and soft, sweet, white flesh inside',
    cost: 51,
  },
  {
    category: 'Vegetables',
    nameProd: 'Tomato',
    productsFact:
      ' A round, red fruit with a lot of seeds, eaten cooked or uncooked as a vegetable',
    cost: 15,
  },
  {
    category: 'Drinks',
    nameProd: 'Coffee',
    productsFact:
      'Coffee is a beverage prepared from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans',
    cost: 24,
  },
  {
    category: 'Fruit',
    nameProd: 'Orange',
    productsFact: 'Orange Is the New Black',
    cost: 21,
  },
  {
    category: 'Vegetables',
    nameProd: 'Zucchine',
    productsFact: 'Common in home gardens and supermarkets',
    cost: 14,
  },
  {
    category: 'Drinks',
    nameProd: 'Cola',
    productsFact:
      'Coca-Cola is a world-famous soft drink with a special flavour that has gained recognition among millions of people around the world',
    cost: 18,
  },
];

const categContainer = document.getElementById('categories-wrapper');
const productsContainer = document.getElementById('list-wrapper');
const productsInfoContainer = document.getElementById('information-wrapper');

const uniqCategories = [];
let userOrders = [];

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

  //  виводимо інформацію про товар
  const productsInfo = document.createElement('div');
  productsInfo.innerHTML = `Name: ${product.nameProd}<br>Category: ${product.category}<br>Info: ${product.productsFact}`;

  const buyButton = document.createElement('button');
  buyButton.textContent = 'To Buy';
  buyButton.classList.add('buy-button');
  buyButton.addEventListener('click', () => buyProduct(product));

  productsInfoContainer.appendChild(productsInfo);
  productsInfoContainer.appendChild(buyButton);
}

function buyProduct(product) {
  //  виводимо повідомлення про обраний товар
  alert(`The product ${product.nameProd} is purchased!`);

  // Створюємо об'єкт покупки
  const purchase = {
    product: product.nameProd,
    date: new Date().toLocaleDateString(),
    price: product.cost,
  };

  // Додаємо покупку до списку користувача
  userOrders.push(purchase);

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

// BUTTON "My orders"
const myOrdersButton = document.getElementById('my-orders-button');
const myOrderContainer = document.getElementById('info-wrapper');

// обробник події для 'My Orders'
myOrdersButton.addEventListener('click', () => {
  // Приховуємо категорії
  const categoryButtonNone = document.querySelectorAll('.category-button');
  categoryButtonNone.forEach((button) => {
    button.style.display = 'none';
  });
  // очищаємо контейнер товарів та інформації про товар
  productsContainer.innerHTML = '';
  productsInfoContainer.innerHTML = '';

  // виводимо список усіх замовлень користувача
  displayUserOrders();
});

// Saving userOrders to localStorage
function saveUserOrdersToLocalStorage() {
  localStorage.setItem('userOrders', JSON.stringify(userOrders));
}

// Load userOrders from localStorage
function loadUserOrdersFromLocalStorage() {
  const storedOrders = localStorage.getItem('userOrders');
  console.log(storedOrders);
  if (storedOrders) {
    try {
      userOrders = JSON.parse(storedOrders);
    } catch (error) {
      console.error('Error parsing stored orders:', error);
    }
  }
}

// Load user orders when the page loads
loadUserOrdersFromLocalStorage();

// Save user orders to localStorage whenever an order is added or deleted
function updateUserOrdersInLocalStorage() {
  saveUserOrdersToLocalStorage();
}

// функція для виведення списку замовлень користувача

function buyProduct(product) {
  // створення об'єкта покупки
  const purchase = {
    product: product.nameProd,
    date: new Date().toLocaleDateString(),
    price: product.cost,
  };
  userOrders.push(purchase);
  alert(`The product ${product.nameProd} is purchased!`);

  // повернення до початкового стану, лише список категорій
  productsContainer.innerHTML = '';
  productsInfoContainer.innerHTML = '';
}

function getUserOrders() {
  return userOrders;
}

function deleteOrder(index) {
  // Видаляємо замовлення за індексом
  userOrders.splice(index, 1);

  // Після видалення оновлюємо відображення списку замовлень
  displayUserOrders();
}

// Функція для відображення замовлень користувача
function displayUserOrders() {
  myOrderContainer.innerHTML = ''; // Очистити контейнер для замовлень

  const orders = getUserOrders();

  if (orders.length === 0) {
    const noOrdersMessage = document.createElement('div');
    noOrdersMessage.textContent = 'No orders yet';
    myOrderContainer.appendChild(noOrdersMessage);
  } else {
    orders.forEach((order, index) => {
      const orderItem = document.createElement('div');
      const orderButton = document.createElement('button');
      const orderText = document.createElement('p');
      orderText.textContent = `Product: ${order.product}, Date: ${order.date}, Price: ${order.price}`;
      orderButton.textContent = `Order №${index + 1}`;

      orderButton.classList.add('order-button');
      orderText.classList.add('order-text');

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';
      deleteButton.classList.add('delete-button');
      deleteButton.addEventListener('click', () => deleteOrder(index)); // Додаємо обробник події для видалення

      // Створюємо блок з додатковою інформацією, спочатку схований
      const orderDetails = document.createElement('div');

      orderDetails.classList.add('order-details');
      orderDetails.style.display = 'none';

      // Створюємо блок для інформації "Info: ${product.productsFact}", спочатку схований
      const productInfo = document.createElement('div');
      productInfo.innerHTML = `Info: ${
        products.find((product) => product.nameProd === order.product)
          .productsFact
      }`;
      productInfo.classList.add('product-info');
      productInfo.style.display = 'none';

      orderButton.addEventListener('click', () => {
        // Перевіряємо стан блоку і змінюємо його на протилежний
        if (orderDetails.style.display === 'none') {
          orderDetails.style.display = 'block';
          productInfo.style.display = 'block';
        } else {
          orderDetails.style.display = 'none';
          productInfo.style.display = 'none';
        }
      });

      orderItem.appendChild(orderButton);
      orderItem.appendChild(orderText);
      orderItem.appendChild(deleteButton); // Додаємо кнопку видалення
      orderItem.appendChild(orderDetails);
      orderItem.appendChild(productInfo); // Додаємо блок інформації "Info"
      myOrderContainer.appendChild(orderItem);
      updateUserOrdersInLocalStorage();
    });
  }
}
