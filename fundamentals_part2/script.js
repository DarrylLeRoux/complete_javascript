'use strict';

/////////////////////////////////
//////// FUNCTIONS //////////////
/////////////////////////////////

function logger() {
  console.log('My name is Darryl');
}
// calling / running / invoking a function
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples, and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); // or console.log(fruitProcessor(5, 0))

const appleOrangeJuice = fruitProcessor(2, 3);
console.log(appleOrangeJuice);

// Declaration vs Expression
/////////////////////////////

// Function Declaration
function calcAge1(birthYear) {
  const age = 2023 - birthYear;
  return age;
}
console.log(calcAge1(1982));

// Function Expression
// Produces a value (calcAge2 is a variable with a value)
const calAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calAge2(1982);
console.log(age2);

// Arrow functions
/////////////////////////////

const calcAge3 = (birthYear) => {
  return 2023 - birthYear;
};

const age3 = calcAge3(1982);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
const retirementAge = yearsUntilRetirement(1982, 'Darryl');
console.log(retirementAge);

// functions calling other functions
////////////////////////////////////

function cutFruitPeices(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPeices(apples);
  const orangePieces = cutFruitPeices(oranges);

  const juice = `Juice with ${applePieces} pieces of apples, and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

// review

function calcAgeFunction(birthYear) {
  const age = 2023 - birthYear;
  return age;
}

const yearsUntilRetirement2 = (birthYear, firstName) => {
  const calcAgeValue = calcAgeFunction(birthYear);
  const retirement = 65 - calcAgeValue;

  return retirement > 0
    ? `${firstName} retires in ${retirement} years`
    : `${firstName} retired ${Math.abs(retirement)} years ago`;
};
console.log(yearsUntilRetirement2(1982, 'Darryl'));
console.log(yearsUntilRetirement2(1930, 'Darryl'));
