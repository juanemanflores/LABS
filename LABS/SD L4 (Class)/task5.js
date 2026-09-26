export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.xp = 0;
    this.xpToLevelUp = 100; // umbral fijo de experiencia
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
      this.xp -= this.xpToLevelUp; // conserva el excedente en vez de perderlo
      this.levelUp();
      console.log(`${this.name} gained enough experience and leveled up!`);
    }
  }
}

const p1 = new Player("Tara", 7);
p1.info();          // Tara has reached Level 7!

p1.gainExp(60);
console.log(p1.xp)