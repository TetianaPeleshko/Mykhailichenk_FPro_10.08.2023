// На сторінці є дві кнопки. - переадресовується на інший сайт (за раніше введеним посиланням). Реалізувати перевірку на http/https. Якщо протокол не вказаний - додаємо

function redirectToWebsite(websiteUrl) {
  // перевіряю, чи протокол вказаний
  if (!websiteUrl.startsWith('http://') && !websiteUrl.startsWith('https://')) {
    // якщо true (протокол не вказаний), додаємо протокол за замовчуванням
    websiteUrl = 'http://' + websiteUrl;
  }
  // пренаправлення на сайт, який був вказаний
  window.location.href = websiteUrl;
}

document
  .getElementById('wikipedia-button')
  .addEventListener('click', function () {
    redirectToWebsite('https://uk.wikipedia.org');
  });

document
  .getElementById('ukraine_button')
  .addEventListener('click', function () {
    redirectToWebsite('https://uk.wikipedia.org/wiki/Україна');
  });
