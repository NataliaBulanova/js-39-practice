const historyService = {
  orders: [
    { email: 'jacob@hotmail.com', dish: 'Burrito' },
    { email: 'solomon@topmail.net', dish: 'Burger' },
    { email: 'artemis@coldmail.net', dish: 'Pizza' },
    { email: 'solomon@topmail.net', dish: 'Apple pie' },
    { email: 'jacob@hotmail.com', dish: 'Taco' },
  ],
  getOrdersLog() {
    return this.orders
      .map(order => `email: ${order.email} dish: ${order.dish}`)
      .join(' - ');
  },
  getEmails() {
    const emails = this.orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter(order => order.email === email);
  },
};

console.table(historyService.getOrdersByEmail('solomon@topmail.net'));
console.table(historyService.getOrdersByEmail('artemis@coldmail.net'));
console.log(historyService.getEmails());
console.log(historyService.getOrdersLog());

// ============CALLBACK=====
const doMath = function (a, b, callback) {
  const result = callback(a, b);
  return result;
};

const add = function (x, y) {
  return x + y;
};

const sub = function (x, y) {
  return x - y;
};

console.log(`Cумма:`, doMath(3, 4, add));
console.log(`Разница:`, doMath(10, 4, sub));
console.log(
  `Инлайн функция`,
  doMath(25, 2, (c, d) => c * d),
);

const buttonRef = document.querySelector('.js-button');

const handleBtnClick = function () {
  console.log('Click on button ' + Date.now()); //Date.now() - возвращает (строку) количество миллисекунд, прошедших с 1 января 1970 года
};

buttonRef.addEventListener('click', handleBtnClick);

const createProduct = (obj, callback) => {
  const product = { ...obj, id: Date.now() };
  callback(product);
};

function logProduct(product) {
  console.log('product in callback', product);
}

function logTotalPrice(fruit) {
  console.log(`Total price of ${fruit.name}`, fruit.price * fruit.quantity);
}
createProduct({ name: 'apple', price: 20, quantity: 100 }, logProduct);
createProduct({ name: 'lemon', price: 80, quantity: 20 }, logTotalPrice);

const string = ['JavaScript', 'is', 'awesome'];
const result = string.reduce(
  (phrase, word, index) =>
    // Перед первым словом не надо ставить пробел
    index === 0 ? phrase + word : phrase + ' ' + word,
  '',
);

console.log(result);

const wordArray = ['Ann', 'Liza', 'Gorge', 'Fred', 'Sam'];
const makeMassage = arr => {
  return arr.reduce((phrase, word, index) =>
    index === arr.length - 1 ? phrase + ' & ' + word : phrase + ' ' + word,
  );
};

// const makeMassage = arr => {
//   let newMessage = arr.reduce((phrase, word, index) =>
//     index === arr.length - 1 ? phrase + ' & ' + word : phrase + ' ' + word,
//   );
//   return newMessage;
// };

console.log(makeMassage(wordArray));

// =======Вызов геолокации====
const onGetPositionSuccess = function (position) {
  console.log('Ваше местоположение:', position);
};
const onGetPositionError = function (error) {
  console.log(error);
};
window.navigator.geolocation.getCurrentPosition(
  //ничего не возвращает пока не бросишь callback. window - 2buttons: alow & deny
  onGetPositionSuccess,
  onGetPositionError,
);

//===========Отложеный вызов=======
const greet = function (phrase, name) {
  alert(phrase + ' ' + name); //only OK button
};

setTimeout(greet, 3000, 'Hello', 'Ann!');

const numbers = [23, 1, 5, 6, 13, 8, 10];
const filter = (array, num) => array.filter(value => value > num);
console.log(filter(numbers, 7));
const ascendingList = [...numbers].sort((a, b) => a - b); //SORT NUMBERS
console.log(ascendingList);
