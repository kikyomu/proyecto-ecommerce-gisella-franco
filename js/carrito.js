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
        const mensajeCarritoVacio = document.createElement("div");
        mensajeCarritoVacio.classList.add("mensaje-carrito-vacio");

        const p1 = document.createElement("p");
        p1.textContent = "No hay productos en el carrito";

        const p2 = document.createElement("p");
        p2.textContent = "Ir a la ";

        // Enlace de la tienda
        const enlace = document.createElement("a");
        enlace.href = "../index.html";
        enlace.textContent = "Tienda";

        p2.appendChild(enlace);
        p2.append(" para agregar productos");

        mensajeCarritoVacio.appendChild(p1);
        mensajeCarritoVacio.appendChild(p2);

        contenedor.appendChild(mensajeCarritoVacio);
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
        btnEliminar.classList.add("btn", "btn-eliminar-carrito");
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
        btnEliminar.appendChild(iconoEliminar);
        btnEliminar.append("Eliminar");

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