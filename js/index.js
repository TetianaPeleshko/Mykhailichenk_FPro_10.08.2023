const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
  let key = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.round(Math.random() * (characters.length - 1)); // або так const randomIndex = Math.floor(Math.random() * (characters.length));
    // console.log(randomIndex);
    key += characters[randomIndex];
  }
  return key;
}

const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i
