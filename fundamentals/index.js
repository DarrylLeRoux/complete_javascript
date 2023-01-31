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

let johnWeight = 95;
let johnHeight = 1.88;

let johnBMI = johnWeight / johnHeight ** 2;
console.log(johnBMI); // 26.8786

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
