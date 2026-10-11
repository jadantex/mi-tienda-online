// ============================================
// MI TIENDA ONLINE
// Catálogo, carrito y compra simulada
// ============================================

// Elementos del catálogo
const loadProductsButton = document.getElementById("load-products-button");
const productsStatus = document.getElementById("products-status");
const productsContainer = document.getElementById("products-container");

// Elementos del carrito
const cartStatus = document.getElementById("cart-status");
const cartContainer = document.getElementById("cart-container");
const cartTotalElement = document.getElementById("cart-total");
const clearCartButton = document.getElementById("clear-cart-button");
const checkoutButton = document.getElementById("checkout-button");
const cartBadge = document.getElementById("cart-badge");

// Elementos del pago
const paymentModal = document.getElementById("payment-modal");
const closePaymentModalButton = document.getElementById("close-payment-modal");
const paymentForm = document.getElementById("payment-form");
const paymentItemCount = document.getElementById("payment-item-count");
const paymentProductsTotal = document.getElementById("payment-products-total");
const paymentGrandTotal = document.getElementById("payment-grand-total");

// Elementos de cancelación
const cancelModal = document.getElementById("cancel-modal");
const closeCancelModalButton = document.getElementById("close-cancel-modal");
const keepOrderButton = document.getElementById("keep-order-button");
const confirmCancelButton = document.getElementById("confirm-cancel-button");

// Elementos de confirmación
const successModal = document.getElementById("success-modal");
const successMessage = document.getElementById("success-message");
const closeSuccessModalButton = document.getElementById("close-success-modal");

// Datos de la aplicación
const productosDisponibles = new Map();
const carrito = new Map();

let ultimaVentanaAbierta = null;

// ============================================
// FORMATEAR PRECIOS
// ============================================

function formatearPrecio(precio) {
    return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(precio);
}

// ============================================
// MANEJO DE VENTANAS MODALES
// ============================================

function abrirModal(modal) {
    if (!modal) return;

    ultimaVentanaAbierta = document.activeElement;
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");

    const primerCampo = modal.querySelector(
        "input, button, select, textarea"
    );

    if (primerCampo) {
        primerCampo.focus();
    }
}

function cerrarModal(modal) {
    if (!modal) return;

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");

    if (ultimaVentanaAbierta && document.contains(ultimaVentanaAbierta)) {
        ultimaVentanaAbierta.focus();
    }
}

// Cerrar una ventana al pulsar fuera de su contenido
document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            cerrarModal(modal);
        }
    });
});

// Cerrar ventanas con Escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        document.querySelectorAll(".modal.active").forEach((modal) => {
            cerrarModal(modal);
        });
    }
});

// ============================================
// CARGAR PRODUCTOS DESDE DUMMYJSON
// ============================================

async function cargarProductos() {
    loadProductsButton.disabled = true;
    loadProductsButton.textContent = "Cargando productos...";

    productsStatus.textContent = "Consultando el catálogo...";
    productsContainer.replaceChildren();

    try {
        const respuesta = await fetch(
            "https://dummyjson.com/products?limit=10"
        );

        if (!respuesta.ok) {
            throw new Error("No fue posible consultar el catálogo.");
        }

        const datos = await respuesta.json();

        productosDisponibles.clear();

        datos.products.forEach((producto) => {
            productosDisponibles.set(producto.id, producto);
        });

        renderizarProductos(datos.products);

        productsStatus.textContent =
            `Se cargaron ${datos.products.length} productos correctamente.`;
    } catch (error) {
        console.error("Error al cargar productos:", error);

        productsStatus.textContent =
            "No se pudieron cargar los productos. Verifica tu conexión e inténtalo de nuevo.";
    } finally {
        loadProductsButton.disabled = false;
        loadProductsButton.textContent = "Cargar productos";
    }
}

// ============================================
// MOSTRAR PRODUCTOS
// ============================================

function renderizarProductos(productos) {
    productsContainer.replaceChildren();

    productos.forEach((producto) => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "product-card";

        const imagen = document.createElement("img");
        imagen.src = producto.thumbnail;
        imagen.alt = producto.title;
        imagen.loading = "lazy";

        const nombre = document.createElement("h3");
        nombre.textContent = producto.title;

        const descripcion = document.createElement("p");
        descripcion.textContent = producto.description;

        const precio = document.createElement("p");
        precio.className = "product-price";
        precio.textContent = formatearPrecio(producto.price);

        const boton = document.createElement("button");
        boton.type = "button";
        boton.className = "add-cart-button";
        boton.textContent = "Agregar al carrito";

        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
        });

        tarjeta.append(imagen, nombre, descripcion, precio, boton);
        productsContainer.appendChild(tarjeta);
    });
}

// ============================================
// AGREGAR PRODUCTOS AL CARRITO
// ============================================

function agregarAlCarrito(productoId) {
    const producto = productosDisponibles.get(productoId);

    if (!producto) return;

    if (carrito.has(productoId)) {
        carrito.get(productoId).cantidad += 1;
    } else {
        carrito.set(productoId, {
            producto: producto,
            cantidad: 1
        });
    }

    renderizarCarrito();

    cartStatus.textContent =
        `${producto.title} se agregó correctamente al carrito.`;
}

// ============================================
// CAMBIAR CANTIDADES
// ============================================

function cambiarCantidad(productoId, cambio) {
    const elemento = carrito.get(productoId);

    if (!elemento) return;

    elemento.cantidad += cambio;

    if (elemento.cantidad <= 0) {
        carrito.delete(productoId);
    }

    renderizarCarrito();
}

// ============================================
// ELIMINAR UN PRODUCTO
// ============================================

function quitarDelCarrito(productoId) {
    carrito.delete(productoId);
    renderizarCarrito();
}

// ============================================
// MOSTRAR CARRITO Y CALCULAR TOTAL
// ============================================

function renderizarCarrito() {
    cartContainer.replaceChildren();

    let total = 0;
    let cantidadProductos = 0;
    cartBadge.textContent = Array.from(carrito.values())
        .reduce((suma, elemento) => suma + elemento.cantidad, 0);
    if (carrito.size === 0) {
        cartStatus.textContent =
            "Tu carrito está vacío. Agrega productos del catálogo.";

        cartTotalElement.textContent = formatearPrecio(0);
        clearCartButton.disabled = true;
        checkoutButton.disabled = true;
        return;
    }

    carrito.forEach((elemento, productoId) => {
        const producto = elemento.producto;
        const cantidad = elemento.cantidad;
        const subtotal = producto.price * cantidad;

        total += subtotal;
        cantidadProductos += cantidad;

        const fila = document.createElement("article");
        fila.className = "cart-item";

        const nombre = document.createElement("h3");
        nombre.textContent = producto.title;

        const precioUnitario = document.createElement("p");
        precioUnitario.textContent =
            `Precio unitario: ${formatearPrecio(producto.price)}`;

        const subtotalElement = document.createElement("p");
        subtotalElement.className = "cart-item-subtotal";
        subtotalElement.textContent =
            `Subtotal: ${formatearPrecio(subtotal)}`;

        const controles = document.createElement("div");
        controles.className = "quantity-controls";

        const botonMenos = document.createElement("button");
        botonMenos.type = "button";
        botonMenos.textContent = "−";
        botonMenos.setAttribute(
            "aria-label",
            `Disminuir cantidad de ${producto.title}`
        );

        botonMenos.addEventListener("click", () => {
            cambiarCantidad(productoId, -1);
        });

        const cantidadElement = document.createElement("span");
        cantidadElement.textContent = cantidad;
        cantidadElement.setAttribute("aria-label", "Cantidad");

        const botonMas = document.createElement("button");
        botonMas.type = "button";
        botonMas.textContent = "+";
        botonMas.setAttribute(
            "aria-label",
            `Aumentar cantidad de ${producto.title}`
        );

        botonMas.addEventListener("click", () => {
            cambiarCantidad(productoId, 1);
        });

        const botonEliminar = document.createElement("button");
        botonEliminar.type = "button";
        botonEliminar.className = "remove-cart-button";
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", () => {
            quitarDelCarrito(productoId);
        });

        controles.append(
            botonMenos,
            cantidadElement,
            botonMas,
            botonEliminar
        );

        fila.append(
            nombre,
            precioUnitario,
            subtotalElement,
            controles
        );

        cartContainer.appendChild(fila);
    });

    cartStatus.textContent =
        `Tienes ${cantidadProductos} unidad(es) de producto(s) en tu carrito.`;

    cartTotalElement.textContent = formatearPrecio(total);
    clearCartButton.disabled = false;
    checkoutButton.disabled = false;
}

// ============================================
// VACIAR CARRITO
// ============================================

function vaciarCarrito() {
    carrito.clear();
    renderizarCarrito();
}

clearCartButton.addEventListener("click", () => {
    if (carrito.size === 0) return;

    abrirModal(cancelModal);
});

// ============================================
// CANCELAR PEDIDO
// ============================================

confirmCancelButton.addEventListener("click", () => {
    vaciarCarrito();
    paymentForm.reset();

    cerrarModal(cancelModal);

    successMessage.textContent =
        "Tu pedido ha sido cancelado y el carrito está vacío.";

    abrirModal(successModal);
});

keepOrderButton.addEventListener("click", () => {
    cerrarModal(cancelModal);
});

closeCancelModalButton.addEventListener("click", () => {
    cerrarModal(cancelModal);
});

// ============================================
// ABRIR RESUMEN DE COMPRA
// ============================================

checkoutButton.addEventListener("click", () => {
    if (carrito.size === 0) {
        cartStatus.textContent =
            "Agrega al menos un producto antes de continuar al pago.";
        return;
    }

    let total = 0;
    let cantidadProductos = 0;

    carrito.forEach((elemento) => {
        total += elemento.producto.price * elemento.cantidad;
        cantidadProductos += elemento.cantidad;
    });

    paymentItemCount.textContent = cantidadProductos;
    paymentProductsTotal.textContent = formatearPrecio(total);
    paymentGrandTotal.textContent = formatearPrecio(total);

    abrirModal(paymentModal);
});

closePaymentModalButton.addEventListener("click", () => {
    cerrarModal(paymentModal);
});

// ============================================
// CONFIRMAR COMPRA SIMULADA
// ============================================

paymentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (carrito.size === 0) {
        cerrarModal(paymentModal);

        cartStatus.textContent =
            "Tu carrito está vacío. Agrega productos antes de comprar.";

        return;
    }

    const nombre = document.getElementById("customer-name").value.trim();

    if (!nombre) {
        return;
    }

    cerrarModal(paymentModal);

    successMessage.textContent =
        `¡Gracias, ${nombre}! Tu pedido de prueba se ha confirmado correctamente. No se ha realizado ningún cobro.`;

    vaciarCarrito();
    paymentForm.reset();

    abrirModal(successModal);
});

// ============================================
// CERRAR CONFIRMACIÓN
// ============================================

closeSuccessModalButton.addEventListener("click", () => {
    cerrarModal(successModal);
});

// ============================================
// INICIALIZACIÓN
// ============================================

loadProductsButton.addEventListener("click", cargarProductos);

renderizarCarrito();