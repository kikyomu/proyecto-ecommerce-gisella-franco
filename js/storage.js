const KEY = "carrito";

export const guardarCarrito = (carrito) => {
    //convertimos a json antes de guardar con stringify
    localStorage.setItem(KEY, JSON.stringify(carrito));
};

export const obtenerCarrito = () => {
    //convertimos a js para obtener los datos con parse
    return JSON.parse(localStorage.getItem(KEY)) || [];

};

export const vaciarCarritoStorage = () => {
    localStorage.removeItem(KEY);
};
const renderizarCarrito = (() => {
    const carrito = obtenerCarrito();
    actualizarContador(carrito);

    const conenedor = document.getElementById("contador-carrito");
    const divAcciones = document.getElementById("acciones-carrito");

    contenedor.innerHTML = "";
    divAcciones.innerHTML = "";

    if (!carrito.length) {
        const mensaje = document.crewateElement("p");
        mensaje.classList.add("mensaje-carrito-vacio");
        mensaje.textContent = "Tu carrito está vacío";

        contenedor.appendChild(mensaje);
        return;
    }
});