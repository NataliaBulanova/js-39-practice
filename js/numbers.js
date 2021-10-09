// ======Приведение к числу===
const value = '42';
const number = Number(value);
console.log(typeof number); //number
const string = Number('ABC');
console.log(typeof string); //number
console.log(Number(string)); //NaN

// ======Number.parseInt & Number.parseFloat===
const numInt = Number.parseInt('43.12px33');
console.log('Результат parseInt:', numInt);
const numFloat = Number.parseFloat('43.12px33');
console.log('Результат parseFloat:', numFloat);

//=======Number.isNaN Проверка на не число =====
console.log(Number.isNaN(number)); //false
console.log(Number.isNaN(string)); //true

const message = 'I am 23 years old';
const extractAge = string =>
  string
    .split(' ')
    .reduce(
      (age, word) => (Number.isNaN(Number(word)) ? age : age + Number(word)),
      0,
    );
console.log(extractAge(message));

// ====Сложение чисел с плавающей точкой====
console.log(0.17 + 0.24);
console.log((0.17 + 0.24).toFixed(2)); //возвращает строку

//====Math=======
console.log(Math.floor(1.7)); // 1
console.log(Math.ceil(1.2)); // 2
console.log(Math.round(3.2)); //3
const arrayNumber = [6, 6.1, 6.2, 6.3];
console.log(Math.max(...arrayNumber));
console.log(Math.min(...arrayNumber));
console.log(Math.pow(3, 2)); //9
