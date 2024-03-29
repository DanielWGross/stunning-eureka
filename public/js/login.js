const username = document.querySelector('#user');
const password = document.querySelector('#password');
const form = document.querySelector('#login-form');

function clearInputs() {
  form.reset();
}

async function handleSubmit(event) {
  event.preventDefault();
  const requestBody = JSON.stringify({
    username: username.value,
    password: password.value,
  });

  const response = await fetch('/api/login', {
    body: requestBody,
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
  });
  const data = await response.json();
  console.log('🚀 ~ file: login.js:24 ~ handleSubmit ~ data:', data);

  // Last thing we will do is clear the inputs
  clearInputs();
}

form.addEventListener('submit', handleSubmit);
