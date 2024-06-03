console.log("main script");

/**
 * verifico si estamos logeados o no
 */

document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('isLoggedIn') !== 'true') {
    // window.location.href = 'pages/login.html';
    // alert("usuario no logeado")
    document.getElementById('loginButton').style.display = 'block';
    document.getElementById('logOutButton').style.display = 'none';
  } else {
    document.getElementById('loginButton').style.display = 'none';
  }
});

function logout() {
  var confirmation = confirm("¿Está seguro que desea cerrar sesión?");
  if (confirmation) {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'pages/login.html';
  }
}

const myApiKey = 'live_akpXmV8LguHz8vvy5v6mBhEIWNgYmz9K0OoYENO34OnzdIXJ4kMQsd8x0rr7WE0s'

// // Función para crear la tarjeta
async function crearTarjeta() {
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${myApiKey}`)
    const data = await response.json();
    console.log(data);

    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';

    data.forEach(item => {
      const cardHtml = createCard(item.url, item.breeds[0].name);
      cardContainer.innerHTML += cardHtml;
    });
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
}

function createCard(imageUrl, text) {
  return `
      <div class="col">
          <div class="card shadow-sm">
              <img src="${imageUrl}" class="card-img-top" alt="a cat image">
              <div class="card-body">
                  <p class="card-text">${text}</p>
                  <div class="d-flex justify-content-between align-items-center">                     
                  </div>
              </div>
          </div>
      </div>
  `;
}

crearTarjeta();