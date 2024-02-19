function openSidebar() {
    document.getElementById('sidebar').style.width = '';
}

function closeSidebar() {
    document.getElementById('sidebar').style.width = '0';
}

function addToCart(product) {
    // Aquí deberías agregar la lógica para agregar el producto al carrito
    // Puedes manipular el contenido del carrito como desees, por ejemplo, agregar elementos HTML
    const cartContent = document.getElementById('cartContent');
    const productElement = document.createElement('div');
    productElement.innerHTML = `
        <div class="cartProduct">
            <img src="${product.imagen}" alt="${product.nombre}">
            <h4>${product.nombre}</h4>
            <p>Precio: ${product.precio}</p>
            <!-- Puedes agregar más información según tus necesidades -->
        </div>
    `;
    cartContent.appendChild(productElement);
}

document.getElementById('openSidebar').addEventListener('click', openSidebar);

// Ejemplo de cómo llamar a addToCart al hacer clic en "Agregar al carrito"
document.getElementById('btnAddToCart').addEventListener('click', function() {
    addToCart({
        imagen: "../assets/img/Catalogo/gatocollar2.jpg",
        nombre: "Collar Rosa",
        precio: "$27.500",
        // Puedes agregar más propiedades según tus necesidades
    });
});