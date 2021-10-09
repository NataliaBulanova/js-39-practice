const cars = [
  {
    name: 'Toyota',
    model: '',
    type: 'minivan',
    price: 50000,
    amount: 7,
    onSale: false,
  },
  {
    name: 'Audi',
    model: '',
    type: 'sedan',
    price: 72000,
    amount: 30,
    onSale: true,
  },
  {
    name: 'BMW',
    model: '',
    type: 'sedan',
    price: 90000,
    amount: 42,
    onSale: false,
  },
  {
    name: 'Mazda',
    model: 'CX-9',
    type: 'hatchback',
    price: 54000,
    amount: 16,
    onSale: true,
  },
  {
    name: 'Honda',
    model: 'Accord',
    type: 'couple',
    price: 120000,
    amount: 10,
    onSale: true,
  },
  {
    name: 'Ford',
    model: '',
    type: 'sedan',
    price: 120000,
    amount: 28,
    onSale: false,
  },
  {
    name: 'Ford',
    model: '',
    type: 'sedan',
    price: 24000,
    amount: 35,
    onSale: false,
  },
  {
    name: 'Hundai',
    model: '',
    type: 'coupe',
    price: 32000,
    amount: 20,
    onSale: false,
  },
  {
    name: 'Audi',
    model: '',
    type: 'liftback',
    price: 12000,
    amount: 40,
    onSale: true,
  },
  {
    name: 'Bugatti',
    model: '',
    type: 'sedan',
    price: 200500,
    amount: 30,
    onSale: true,
  },
];

const makeCarsWithDiscount = (cars, discount) => {
  return cars.map(car => ({
    ...car,
    price: (car.price = car.price * discount),
  }));
};
const carsWithDiscount = makeCarsWithDiscount(cars, 0.95);
console.table(carsWithDiscount);
//=======================================
const makeUpdatedAmount = (cars, carName, sold) =>
  cars.map(car =>
    car.name === carName ? { ...car, amount: car.amount - sold } : car,
  );
console.table(makeUpdatedAmount(cars, 'Bugatti', 5));
console.table(makeUpdatedAmount(cars, 'Toyota', 4));
//=======================================
const res = cars.map(({ price, type }) => ({ price, type }));
console.table(res);
//=======================================
const updatedCars = cars.map(car => ({ ...car, discount: car.price * 0.05 }));
console.table(updatedCars);
//========================================
const filterByPrice = (cars, threshold) => {
  return cars.filter(car => car.price > threshold);
};

const filterByName = (cars, name) => cars.filter(car => car.name !== name);

console.table(filterByPrice(cars, 130000));
console.table(filterByName(cars, 'Honda'));
//======================================
const getCarWithDiscount = cars => {
  return cars.filter(car => car.onSale);
};
console.table(getCarWithDiscount(cars));
//======================================
const getCarsWithType = (cars, a) => cars.filter(({ type }) => type === a);
console.table(getCarsWithType(cars, 'sedan'));
//=====================================
const sortByName = cars => {
  return [...cars].sort((a, b) => a.name.localeCompare(b.name));
};
console.table(sortByName(cars));
//======================================
const sortByPrice = cars => {
  return [...cars].sort((a, b) => a - b);
};
console.table(sortByPrice(cars));
//========================================
const getTotalAmount = cars =>
  cars.reduce((acc, { amount }) => (acc += amount), 0);
console.log(getTotalAmount(cars));
//========================================
const getSortedCarsOnSale = cars => {
  return cars
    .filter(({ onSale }) => onSale)
    .sort((a, b) => a.name.localeCompare(b.name));
};
console.table(getSortedCarsOnSale(cars));

const array = [5, 6, 7, 4, 3, 1];
const findMatchesByReduce = (numbers, ...args) =>
  numbers.reduce(
    (acc, number) => (args.includes(number) ? [...acc, number] : acc),
    [],
  );
const findMatchesByFilter = (numbers, ...args) =>
  args.filter(number => numbers.includes(number));
console.log('By reduce', findMatchesByReduce(array, 1, 8, 2, 7));
console.log('By filter', findMatchesByFilter(array, 1, 8, 2, 7));

const calculateTotalPrice = (allProducts, productName) =>
  allProducts.reduce(
    (acc, { name, price, quantity }) =>
      name === productName ? price * quantity : acc,
    0,
  );

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: [
      'Jacklyn Lucas',
      'Linda Chapman',
      'Adrian Cross',
      'Solomon Fokes',
    ],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];
const getTotalBalanceByGender = (users, gender) =>
  users.reduce(
    (acc, { balance, gender }) => (gender === gender ? acc + balance : acc),
    0,
  );
console.log(getTotalBalanceByGender(users, 'female'));
