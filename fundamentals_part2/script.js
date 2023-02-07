'use strict';

/////////////////////////////////
//////// FUNCTIONS /////////////

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

// Function Declaration
function calcAge1(birthYear) {
  const age = 2023 - birthYear;
  return age;
}
console.log(calcAge1(1982));

// Function Expression
const calAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calAge2(1982);
console.log(age2);
