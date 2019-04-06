"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hero = /** @class */ (function () {
    function Hero(name) {
        this.id = 2;
        this.name = name;
    }
    Hero.prototype.myName = function () {
        return this.name;
    };
    return Hero;
}());
exports.Hero = Hero;
var hero = new Hero('Erik');
console.log(hero.myName());
//# sourceMappingURL=index.js.map