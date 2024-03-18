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

// Variable global para contar la cantidad de productos agregados al carrito
var contadorProductos = 0;

function agregarAlCarrito(modalNumber) {
  var modalSelector = `.modal${modalNumber}`;
  var nombreProducto = document.querySelector(`${modalSelector} .right h3`).innerText;
  var precioProducto = document.querySelector(`${modalSelector} .right h4`).innerText;
  var imagenProducto = document.querySelector(`${modalSelector} .main_image img`).src;

  // Crear el idProducto utilizando el contadorProductos actual
  var idProducto = `producto${contadorProductos}`;

  // Incrementar contadorProductos para el siguiente producto
  contadorProductos++;

  // Verificar si 'cartContent' está presente
  var cartContent = document.getElementById('cartContent');
  if (!cartContent) {
    console.error("Elemento 'cartContent' no encontrado en el DOM.");
    return;
  }

  // Crear un nuevo elemento para mostrar en el sidebar
  var nuevoElemento = document.createElement('div');
  nuevoElemento.innerHTML = `
      <div id="${idProducto}" data-producto="${nombreProducto}" data-cantidad="1">
          <img src="${imagenProducto}" alt="${nombreProducto}">
          <h3>${nombreProducto}</h3>
          <h4>${precioProducto}</h4>
          <button class="eliminar" onclick="eliminarProducto('${idProducto}')" style="background: none; border: none; position: relative;">
          <img src="../assets/img/Basura.png" alt="Eliminar" style="width: 20px; height: 20px; position: absolute; bottom: 20.5rem; right: 7.5rem;">
      </button>
      </div>
  `;

  // Agregar el nuevo elemento al 'cartContent'
  cartContent.appendChild(nuevoElemento);

  // Mostrar el botón de "Pagar"
  var botonPagar = document.getElementById('botonPagar');
  botonPagar.style.display = 'block';

  // Mostrar la alerta de producto añadido
  Swal.fire({
    title: "Producto añadido!",
    icon: "success",
    confirmButtonText: "<span style='font-size: 20px; color: white; position: relative; right: 0.7rem;'>OK</span>",
  });

  // Cerrar el sidebar después de agregar al carrito
  closeSidebar();
}

function eliminarProducto(idProducto) {
  // Mostrar confirmación para eliminar el producto utilizando SweetAlert2
  Swal.fire({
    title: '¿Estás seguro?',
    text: '¿Quieres eliminar este producto del carrito?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí'
  }).then((result) => {
    if (result.isConfirmed) {
      var producto = document.getElementById(idProducto);
      producto.remove();

      // Verificar si no quedan productos en el carrito y ocultar el botón de pagar
      var cartContent = document.getElementById('cartContent');
      var productosEnCarrito = cartContent.querySelectorAll('div[data-producto]');
      if (productosEnCarrito.length === 0) {
        var botonPagar = document.getElementById('botonPagar');
        botonPagar.style.display = 'none';
      }

      // Mostrar una alerta de éxito utilizando SweetAlert2
      Swal.fire(
        '¡Eliminado!',
        'El producto ha sido eliminado del carrito.',
        'success'
      );
    }
  });
}




function realizarPago() {
  // Obtener información del carrito
  var cartContent = document.getElementById('cartContent').innerHTML;

  // Almacenar información del carrito en localStorage
  localStorage.setItem('cartContent', cartContent);

  // Redirigir a la página de compra
  window.location.href = 'compra.html';
}
