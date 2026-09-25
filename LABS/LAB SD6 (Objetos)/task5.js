const prompt = require('prompt-sync')();

function FriendsList() {
  this.names = [];
}
// Type your code below this line!
const friendsList = new FriendsList();

const total = parseInt(prompt("¿Cuántos amigos quieres agregar? "));

for (let i = 0; i < total; i++) {
  const name = prompt(`Nombre del amigo ${i + 1}: `);
  friendsList.names.push(name);
}

console.log(friendsList.names);
// Type your code above this line!
