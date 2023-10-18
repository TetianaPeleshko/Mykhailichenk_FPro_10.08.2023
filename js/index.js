// Пишемо свій слайдер зображень.

// Відображаємо зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє .
// При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  currentIndex = Math.min(Math.max(index, 0), totalSlides - 1); // Забезпечуємо індекс в межах допустимих значень
  // Math.max(index, 0): вибирає більше з двох значень - index та 0. Якщо index менше за 0, то вибирається 0. В іншому випадку вибирається index.

  // Math.min(результат_попереднього_кроку, totalSlides - 1): береться мінімальне значення між значенням, що було отримано на попередньому кроці, та totalSlides - 1. Таким чином значення index не перевищує totalSlides - 1. Якщо index більше за totalSlides - 1, то відбувається заміна на totalSlides - 1.

  const transformValue = `translateX(${-currentIndex * 100}%)`;
  document.getElementById('slider').style.transform = transformValue;

  updateButtons();
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function updateButtons() {
  const prevButton = document.getElementById('prevBtn');
  const nextButton = document.getElementById('nextBtn');

  prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
  nextButton.style.display =
    currentIndex === totalSlides - 1 ? 'none' : 'block';
}

document.getElementById('prevBtn').addEventListener('click', prevSlide);
document.getElementById('nextBtn').addEventListener('click', nextSlide);

updateButtons();
