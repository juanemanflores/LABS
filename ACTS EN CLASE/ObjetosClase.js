class Producto {
    constructor(nombre, precio, disponible) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }

    mostrarInfo() {
        console.log(this.nombre);
        console.log(this.precio);
        console.log(this.disponible);
    }
}

const p1 = new Producto("Labial", 150, true);
const p2 = new Producto("Rimel", 180, false);
const p3 = new Producto("Base", 250, true);

p1.mostrarInfo();
p2.mostrarInfo();
p3.mostrarInfo();