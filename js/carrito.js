import {
    obtenerCarrito
} from "./storage.js";
import {
    eliminarProducto,
    vaciarCarrito
} from "./funcionesCarrito.js";
import {
    actualizarContador
} from "./ui.js";

const renderizarCarrito = (() => {
    const carrito = obtenerCarrito();
    actualizarContador(carrito);

    const contenedor = document.getElementById("contenedor-carrito");
    const divAcciones = document.getElementById("acciones-carrito");

    contenedor.innerHTML = "";
    divAcciones.innerHTML = "";

    if (!carrito.length) {
        const mensaje = document.createElement("p");
        mensaje.classList.add("mensaje-carrito-vacio");
        mensaje.textContent = "Tu carrito está vacío";

        contenedor.appendChild(mensaje);
        return;
    }

    carrito.forEach((producto, index) => {
        //Creo el article para la tarjeta del producto
        const tarjetaProducto = document.createElement("article");
        tarjetaProducto.classList.add("producto", "text-secondary");

        //Creo la imagen del producto
        const img = document.createElement("img");
        img.src = `../${producto.img}`;
        img.alt = `Imagen del libro ${producto.title}`;

        //Creo el titulo
        const title = document.createElement("h3");
        title.classList.add("producto__titulo");
        title.textContent = producto.title;

        //Creo el precio
        const price = document.createElement("p");
        price.classList.add("producto__precio");
        price.textContent = `$${producto.price}`;

        //Crear icono que va dentro del botón
        const btnEliminar = document.createElement("button");
        btnEliminar.classList.add("btn", "btn-elimiar-carrito");
        const iconoEliminar = document.createElement("i");
        iconoEliminar.classList.add("fa-solid", "fa-trash");

        btnEliminar.addEventListener("click", () => {
            eliminarProducto(index);
            renderizarCarrito();
        });

        tarjetaProducto.appendChild(img);
        tarjetaProducto.appendChild(title);
        tarjetaProducto.appendChild(price);
        tarjetaProducto.appendChild(btnEliminar);
        btnEliminar.append("Eliminar producto");
        btnEliminar.appendChild(iconoEliminar);

        contenedor.appendChild(tarjetaProducto);
    });

    const btnVaciar = document.createElement("button");
    btnVaciar.classList.add("btn", "btn-vaciar-carrito");
    btnVaciar.textContent = "Vaciar carrito";

    btnVaciar.addEventListener("click", () => {
        vaciarCarrito();
        renderizarCarrito();
    });

    divAcciones.appendChild(btnVaciar);
});

document.addEventListener("DOMContentLoaded", () => {
    renderizarCarrito();
});