// Task: У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg Вивести зображення з цієї папки, отримане випадковим чином (Math.random)

const imageName = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
];

let randomImage = imageName[Math.floor(Math.random() * imageName.length)];
// console.log(randomImage);

const img = document.createElement('img');
img.src = `images/${randomImage}`;

document.getElementById('random-image').appendChild(img);
