import {
    guardarCarrito,
    obtenerCarrito,
    vaciarCarritoStorage,
} from "./storage.js";
import {
    actualizarContador,
    mostrarMensaje
} from "./ui.js";

export const agregarAlCarrito = (producto) => {
    //usamos la función que pide el carrito al localStorage
    const carrito = obtenerCarrito();
    carrito.push(producto);

    //usamos la función que guarda el carrito en el localStorage para actualizarlo cada vez que se agrega un producto
    guardarCarrito(carrito);

    //usamos la función UI que actualiza el número en el carrito
    actualizarContador(carrito);
    mostrarMensaje("Producto agregado al carrito");
};

export const eliminarProducto = (indice) => {
    const carrito = obtenerCarrito();
    //Elimina un elemento del array a partir de su índice
    carrito.splice(indice, 1);

    //Actualizamos el carrito con el localStorage
    guardarCarrito(carrito);

    //Actualizamos el contador y mostramos un mensaje al usuario
    actualizarContador(carrito);
    mostrarMensaje("Producto eliminado ✅");

};

export const vaciarCarrito = () => {
    vaciarCarritoStorage();
    actualizarContador([]);
    mostrarMensaje("Carrito vaciado");
};