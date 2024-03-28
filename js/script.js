console.log("hello world!");

function obtenerDatos() {
  fetch('https://65ad277dadbd5aa31be03afc.mockapi.io/bots')
    .then(response => response.json())
    .then(data => mostrarTarjetas(data))
    .catch(error => console.error('Error:', error));
}

// Función para crear la tarjeta
function crearTarjeta(id, name, imgs, price) {
  const contenedorDeTarjeta = document.createElement('div');
  contenedorDeTarjeta.classList.add('contenedorDeTarjeta');

  // Crear el contenedor principal
  const card = document.createElement('div');
  card.classList.add('card');

  // Crear la imagen
  const img = document.createElement('img');
  img.src = imgs;
  img.alt = name;
  img.style.width = '100%';
  card.appendChild(img);

  // Crear el contenedor interno
  const container = document.createElement('div');
  container.classList.add('container');

  // Crear el título
  const title = document.createElement('h4');
  const titleBold = document.createElement('b');
  titleBold.textContent = name;
  title.appendChild(titleBold);
  container.appendChild(title);

  // Crear el párrafo
  const cost = document.createElement('p');
  cost.textContent = price;
  container.appendChild(cost);

  card.appendChild(container);

  contenedorDeTarjeta.appendChild(card);
  return contenedorDeTarjeta;
}

function mostrarTarjetas(datos) {
  const contenedor = document.getElementById('servicios');
  contenedor.innerHTML = '';

  datos.forEach(dato => {
    const tarjeta = crearTarjeta(dato.id, dato.name, dato.img, dato.price);
    contenedor.appendChild(tarjeta);
  });
}

obtenerDatos();
