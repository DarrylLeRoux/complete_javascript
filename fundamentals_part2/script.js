'use strict';

/////////////////////////////////
//////// FUNCTIONS /////////////

function logger() {
  console.log('My name is Darryl');
}
// calling / running / invoking a function
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples, and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); // or console.log(fruitProcessor(5, 0))
