export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.xp = 0;
    this.xpToLevelUp = 100;
    this.party = []; // array de compañeros de este jugador
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
}

const p1 = new Player("Tara", 7);
const p2 = new Player("Kai", 5);
const p3 = new Player("Luna", 3);

p1.addToParty(p2);
p1.addToParty(p3);

console.log(p1.party); // muestra los objetos Kai y Luna dentro del array

p1.removeFromParty("Kai");

console.log(p1.party); // ahora solo queda Luna