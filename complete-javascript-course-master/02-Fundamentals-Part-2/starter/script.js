/////////////////
// STRICT MODE //
/////////////////

// use at the beginning of each script
'use strict';

let hasDriversLicense = false;
const passTest = true;

// if you misspell a variable that you may have wanted to use, 'use strict' would through an error = 'Uncaught ReferenceError: hasDriverLicense is not defined' instead of running the code with no error
if (passTest) hasDriverLicense = true;

// strict mode provides errors for words that may be used in the future - 'Uncaught SyntaxError: Unexpected strict mode reserved word'
const interface = 'Audio';
const private = 534;
// same would be for const if = ...
