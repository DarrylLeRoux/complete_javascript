/////////////////
// STRICT MODE //
/////////////////

// use at the beginning of each script
'use strict';

let hasDriversLicense = false;
const passTest = true;

// if you misspell a variable that you may have wanted to use, 'use strict' would through an error = 'Uncaught ReferenceError: hasDriverLicense is not defined' instead of running the code with no error
// if (passTest) hasDriverLicense = true;

// strict mode provides errors for words that may be used in the future - 'Uncaught SyntaxError: Unexpected strict mode reserved word'
// const interface = 'Audio';
// const private = 534;
// same would be for const if = ...

///////////////
// FUNCTIONS //
///////////////

// Can receive data and return data
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  // you return the result of the function to be used elsewhere in your code
  return juice;
}
// if you want to use that return value, you can store the output in a variable
const appleJuice = fruitProcessor(5, 0);
// you can now log it to the console
console.log(appleJuice);

// you can now use the same function to produce a different result
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Expressions vs Declaretions

// function declaration
function calcAge1(birthYear) {
  // you can return without needing to store in a variable
  return 2023 - birthYear;
}

const age1 = calcAge1(1982);
console.log(age1);

// function expression (expressions produce a value - this value is stored into a variable)
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};

const age2 = calcAge2(1982);
console.log(age1, age2);
