function openSidebar() {
  document.getElementById('sidebar').style.width = '20rem';
}

function closeSidebar() {
  document.getElementById('sidebar').style.width = '0';
}

// Selecciona todos los botones "Agregar al carrito"
var addToCartButtons = document.querySelectorAll('.addToCartButton');

// Itera sobre los botones y asigna un escuchador de eventos a cada uno
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Obtiene el número del modal desde el atributo data-modal-number
    var modalNumber = this.getAttribute('data-modal-number');
    agregarAlCarrito(modalNumber);
  });
});

function agregarAlCarrito(modalNumber) {
  var nombreProducto = document.querySelector(`.modal${modalNumber} .right h3`).innerText;
  var precioProducto = document.querySelector(`.modal${modalNumber} .right h4`).innerText;
  var descripcionProducto = document.querySelector(`.modal${modalNumber} .right p`).innerText;
  var imagenProducto = document.querySelector(`.modal${modalNumber} .main_image img`).src;

  // Verificar si 'cartContent' está presente
  var cartContent = document.getElementById('cartContent');
  if (!cartContent) {
      console.error("Elemento 'cartContent' no encontrado en el DOM.");
      return;
  }

  // Crear un nuevo elemento para mostrar en el sidebar
  var nuevoElemento = document.createElement('div');
  nuevoElemento.innerHTML = `
      <div>
          <img src="${imagenProducto}" alt="${nombreProducto}">
          <h3>${nombreProducto}</h3>
          <h4>${precioProducto}</h4>
          <p>${descripcionProducto}</p>
      </div>
  `;

  // Limpiar contenido existente y agregar el nuevo elemento al 'cartContent'
  cartContent.innerHTML = '';
  cartContent.appendChild(nuevoElemento);

  // Mostrar el botón de "Pagar"
  var botonPagar = document.getElementById('botonPagar');
  botonPagar.style.display = 'block';

  // Cerrar el sidebar después de agregar al carrito
  closeSidebar();
}

function realizarPago() {
  // Lógica para realizar el pago, por ejemplo, redirigir a una página de pago.
  alert('Redirigiendo a la página de pago...');
  window.location.href = 'compra.html';
}