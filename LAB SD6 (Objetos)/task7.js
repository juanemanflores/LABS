const prompt = require('prompt-sync')();

function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
}

// Type your code below this line!

const make = prompt("Marca: ");
const model = prompt("Modelo: ");
const year = prompt("Año: ");
const color = prompt("Color: ");

const myCar = new Car(make, model, year, color);

console.log(myCar);

// Type your code above this line!