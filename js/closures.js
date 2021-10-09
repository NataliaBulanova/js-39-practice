//========ЗАМЫКАНИЯ======
function makeSizer(size) {
  return function () {
    document.body.style.fontSize = size + 'px';
  };
}

const size12 = makeSizer(12);
const size18 = makeSizer(18);
const size16 = makeSizer(16);

document.querySelector('.size-18').onclick = size18;
document.querySelector('.size-16').onclick = size16;
document.querySelector('.size-12').onclick = size12;

const makeSheff = name => {
  const makeDish = dish => {
    console.log(`${name} are cooking ${dish}`);
  };
  return makeDish;
};

const mango = makeSheff('Mango');
const polly = makeSheff('Polly');

mango('soup');
polly('salad');

//========================
function rounder(places) {
  return function (number) {
    return Number(number.toFixed(places));
  };
}

const rounder3 = rounder(3);
const rounder2 = rounder(2);
console.log(rounder2(1.98877));
console.log(rounder3(1.98877));

//=========================
function prolonger(additive) {
  return function (string, maxLength) {
    return string.padStart(maxLength, additive);
  };
}
const a1 = prolonger('=');
const a2 = prolonger('*');
console.log(a1('Lorem', 10));
console.log(a2('Lorem', 10));

//==========================
