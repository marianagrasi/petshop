    function openSidebar() {
    document.getElementById('sidebar').style.width = '20rem';
  }

  function closeSidebar() {
    document.getElementById('sidebar').style.width = '0';
  }
  function agregarAlCarrito() {
    var nombreProducto = document.querySelector('.right h3').innerText;
    console.log("Nombre del producto:", nombreProducto);

        var cartContent = document.getElementById('cartContent');
        if (!cartContent) {
          console.error("Elemento 'cartContent' no encontrado en el DOM.");
          return;
        }
    
        // Crear un nuevo elemento para mostrar en el sidebar
        var nuevoElemento = document.createElement('div');
        nuevoElemento.innerHTML = `<p>${nombreProducto}</p>`;
    
        // Agregar el nuevo elemento al contenido existente del 'cartContent'
        cartContent.appendChild(nuevoElemento);
    
        // Puedes agregar más información según tus necesidades, como precio, cantidad, etc.
    
        console.log("Producto añadido al carrito:", nombreProducto);
      }
  
    
      // Ejemplo de cómo podrías llamar a la función al hacer clic en algún botón
      var botonAgregarCarrito = document.getElementById('botonAgregarCarrito');
      if (botonAgregarCarrito) {
        botonAgregarCarrito.addEventListener('click', agregarAlCarrito);
      }
    
