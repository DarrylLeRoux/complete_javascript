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

// // Can receive data and return data
// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   // you return the result of the function to be used elsewhere in your code
//   return juice;
// }
// // if you want to use that return value, you can store the output in a variable
// const appleJuice = fruitProcessor(5, 0);
// // you can now log it to the console
// console.log(appleJuice);

// // you can now use the same function to produce a different result
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// Expressions vs Declaretions

// function declaration
// function calcAge1(birthYear) {
//   // you can return without needing to store in a variable
//   return 2023 - birthYear;
// }

// const age1 = calcAge1(1982);
// console.log(age1);

// // function expression (expressions produce a value - this value is stored into a variable)
// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };

// const age2 = calcAge2(1982);
// console.log(age1, age2);

/////////////////////
// ARROW FUNCTIONS //
/////////////////////

// const calcAge3 = (birthYear) => 2023 - birthYear;

// console.log(calcAge3(1982));

// const yearsUntilRetirement = (birthYear, firstName) => {
//   let age = 2023 - birthYear;
//   let retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1982, 'Darryl'));

///////////////////////////////////////
// FUNCTIONS CALLING OTHER FUNCTIONS //
///////////////////////////////////////

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of  orange.`;
//   // you return the result of the function to be used elsewhere in your code
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   let retirement = 65 - age;
//   return retirement >= 0
//     ? `${firstName} retires in ${retirement} years`
//     : `${firstName} is already retired. He retired ${Math.abs(
//         retirement
//       )} years ago.`;
// };

// console.log(yearsUntilRetirement(1958, 'Darryl'));

//////////////////////////
// CODING CHALLENGE ONE //
//////////////////////////

// Team only wins if it has at least double the score of the other team
// otherwise no team wins
// const calcDolphinesAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };
// const dolphineAverage = calcDolphinesAverage(85, 54, 41);
// console.log(dolphineAverage);

// const calcKoalasAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };
// const koalaAverage = calcKoalasAverage(23, 34, 27);
// console.log(koalaAverage);

// function checkWinner(avgKoalas, avgDolphines) {
//   if (avgKoalas > 2 * avgDolphines) {
//     return `Koalas Win (${avgKoalas} vs ${avgDolphines})`;
//   } else if (avgDolphines > 2 * koalaAverage) {
//     return `Dolphines Win (${avgDolphines} vs ${koalaAverage})`;
//   } else {
//     return 'No one wins';
//   }
// }

// const winner = checkWinner(koalaAverage, dolphineAverage);

// console.log(winner);

////////////
// ARRAYS //
////////////

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = [friend1, friend2, friend3];
// console.log(friends);

// // create with the new keyword
// // const years = new Array(1992, 1984, 2008, 2020);

// // loggin an array item
// console.log(friends[0]);

// // get the number of items in an array
// console.log(friends.length);

// // get last item of an array
// // friends.length = 3 and then subtract 1 giving you the item at the last position [2]
// console.log(friends[friends.length - 1]);

// // mutate the array
// friends[2] = 'Jay';
// console.log(friends); // ['Michael', 'Steven', 'Jay']

// // holds all types
// const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991];
// console.log(`${jonas[0]} ${jonas[1]} is ${jonas[2]} years old`);

// // exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

///////////////////
// ARRAY METHODS //
///////////////////

const friends = ['Michael', 'Steven', 'Peter'];

// Push an item to the end of the array
friends.push('Jonas');
console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jonas']

// UnShift pushes an item to the beginning of the array
friends.unshift('John');
console.log(friends); // ['John', 'Michael', 'Steven', 'Peter', 'Jonas']

// Pop removes an element from the end of the array
friends.pop();
console.log(friends); // ['John', 'Michael', 'Steven', 'Peter']

// Shift removes an element from the beginning of the array
friends.shift();
console.log(friends); // ['Michael', 'Steven', 'Peter']

// Find a position of an element
console.log(friends.indexOf('Steven')); // 1

// Return a boolean if an element is in the array
console.log(friends.includes('Steven')); // true
