let productos = ["labial", "rimel", "base"];

let producto = {
    nombre: "Labial",
    precio: 150,
    disponible: true
};

function mostrarProducto(nombre, precio) {
    return nombre + " cuesta $" + precio;
}

console.log("Primer producto del array: " + productos[0]);
console.log(mostrarProducto(producto.nombre, producto.precio));
