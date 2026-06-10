import {
    productos
} from "./productos.js";

import {
    agregarAlCarrito
} from "./funcionesCarrito.js";

import {
    obtenerCarrito
} from "./storage.js";

import {
    actualizarContador
} from "./ui.js";


// Función que creamos que se ocupe de realizar tarjeta de producto
const renderizarProductos = (productos) => {
    //Agarramos el div para meter las tarjetas

    const contenedor = document.getElementById("contenedor-productos");


    //Generamos las tarjetas de productos
    productos.forEach((producto) => {
        //Creo el article para la tarjeta del producto
        const tarjetaProducto = document.createElement("article");
        tarjetaProducto.classList.add("producto", "text-secondary");

        //Creo la imagen del producto
        const img = document.createElement("img");
        img.src = producto.img;
        img.alt = `Imagen del libro ${producto.title}`;

        //Creo el div para la información del producto
        const infoProducto = document.createElement("div");

        //Creo el titulo
        const title = document.createElement("h2");
        title.classList.add("producto__titulo");
        title.textContent = producto.title;

        //Creo la descripción
        const description = document.createElement("p");
        description.classList.add("producto__descripcion");
        description.textContent = producto.description;

        //Creo el precio
        const price = document.createElement("p");
        price.classList.add("producto__precio");
        price.textContent = `$${producto.price}`;

        const boton = document.createElement("button");
        boton.classList.add("btn", "bg-secondary", "btn-primary");
        boton.textContent = "Agregar al carrito";

        boton.addEventListener("click", () => {
            agregarAlCarrito(producto);
        });

        //Armar la estructura de la tarjeta
        tarjetaProducto.appendChild(img);
        tarjetaProducto.appendChild(infoProducto);
        tarjetaProducto.appendChild(boton);
        infoProducto.appendChild(title);
        infoProducto.appendChild(description);
        infoProducto.appendChild(price);

        //Agrego la tarjeta al contenedor de productos
        contenedor.appendChild(tarjetaProducto);
    });

};

document.addEventListener("DOMContentLoaded", () => {
    const carrito = obtenerCarrito();
    actualizarContador(carrito);
    renderizarProductos(productos);
});