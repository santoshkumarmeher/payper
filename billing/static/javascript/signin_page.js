const loginForm = document.querySelector('form');

// Add an event listener to the form 
loginForm.addEventListener('submit', (event) => { 
    // Prevent the form from submitting 
    event.preventDefault();

// Get the username and password from the form 
const username = loginForm.querySelector('input[name="username"]').value;
const password = loginForm.querySelector('input[name="password"]').value;

// Send the username and password to the server 
fetch('/login/', { method: 'POST', headers: { 'Content-Type':'application/json', }, body: JSON.stringify({ username, password, }), }) .then((