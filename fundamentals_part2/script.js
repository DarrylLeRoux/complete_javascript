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

///////////////////////////////////////////////////////////
/////////////////// CODING CHALLENGE #1 ///////////////////
///////////////////////////////////////////////////////////
/* Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team.

Otherwise, no team wins!

Your tasks:

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

2. Use the function to calculate the average for both teams

3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above.

Example: "Koalas win (30 vs. 13)"

4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2

5. Ignore draws this time

Test data:

Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
§ To calculate average of 3 values, add them all together and divide by 3
To check if number A is at least double number B, check for A >= 2 * B

Apply this to the team's average scores 😉
GOOD LUCK 😀
*/

const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

// Test Data 1
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

// Test Data 2
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
  return avgDolphins >= 2 * avgKoalas
    ? `Dolphins win (${avgDolphins} vs ${avgKoalas})`
    : `Koalas win (${avgKoalas} vs ${avgDolphins})`;
};

console.log(checkWinner(avgDolphins, avgKoalas)); // koalas win
console.log(checkWinner(avgDolphins2, avgKoalas2)); // Dolphins win
