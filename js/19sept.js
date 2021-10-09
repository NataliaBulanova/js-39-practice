// // Напиши скрипт, который, для объекта user, последовательно:

// // добавляет поле mood со значением 'happy'
// // заменяет значение hobby на 'skydiving'
// // заменяет значение premium на false
// // выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// // Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
// //Функция возвращает число - количество свойств.

// const countProps = function (obj) {
//   const keys = Object.keys(obj);
//   return keys.length;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// // Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// //Функция считает общую сумму запрплаты работников и возращает ее.
// //Каждое поле объекта, передаваемого в функцию,
// //имеет вид "имя":"зарплата".

// const countTotalSalary = function (employees) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countTotalSalary({})); // 0
// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400

// // Напиши функцию findBestEmployee(employees),
// // которая принимает объект сотрудников и возвращает имя самого продуктивного
// // (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся
// //  как свойства объекта в формате "имя":"кол-во задач".

// const findBestEmployee = function (employees) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.
// Возвращает массив значений определенного свойства prop из каждого объекта в массиве.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   return arr.filter(product => product[prop]).map(product => product[prop]);
// };
// const getAllPropValues = (arr, prop) => arr.reduce((acc, el) => (el.hasOwnProperty(prop) ? [...acc, el[prop]] : acc),[]);

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

// Дано: массив, содержащий хеши имен
// Возврат: строка, отформатированная как список имен, разделенных запятыми,
// за исключением последних двух имен, которые должны быть разделены амперсандом.

function list(array) {
  // пиши тут свой код
}

// ТЕСТЫ

console.log(
  list([
    { name: 'Bart' },
    { name: 'Lisa' },
    { name: 'Maggie' },
    { name: 'Petya' },
  ]),
); // returns 'Bart, Lisa, Maggie & Petya'
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }])); // returns 'Bart & Lisa'
console.log(list([{ name: 'Bart' }])); // returns 'Bart'
console.log(list([])); // ''

//===================================================

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

// const calculateTotalPrice = (allProdcuts, productName) => {
//   for (const product of allProdcuts) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }
//   return `There is no such product`;
// };

const calculateTotalPrice = (allProdcuts, productName) =>
  allProdcuts.reduce(
    (acc, { name, price, quantity }) =>
      name === productName ? price * quantity : acc,
    0,
  );

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
console.log(calculateTotalPrice(products, 'Wawe')); // 2800

// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы с
// балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  balance: 0,
  transactions: [],
  id: 0,
  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    this.id += 1;
    const transaction = {
      amount,
      type,
      id: this.id,
    };
    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;
    this.transactions.push(transaction);
  },
  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      return `Cнятие такой суммы не возможно`;
    }
    this.balance -= amount;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
  },

  getBalance() {
    return this.balance;
  },

  // ===== Метод ищет и возвращает объект транзации по id
  getTransactionDetails(id) {
    for (let transaction of this.transactions) {
      if (id === transaction.id) {
        return transaction;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let totalType = 0;
    for (const transaction of this.transactions) {
      if (type === transaction.type) {
        totalType += transaction.amount;
      }
    }
    return totalType;
  },
};

account.deposit(2000);
account.deposit(1200);
account.deposit(900);

account.withdraw(200);
account.withdraw(600);

console.log(account.getBalance());
console.log(account.getTransactionDetails(4));
console.log(account.getTransactionTotal('deposit'));

const obj = {
  name: 'Igor',
  car: 'Mercedes',
  carColor: 'black',
};

function doSmth(key, object) {
  return object.hasOwnProperty(key);
}

console.log(doSmth('name', obj));
const arr = [1, 2];
const res = arr.push(10);
console.log(res); //3 - длинна масива
const b = arr.pop();
console.log(b); //2 возвращает последний элемент
