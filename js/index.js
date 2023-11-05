class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  calculatePrice() {
    const sizePriсe = this.size.price;
    const stuffingPrice = this.stuffing.price;
    const toppingPrice = this.toppings.reduce(
      (total, topping) => total + topping.price,
      0
    );
    return sizePriсe + stuffingPrice + toppingPrice;
  }

  calculateCalories() {
    const sizeCalories = this.size.calories;
    const stuffingCalories = this.stuffing.calories;
    const toppingCalories = this.toppings.reduce(
      (total, topping) => total + topping.calories,
      0
    );
    return sizeCalories + stuffingCalories + toppingCalories;
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }
}

const smallSize = {
  price: 50,
  calories: 20,
};

const bigSize = {
  price: 100,
  calories: 40,
};

const cheeseStuffing = {
  price: 10,
  calories: 20,
};

const saladStuffing = {
  price: 20,
  calories: 5,
};

const potatoStuffing = {
  price: 15,
  calories: 10,
};

const seasoningTopping = {
  price: 15,
  calories: 0,
};

const mayonnaiseTopping = {
  price: 20,
  calories: 5,
};

const hamburger = new Hamburger(smallSize, cheeseStuffing);
hamburger.addTopping(mayonnaiseTopping);

console.log(
  `Small Hamburger: calories ${hamburger.calculateCalories()} price ${hamburger.calculatePrice()}`
);

const hamburger2 = new Hamburger(bigSize, potatoStuffing);
hamburger.addTopping(seasoningTopping);

console.log(
  `Big Hamburger: calories ${hamburger2.calculateCalories()} Price ${hamburger2.calculatePrice()}`
);
