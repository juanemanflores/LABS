export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.xp = 0;
    this.xpToLevelUp = 100;
    this.party = [];
    this.inventory = {}; // { "poción": 3, "espada": 1 }
  }

  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }

  levelUp() {
    this.level++;
  }

  gainExp(amount) {
    this.xp += amount;

    if (this.xp >= this.xpToLevelUp) {
      this.xp -= this.xpToLevelUp;
      this.levelUp();
      console.log(`${this.name} gained enough experience and leveled up!`);
    }
  }

  addToParty(player) {
    this.party.push(player);
    console.log(`${player.name} joined ${this.name}'s party!`);
  }

  removeFromParty(playerName) {
    this.party = this.party.filter((p) => p.name !== playerName);
    console.log(`${playerName} left ${this.name}'s party.`);
  }

  addItem(item, quantity = 1) {
    if (this.inventory[item]) {
      this.inventory[item] += quantity;
    } else {
      this.inventory[item] = quantity;
    }
    console.log(`${this.name} received ${quantity} ${item}(s).`);
  }

  removeItem(item, quantity = 1) {
    if (!this.inventory[item]) {
      console.log(`${this.name} doesn't have any ${item} to remove.`);
      return;
    }

    this.inventory[item] -= quantity;

    if (this.inventory[item] <= 0) {
      delete this.inventory[item];
    }

    console.log(`${quantity} ${item}(s) removed from ${this.name}'s inventory.`);
  }
}

const p1 = new Player("Tara", 7);

p1.addItem("poción", 3);
p1.addItem("espada", 1);
p1.addItem("poción", 2); // suma a las que ya tenía

console.log(p1.inventory); // { poción: 5, espada: 1 }

p1.removeItem("poción", 4);
console.log(p1.inventory); // { poción: 1, espada: 1 }

p1.removeItem("espada", 1); // llega a 0, se elimina la clave
console.log(p1.inventory); // { poción: 1 }