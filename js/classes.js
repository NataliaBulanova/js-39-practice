//=========CONSTRUCTOR======
const Cars = function ({ brand, model, price } = {}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
};
//prototype у функций, __proto__ - свойство объекта
Cars.prototype.sayHi = function () {
  console.log('Hello, this', this);
};
Cars.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};
//Статические свойства и методы конструктора
Cars.message = 'Static property dont exist on prototype and instance';
Cars.logInfo = function (obj) {
  console.log('logInfo -> obj', obj);
};
const myCar = new Cars({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});
console.log(myCar);
myCar.sayHi();
myCar.changePrice(40000);
Cars.logInfo(myCar);
// ========CLASSES==========
class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(newItem) {
    this.items.push(newItem);
  }
  removeItem(itemToRemove) {
    const item = this.items.find(item => item === itemToRemove);
    if (item) {
      this.items = this.items.filter(item => item !== itemToRemove);
    }
    // let indexOfItemToRemove = this.items.indexOf(itemToRemove);
    // this.items.splice(indexOfItemToRemove, 1);
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
storage.removeItem('Nanitoids');
console.log(storage.getItems()); // ["Antigravitator", "Droid"]

// =======================
// class Car {
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000
//  =====STATIC METHODS===========
class Car {
  static #MAX_PRICE = 50000;
  static checkPrice(price) {
    if (price > Car.#MAX_PRICE) {
      return 'Error! Price exceeds the maximum';
    }
    return 'Success! Price is within acceptable limits';
  }
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// =======CHILD EXTENDS PARENT======
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// ===============================================
// ===============================================

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };
  blacklistedEmails = [];
  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }
  blacklist(email) {
    this.blacklistedEmails.push(email);
  }
  isBlacklisted(email) {
    if (this.blacklistedEmails.includes(email)) {
      return true;
    }
    return false;
  }
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted('mango@mail.com')); // false
console.log(mango.isBlacklisted('poly@mail.com')); // true

class Blogger {
  constructor({ email, age, numberOfPosts, topics }) {
    this.email = email;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
    this.topics = topics;
  }
  get email() {
    return this.email;
  }
  updatePostCount(value) {
    this.numberOfPosts += value;
  }
}
// const poly = new Blogger({
//   email: 'poly@mail.ru',
//   age: 32,
//   numberOfPosts: 56,
//   topics: ['travel', 'food'],
// });
// console.log(poly.email());
//======================================
class Store {
  constructor(initialValue = []) {
    this.items = initialValue;
  }
  getItems() {
    return this.items;
  }
  removeItem(itemName) {
    this.items = this.items.filter(item => item !== itemName);
  }
}
//======================================
class Toggle {
  constructor({ isOpen = false } = {}) {
    this.on = isOpen;
  }
  toggle() {
    this.on = !this.on;
  }
}

const firstToggle = new Toggle({ isOpen: true });
console.group('firstToggle');
console.log(firstToggle.on);
firstToggle.toggle();
console.log(firstToggle.on);
console.groupEnd('firstToggle');

const secondToggle = new Toggle();
console.group('secondToggle');
console.log(secondToggle.on);
secondToggle.toggle();
console.log(secondToggle.on);
console.groupEnd('secondToggle');

document.querySelector('.first-toggle').addEventListener('click', e => {
  firstToggle.toggle();
  e.currentTarget.textContent = firstToggle.on ? 'Close' : 'Open';
});
console.log(firstToggle.on);

document.querySelector('.second-toggle').addEventListener('click', e => {
  secondToggle.toggle();
  e.currentTarget.textContent = secondToggle.on ? 'Close' : 'Open';
});
console.log(secondToggle.on);

class Person {
  constructor(username){
    this._username = username;
  }
  set username(newName){
    this._username = newName;
  }
}

const person = new Person('Mango');
person.username = 'Poly'
//транспиляция
