// Create smile data
const emojis = [
  {
    smile: '😀',
    voteCount: 0,
  },
  {
    smile: '🦋',
    voteCount: 0,
  },
  {
    smile: '🥶',
    voteCount: 0,
  },
  {
    smile: '👣',
    voteCount: 0,
  },
  {
    smile: '🦄',
    voteCount: 0,
  },
];

// Get smiles and vote containers
let smileContainer = document.querySelector('#smile-container');
let voteContainer = document.querySelector('#vote-container');

// Update vote scores
function updateVotes() {
  voteContainer.innerHTML = '';

  emojis.forEach((item, index) => {
    let voteElement = document.createElement('div');
    voteElement.classList.add('vote-score');
    voteElement.textContent = item.voteCount;

    voteContainer.appendChild(voteElement);
  });
}

// Show emojis elements
function showEmojis() {
  smileContainer.innerHTML = '';

  emojis.forEach((item, index) => {
    let emojiElement = document.createElement('div');
    emojiElement.textContent = item.smile;

    let smileDiv = document.createElement('div');
    let removeButton = document.createElement('button');

    // Add a remove button
    removeButton.textContent = 'X';
    removeButton.style.marginTop = '10px';
    removeButton.style.backgroundColor = '#d8c5f1';
    removeButton.style.border = '1px solid #9c56f8';
    removeButton.style.borderRadius = '5px';
    removeButton.addEventListener('click', () => {
      emojis.splice(index, 1);
      updateVotes();
      showEmojis();
    });

    smileDiv.appendChild(emojiElement);
    smileDiv.appendChild(removeButton);

    smileDiv.addEventListener('click', () => {
      emojis[index].voteCount++;
      updateVotes();
    });
    // Adding a separate div to the smile
    smileContainer.appendChild(smileDiv);
  });
}

// Add emoji
let addSmileButton = document.querySelector('#add-cmile-button');
addSmileButton.addEventListener('click', () => {
  const newSmile = prompt('Enter new smile:');

  if (newSmile !== null && newSmile !== '') {
    emojis.push({
      smile: newSmile,
      voteCount: 0,
    });
    // Оновлюємо відображення смайлів та голосів
    showEmojis();
    updateVotes();
  }
});

// Initialization
showEmojis();
updateVotes();
