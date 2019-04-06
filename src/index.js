class Hero {
    constructor() {
        this.id = 2;
        this.name = 'Joe';
    }

    myName() {
        return this.name;
    }
}

let hero = new Hero();
console.log(hero.myName());

module.exports = Hero;
