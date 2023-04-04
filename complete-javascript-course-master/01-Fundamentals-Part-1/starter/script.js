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
