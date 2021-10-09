const str = 10;

console.log(str.__proto__ === String.prototype);

// Напиши функцию-конструктор Account, которая создает объект со свойствами login и email.
// В prototype функции-конструктора добавь метод getInfo(),
// который выводит в консоль значения полей login и email объекта который его вызвал.

const Account = function ({ login, email }) {
  this.login = login;
  this.email = email;
};
Account.prototype.getInfo = function () {
  console.log(this.login, this.email);
};
console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com
// Напиши класс User для создания пользователя со следующим свойствами:

// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку:
//  User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers
// class User {
//   constructor({ name, age, followers }) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }
//   getInfo() {}
// }
// const mango = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// Напиши класс Storage, который будет создавать объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров,
//  и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих
class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(newItem) {
    this.items = this.items.filter(item => item !== newItem);
  }
}
const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// Исправь ошибки которые будут в консоли, чтобы скрипт заработал.

const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter(item => item !== itemName);
  },
};

const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
};

invokeInventoryAction('Medkit', inventory.add.bind(inventory));
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']

// Напиши класс StringBuilder. На вход он получает один параметр -
//  строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
// const builder = new StringBuilder('.');

class StringBuilder {
  constructor(str) {
    this._value = str;
  }
  get value() {
    return this._value;
  }
  append(str) {
    this._value = this._value + str;
  }
  prepend(str) {
    this._value = str + this._value;
  }
  pad(str) {
    this.append(str);
    this.prepend(str);
  }
}
const builder = new StringBuilder('.');
builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='

// Джейден Смит, сын Уилла Смита, является звездой таких фильмов,
// как The Karate Kid (2010) и After Earth (2013). Джейден также
// известен своей философией, которую он распространяет через Twitter.
// Когда он пишет в Твиттере, он известен тем, что почти всегда использует
// каждое слово с большой буквы. Для простоты вам придется писать каждое слово
// с заглавной буквы, посмотрите, как ожидается сокращение в приведенном ниже примере.
// Ваша задача - преобразовать строки в то, как они были бы написаны Джейденом Смитом.
// Строки - это настоящие цитаты Джейдена Смита, но они не пишутся с заглавной
// буквы так, как он их изначально набирал.

// const sentence = "How can mirrors be real if our eyes aren't real";

// console.log(sentence.toJadenCase()); // "How Can Mirrors Be Real If Our Eyes Aren't Real"

// Найти различия между цифрами в 2 массивах

const first = [1, 3, 3, 4, 6, 5, 4];
const second = [6, 3, 5, 2, 2];

const third = [8, 13, 222, 93, 43, 11];
const fourth = [8, 222, 12, 93, 77, 83, 12, 43];

const getUnique = (firstArr, secondArr) => {
  const res1 = firstArr.filter(el => !secondArr.includes(el));
  const res2 = secondArr.filter(el => !firstArr.includes(el));
  return [...res1, ...res2]
    .filter((el, index, array) => array.indexOf(el) === index)
    .sort();
};
console.log(getUnique(first, second)); // [1, 2, 4]
console.log(getUnique(third, fourth)); // [11, 12, 13, 77, 83]

// Вам будет дан массив целых чисел. Ваша задача - взять этот массив и найти индекс N,
// где сумма целых чисел слева от N равна сумме целых чисел справа от N.
// Если нет индекса, который мог бы сделать это, верните - 1.

// Например:

// Допустим, вам дан массив {1,2,3,4,3,2,1}:
// Ваша функция вернет индекс 3, потому что в 3-й позиции массива сумма левой части
// индекса ({1,2,3}) и сумма правой части индекса ({3,2, 1}) оба равны 6.

// Напиши функцию, которая будет принимать один параметр - строку.
// Функция должна считать количество определенных букв в строке и выводить ответ в формате ключ - буква, значение - количество таких букв в строке

function countLettersAmount(string) {
  return [...string].reduce((acc, letter) => {
    acc.hasOwnProperty(letter) ? (acc[letter] += 1) : (acc[letter] = 1);
    return acc;
  }, {});
}

console.log(countLettersAmount('lllllabababablllllll')); //{a: 4, b: 4,l: 12}

// Напиши класс Car с указанными свойствами и методами.

class Car {
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`,
    );
  }
  /*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */

  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0
   */
  constructor({ maxSpeed, price }) {
    this.maxSpeed = maxSpeed;
    this._price = price;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
  }
  get price() {
    return this._price;
  }
  set price(newPrice) {
    this._price = newPrice;
  }
  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */

  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
  turnOn() {
    this.isOn = true;
  }

  /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  accelerate(value) {
    this.speed + value <= this.maxSpeed ? (this.speed += value) : this.maxSpeed;
  }

  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {
    this.speed - value >= 0 ? (this.speed -= value) : 0;
  }

  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
// Посмотрим еще на один.
// Последний:
// Вам дан массив {20,10, -80,10,10,15,35}
// В индексе 0 левая сторона {}
// Правая сторона: {10, -80,10,10,15,35}
// При добавлении они оба равны 0. (Пустые массивы в этой задаче равны 0)
// Индекс 0 - это место, где левая и правая стороны равны.

// function findEvenIndex(arr) {
//   let neededIndex = -1;

//   const getArrSum = array =>
//     array.reduce((acc, currValue) => acc + currValue, 0);

//   arr.map((val, currentIndex) => {
//     const arrLeft = arr.slice(0, currentIndex);
//     const arrRight = arr.slice(Math.min(arr.length - 1, currentIndex + 1));

//     if (getArrSum(arrLeft) === getArrSum(arrRight)) {
//       neededIndex = currentIndex;
//     }
//   });

//   if (neededIndex >= 0) {
//     console.log(`Искомый индекс: ${neededIndex}`);
//   } else {
//     console.log('Такого индекса не найдено');
//   }
// }
function findEvenIndex(array) {
  let neededIndex = -1;
  const getSum = arr => arr.reduce((sum, el) => sum + el, 0);
  array.find((el, currentIndex) => {
    const leftArr = array.slice(0, currentIndex);
    const rightArr = array.slice(Math.min(array.length, currentIndex + 1));
    if (getSum(leftArr) === getSum(rightArr)) {
      neededIndex = currentIndex;
    }
  });
  console.log(neededIndex);
}
// ТЕСТЫ
// console.log(Math.min(5, 6));
findEvenIndex([1, 100, 50, -51, 1, 1]); // 1
findEvenIndex([1, 2, 3, 4, 3, 2, 1]); // 3
findEvenIndex([1, 2, 3, 4, 5, 6]); // -1
findEvenIndex([20, 10, 30, 10, 10, 15, 35]); // 3
findEvenIndex([20, 10, -80, 10, 10, 15, 35]); // 0

// Task 4
// У нас есть объект, нужно создать функцию, которая будет его перебирать
// и если значение какого-то поля это массив (сделать проверку на массив),
// в таком случае добавляем к объекту obj1 поля в формате 'I like элемент массива',
//  после вызова функции мы должны
// получить объект вот в таком виде
// {
//     'I like c++': "c++",
//     'I like java': "java",
//     'I like js': "js",
//     'i like my work': true,
//     'my name': "John",
//     'programming languages': ['js', 'java', 'c++']
// }

const test = {
  'my name': 'John',
  'i like my work': true,
  'programming languages': ['js', 'java', 'c++'],
};

function createObj(obj) {
  const values = Object.values(test);
  const searchedArray = values.find(el => Array.isArray(el));
  const partOfCreatedObj = [...searchedArray].reduce((acc, el) => {
    acc.hasOwnProperty(el) ? acc : (acc[`I like ${el}`] = el);
    return acc;
  }, {});
  return { ...partOfCreatedObj, ...obj };
}
console.log(createObj(test));

function arrayDiff(a, b) {
  return a.filter(val => !b.includes(val));
}

console.log(arrayDiff([3, 4], [3]));

function sumTwoSmallestNumbers(numbers) {
  return [...numbers]
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((acc, el) => (acc += el));
}
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));

// machines allow 4 or 6 digit PIN codes and PIN codes cannot contain
// anything but exactly 4 digits or exactly 6 digits.
function validatePIN(pin) {
  if (pin.length === 4 || pin.length === 6) {
    return [...pin].every(el => el >= 0);
  }
  return false;
}
console.log('123', validatePIN('123'));
console.log('12345a', validatePIN('12345a'));
console.log('1234567', validatePIN('1234567'));
console.log('-1234', validatePIN('-1234'));
console.log('1.234', validatePIN('1.234'));
console.log('-1.234', validatePIN('-1.234'));
console.log(validatePIN('0000000'));
console.log('0000', validatePIN('0000'));
console.log('1234', validatePIN('1234'));
console.log('115511', validatePIN('115511'));

console.log(5 * (2 / 100));
// the population is p0 = 1000 at the beginning of a year.
// The population regularly increases by 2 percent per year
//  and moreover 50 new inhabitants per year come to live in the town.
//   How many years does
//  the town need to see its population greater or equal to p = 1200 inhabitants?
function nbYear(p0, percent, aug, p) {
  let n = 0;
  //   for (let i = 1; i < 1000; i++) {
  //     if (p > p0) {
  //       p0 += p0 * (percent / 100) + aug;
  //       n = i;
  //     }
  //   }
  while (p0 < p) {
    p0 += p0 * (percent / 100) + aug;
    n++;
  }
  return n;
}
console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
console.log(nbYear(1500000, 0.25, 1000, 2000000));

// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
function findOdd(arr) {
  const sortedArr = [...arr].sort((a, b) => a - b);
  let numOfRep = 0;
  for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[i] === sortedArr[i - 1]) {
      numOfRep += 1;
    }
  }
}
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));

//============================
// Your task is to sort a given string. Each word in the string will
//  contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string.
// The words in the input String will only contain valid consecutive numbers.
function order(words) {
  //   return words.match(/\d+/g).map(Number);
  return words
    .split(' ')
    .sort((a, b) => a.match(/\d+/g) - b.match(/\d+/g))
    .join(' ');
}
console.log(order('is2 Thi1s T4est 3a'));
console.log(order('4of Fo1r pe6ople g3ood th5e the2'));

function findMissingLetter(str) {
  //   let ch0 = str.join('').charCodeAt(0),
  //     ch;
  //   str.every((v, i) => {
  //     ch = String.fromCharCode(ch0 + i);
  //     return ch === v;
  //   });
  //   return ch === str[str.length - 1] ? undefined : ch;
  let difference;
  let missingCharCode;
  const arrToStr = str.join('');
  for (let i = 0; i < str.length; i++) {
    difference = arrToStr.charCodeAt(i) - arrToStr.charCodeAt(i - 1);
    if (difference > 1) {
      missingCharCode = arrToStr.charCodeAt(i) - 1;
      return String.fromCharCode(missingCharCode);
    }
  }
}
console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
console.log(findMissingLetter(['B', 'C', 'E', 'F', 'G']));
