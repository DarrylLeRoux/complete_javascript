let firstName = 'Jonas';
console.log(firstName);

// Values and Variables
let country = 'South Africa';
let continent = 'Africa';
let population = 36_000_000;
console.log(country, continent, population);

// Data Types
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let, const and var
language = 'English';
// const country = 'South Africa'; // error
// const continent = 'Africa'; // error

// CHALLENGE ONE
let markMass = 78;
let johnMass = 92;

let markHeight = 1.69;
let johnHeight = 1.95;

let markBmi = markMass / (markHeight * markHeight);
console.log(markBmi);
let johnBmi = johnMass / (johnHeight * johnHeight);
console.log(johnBmi);

let markHigherBmi = markBmi > johnBmi;
console.log(markHigherBmi);

// CHALLENGE TWO
if (markBmi > johnBmi) {
  console.log(
    `Mark's BMI (${markBmi.toFixed(
      2
    )}) is higher than John's (${johnBmi.toFixed(2)})`
  );
} else {
  console.log(
    `John's BMI (${johnBmi.toFixed(
      2
    )}) is higher than Mark's (${johnBmi.toFixed(2)})`
  );
}

const hasDriversLicense = true;
const hasGoodVision = false;

const shouldDrive = hasDriversLicense && hasGoodVision; // false

if (shouldDrive) {
  console.log('Sarah is able to drive');
} else {
  console.log('Someone else should drive'); // prints to console
}

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired); // true
console.log(hasDriversLicense && hasGoodVision && isTired); // false

///////////////////////////////
////// CODING CHALLENGE 3 /////
///////////////////////////////

dolphineScore = [96, 108, 89];
koalaScore = [88, 91, 110];

dolphineFullScores = dolphineScore.reduce((acc, score) => {
  return acc + score;
});
let dolphineAverageScore = dolphineFullScores / dolphineScore.length;
console.log(dolphineAverageScore);

koalaFullScores = koalaScore.reduce((acc, score) => {
  return acc + score;
});
let koalaAverageScore = koalaFullScores / koalaScore.length;
console.log(koalaAverageScore);

if (koalaAverageScore > dolphineAverageScore) {
  `Koalas have the higher average score with ${koalaAverageScore} to the Dolphines who had ${dolphineAverageScore}`;
} else {
  console.log(
    `Dolphines have the higher average score with ${dolphineAverageScore} to the Koalas who had ${koalaAverageScore}`
  );
}

// Switch Statement
const day = 'thursday';

// Compares argument (day) with the case by means of strict equality ===
switch (day) {
  case 'monday':
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  // If you use the same result for two cases, you can just enter the additional cases right after it
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend');
    break;
  // You can have a default block of code run
  default:
    console.log('Not a valid day');
}

// Same example in an if/else statement
if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day == 'sunday') {
  console.log('Enjoy the weekend');
} else {
  console.log('Not a valid day');
}
