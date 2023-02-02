////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

let markWeight = 78;
let markHeight = 1.69;

let markBMI = markWeight / markHeight ** 2;
console.log(markBMI); // 27.3099

let johnWeight = 92;
let johnHeight = 1.95;

let johnBMI = johnWeight / johnHeight ** 2;
console.log(johnBMI); // 24.1946

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

if (markBMI > johnBMI) {
  console.log(
    `Mark's BMI (${markBMI.toFixed(
      2
    )}) is higher than John's BMI (${johnBMI.toFixed(2)})!`
  );
} else {
  console.log(
    `John's BMI (${johnBMI.toFixed(
      2
    )} is higher than Mark's BMI (${markBMI.toFixed(2)})!)`
  );
}

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS : Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

let dolphinScore = 0;
let koalaScore = 0;

dolphinScore = (96 + 108 + 89) / 3;
koalaScore = (88 + 91 + 110) / 3;

if (dolphinScore > koalaScore) {
  console.log('Dolphones win');
} else if (dolphinScore === koalaScore) {
  console.log("It's a draw");
} else {
  console.log("Koala's win");
}

// Bonus 1
let dolphinScoreBonus = (97 + 112 + 101) / 3;
let koalaScoreBonus = (109 + 95 + 123) / 3;

let minScore = 100;

if (dolphinScoreBonus > koalaScoreBonus && dolphinScoreBonus >= minScore) {
  console.log('Dolphones win');
} else if (koalaScoreBonus > dolphinScoreBonus && koalaScoreBonus >= minScore) {
  console.log("Koala's win");
} else if (
  dolphinScoreBonus === koalaScoreBonus &&
  dolphinScoreBonus >= minScore &&
  koalaScoreBonus >= minScore
) {
  console.log("It's a draw");
} else {
  console.log('No one wins!');
}

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

let bill = 275;

let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip} and the total was ${bill + tip}`
);
