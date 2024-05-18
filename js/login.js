console.log("login script");

document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();
  var username = document.getElementById('username').value.trim();
  var password = document.getElementById('password').value.trim();
  var errorMessage = document.getElementById('errorMessage');

  if (username === "" || password === "") {
    errorMessage.textContent = "Ambos campos son obligatorios.";
  } else {
    errorMessage.textContent = "";
    localStorage.setItem('isLoggedIn', 'true');
    alert('Formulario enviado correctamente.');
    window.location.href = '../index.html';
  }
});