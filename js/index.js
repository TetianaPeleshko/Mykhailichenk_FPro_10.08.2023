let products = [
  {
    category: 'Fruit',
    nameProd: 'Apple',
    productsFact: 'An apple is a round, edible fruit produced by an apple tree',
    cost: 15,
    quantity: 1,
  },
  {
    category: 'Vegetables',
    nameProd: 'Potato',
    productsFact: 'Potato change the world',
    cost: 34,
    quantity: 1,
  },
  {
    category: 'Drinks',
    nameProd: 'Tea',
    productsFact:
      'Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves',
    cost: 23,
    quantity: 1,
  },
  {
    category: 'Fruit',
    nameProd: 'Banana',
    productsFact:
      'A long, curved fruit with a yellow skin and soft, sweet, white flesh inside',
    cost: 51,
    quantity: 1,
  },
  {
    category: 'Vegetables',
    nameProd: 'Tomato',
    productsFact:
      ' A round, red fruit with a lot of seeds, eaten cooked or uncooked as a vegetable',
    cost: 15,
    quantity: 1,
  },
  {
    category: 'Drinks',
    nameProd: 'Coffee',
    productsFact:
      'Coffee is a beverage prepared from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans',
    cost: 24,
    quantity: 1,
  },
  {
    category: 'Fruit',
    nameProd: 'Orange',
    productsFact: 'Orange Is the New Black',
    cost: 21,
    quantity: 1,
  },
  {
    category: 'Vegetables',
    nameProd: 'Zucchine',
    productsFact: 'Common in home gardens and supermarkets',
    cost: 14,
    quantity: 1,
  },
  {
    category: 'Drinks',
    nameProd: 'Cola',
    productsFact:
      'Coca-Cola is a world-famous soft drink with a special flavour that has gained recognition among millions of people around the world',
    cost: 18,
    quantity: 1,
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
    quantity: product.quantity,
  };

  // Додаємо покупку до списку користувача

  const foundObject = userOrders.find(
    (item) => item.product === purchase.product
  );

  if (foundObject) {
    // Якщо продукт вже є в корзині, змініть кількість
    foundObject.quantity++;
  } else {
    userOrders.push(purchase);
  }

  //  повернення до вихідного стану (лише список категорій)
  productsContainer.innerHTML = '';
  productsInfoContainer.innerHTML = '';
}

//FORM
let formPage = document.getElementById('registrationForm');
let formModal = document.getElementById('order-form');

document.getElementById('saveButton').addEventListener('click', function () {
  if (validateForm(formPage)) {
    submitForm();
  } else {
    alert('Please fill in all required fields');
  }
});

function validateForm(form) {
  const requiredFields = form.querySelectorAll('[required]');
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

  const tableUserData = document.createElement('table');
  const headerRow = tableUserData.insertRow(0);
  const dataRow = tableUserData.insertRow(1);

  for (const key in data) {
    const headerCell = headerRow.insertCell(-1); // вставляє нову комірку у вказаному індексі,  в кінець рядка
    const dataCell = dataRow.insertCell(-1); //

    headerCell.textContent = key;
    dataCell.textContent = Array.isArray(data[key])
      ? data[key].join(', ')
      : data[key];
  }
  userDataDiv.appendChild(tableUserData);
}

// BUTTON "My orders" "Submit order"
const myOrdersButton = document.getElementById('my-orders-button');
const myOrderContainer = document.getElementById('info-wrapper');
const modalOrder = document.getElementById('buyModal');

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

    // приховуємо кнопку "Submit Order"
    modalOrder.style.display = 'none';
  } else {
    orders.forEach((order, index) => {
      const orderItem = document.createElement('div');
      const orderButton = document.createElement('button');
      const orderText = document.createElement('p');
      orderText.textContent = `Product: ${order.product}, Date: ${order.date}, Price: ${order.price}, Quantity: ${order.quantity}`;
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

      // Додаємо кнопку "Submit Order"
      modalOrder.style.display = 'block';
    });
  }
}

// посилання на модальне вікно та кнопку
const modalWindow = document.getElementById('modal-window');
const closeModal = document.getElementById('close-modal');

// обробник події на кнопку купити для відкриття модального вікна
modalOrder.addEventListener('click', () => {
  modalWindow.style.display = 'block';
  const modalText = document.getElementById('orderModalText');
  modalText.innerHTML = '';
  userOrders.forEach((order) => {
    const orderText = document.createElement('p');
    orderText.textContent = `Product: ${order.product}, Quantity: ${order.quantity}`;
    modalText.appendChild(orderText);
  });
});

// обробник події на кнопку для закриття модального вікна
closeModal.addEventListener('click', () => {
  modalWindow.style.display = 'none';
});

document.getElementById('submitModal').addEventListener('click', function () {
  if (validateForm(formModal)) {
    submitFormModal();
  } else {
    alert('Please fill in all required fields');
  }
});

function submitFormModal() {
  let productList = [];
  userOrders.forEach((order) => {
    productList.push(`Product: ${order.product}, Quantity: ${order.quantity}`);
  });
  const formDataModal = {
    fullName: document.getElementById('customerName').value,
    city: document.getElementById('selectCity').value,
    'address Poshta': document.getElementById('addressNovaPoshta').value,
    payment: document.getElementById('paymenyMethod').value,
    products: productList,
    comments: document.getElementById('comments').value,
  };
  displayOrderData(formDataModal); // вивід даних у таблицю
}

function displayOrderData(data) {
  const orderDataModal = document.getElementById('orderDataModal');
  orderDataModal.innerHTML = ''; // Зачистити попередні дані

  const tableOrder = document.createElement('table');
  tableOrder.classList.add('tableOrder');

  for (const key in data) {
    const row = tableOrder.insertRow(-1); // Вставляє новий рядок у таблицю.

    const headerCell = row.insertCell(0); // Вставляє комірку заголовка у перший стовпець (індекс 0).
    const dataCell = row.insertCell(1); // Вставляє комірку даних у другий стовпець (індекс 1).

    headerCell.textContent = key;
    if (Array.isArray(data[key])) {
      data[key].forEach((item) => {
        const innerTr = document.createElement('tr');
        // innerTr.classList.add('productList');
        const innerTd = document.createElement('td');
        innerTd.classList.add('productList');

        innerTd.textContent = item;
        innerTr.appendChild(innerTd);
        dataCell.appendChild(innerTr);
      });
    } else {
      dataCell.textContent = data[key];
    }
  }

  modalWindow.style.display = 'none';
  orderDataModal.appendChild(tableOrder);
}
