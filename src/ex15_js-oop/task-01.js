/* eslint-disable prefer-rest-params */
const CHOCOLATE_TYPES = { black: 'black', milk: 'milk', white: 'white' };

function Candy(name, price, weight) {
  this.name = name;
  this.price = price;
  this.weight = weight;

  this.getWeight = function () {
    return `${this.weight * 1000} gramm`;
  };

  this.getPrice = function () {
    return `${this.price / 100} rub.`;
  };
}

function CandyChocolate(chocolateType) {
  Candy.apply(this, arguments);
  this.chocolateType = chocolateType;
}

const bounty = new CandyChocolate('Bounty', 2500, 0.075, CHOCOLATE_TYPES.black);
const twix = new CandyChocolate('Twix', 10000, 0.25, CHOCOLATE_TYPES.milk);
const snikers = new CandyChocolate('Snikers', 7500, 0.1, CHOCOLATE_TYPES.milk);
const ritterSport = new CandyChocolate('Ritter Sport', 5000, 0.15, CHOCOLATE_TYPES.white);

function CandyBox(items) {
  this.items = items;

  this.getWeight = function () {
    const total = this.items.reduce((acc, val) => (acc + val.weight), 0);

    return `${Math.floor(total * 1000)} gramm`;
  };

  this.fiterByName = function (name) {
    return this.items.filter((candy) => candy.name.toLowerCase().search(name.toLowerCase()) !== -1);
  };

  this.sortByPrice = function () {
    return this.items.sort((a, b) => (a.price >= b.price ? 1 : -1));
  };
}

const newYearCandyBox = new CandyBox([bounty, twix, snikers, ritterSport]);

console.log(newYearCandyBox);
console.log(newYearCandyBox.getWeight());
