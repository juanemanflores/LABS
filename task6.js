const prompt = require('prompt-sync')();

function ShoppingList() {
  this.items = {};
}

// Type your code below this line!

const shoppingList = new ShoppingList();

const total = parseInt(prompt("¿Cuántos artículos distintos quieres agregar? "));

for (let i = 0; i < total; i++) {
  const item = prompt(`Nombre del artículo ${i + 1}: `);
  const qty = parseInt(prompt(`¿Cuántas unidades de "${item}"? `));
  shoppingList.items[item] = qty;
}

console.log(shoppingList.items);

// Type your code above this line!