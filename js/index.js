// Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
// Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено пост, то вивести на сторінку блок з постом і зробити кнопку для отримання комкоментарів до посту.
// Зробити завдання використовуючи проміси, перехопити помилки.

'use strict';

const apiUrl = 'https://jsonplaceholder.typicode.com/';

// entering a number
document.getElementById('searchButton').addEventListener('click', () => {
  // get the value
  const postId = document.getElementById('postIdInput').value;
  if (!postId || postId < 1 || postId > 100) {
    alert('Enter a post ID from 1 to 100');
    return; // Stop the execution of hte function
  }

  // const fetchPost = function(postId)
  fetchPost(postId) //
    .then((post) => {
      // received a post, output data to the console
      displayPost(post);
    })
    .catch((error) => {
      console.error(`Error:`, error);
    });
});

// receiving comments
document.getElementById('getCommentsButton').addEventListener('click', () => {
  const postId = document.getElementById('postIdInput').value;

  // call the function fetchComments(postId) to receive and display comments
  // const fetchComments = function(postId)
  fetchComments(postId)
    .then((comments) => {
      displayComments(comments);
    })
    .catch((error) => {
      console.error(`Error getting comments:`, error);
    });
});

// function to perform a query by post using fetch
function fetchPost(postId) {
  return fetch(`${apiUrl}/posts/${postId}`).then((response) => {
    if (!response.ok) {
      throw new Error(`Request error: ${response.status}`);
    }
    return response.json(); // return the result in the format JSON
  });
}

// function to perform a query by comment using fetch
function fetchComments(postId) {
  return fetch(`${apiUrl}/posts/${postId}/comments`).then((response) => {
    if (!response.ok) {
      throw new Error(`Request error: ${response.status}`);
    }
    return response.json();
  });
}

// function for displaying post data on the page
function displayPost(post) {
  document.getElementById('postContainer').style.display = 'block';

  // insert data about the post into the element with id = "post"
  document.getElementById('post').innerHTML = `
  <p><strong>ID:</strong> ${post.id}</p>
  <p><strong>Title:</strong> ${post.title}</p>
  <p><strong>Body:</strong> ${post.body}</p>
  `;
}

function displayComments(comments) {
  const commentsContainer = document.getElementById('comments');
  commentsContainer.innerHTML = '<h2>Коментарі:</h2>';
  // add comments to the container
  comments.forEach((comment) => {
    commentsContainer.innerHTML += `<div>
      <p><strong>ID:</strong> ${comment.id}</p>
      <p><strong>Name:</strong> ${comment.name}</p>
      <p><strong>Email:</strong> ${comment.email}</p>
      <p><strong>Body:</strong> ${comment.body}</p>
  `;
  });
}
