export class Hero {
    id = 2;
    name;

    constructor(name) {
        this.name = name;
    }

    myName() {
        return this.name;
    }
  }

  let hero = new Hero('Erik');
  console.log(hero.myName());