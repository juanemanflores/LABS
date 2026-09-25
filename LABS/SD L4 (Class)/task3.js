export class Player {
    constructor(name, level) {
      this.name = name;
      this.level = level;
    }
  

  info(){
    return this.name + " has reached Level " + this.level; 
  }
}

  const p1 = new Player("Tara", 7);
  console.log(p1.info());