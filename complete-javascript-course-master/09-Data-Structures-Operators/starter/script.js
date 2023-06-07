'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Your delivery of ${this.starterMenu[starterIndex]} for starters and ${this.mainMenu[mainIndex]} for mains will be delivered to ${address} before ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  // ...otherIngredients is the rest of the array, and not spreading the array
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
/////////////////////
/// DESTRUCTURING ///
/////////////////////
/*
// ARRAYS

// const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z); // 2, 3, 4

// skip over a value
const [first, , third] = restaurant.categories;
console.log(first, third);

// reassign values
let [main, secondary] = restaurant.categories;
console.log(main, secondary); // 'Italian', 'Pizzeria'
// reassign
[secondary, main] = [main, secondary];
console.log(secondary, main); // 'Italian', 'Pizzeria

// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested
const nestedArr = [2, 3, [4, 5]];
const [a, , [c, d]] = nestedArr;
console.log(a, c, d); // 2, 4, 5

// OBJECTS

// needs to be the key names in the object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// reassign
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// default property
// restaurant.menu would be undefined
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // [], ["Brushetta", "Garlic Bread"]

// mutating objects with destructuring
let e = 111;
let f = 999;
const obj = { e: 23, f: 7, g: 14 };

({ e, f } = obj);
console.log(e, f);

// nested
const {
  fri: { open, close },
} = openingHours;
console.log(open);
*/
///////////////////////
/// SPREAD OPERATOR ///
///////////////////////
/*
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);

// passing into a function
console.log(...newArr); // 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // ["pizza", "pasta, "risotto", "gnocci"]

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// On all iterables
const str = 'Jonas';
const letters = [...str];
console.log(letters);

const ingredients = [
  prompt("Let's make a pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {
  ...restaurant,
  owner: 'Pieter',
  foundedIn: 2991,
  signatureDish: 'Pizza',
};
console.log(newRestaurant);
*/
////////////////////
/// REST PATTERN ///
////////////////////
/*
// Rest goes to the left of the assignment
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // fri, sat

// functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushroom', 'olives', 'spinach');
*/
////////////////////////////////
/// SHORT CIRCUIT EVALUATION ///
////////////////////////////////
/*
console.log('--------OR--------');
// If the first value is a truthy value, it will immediately return it
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null is also a falsy, but it will still be returned
console.log(null || undefined); // undefined
console.log(undefined || 0 || '' || 'Hello' || 23 || undefined); // Hello

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 10, as numGuests is not defined on the object

const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 10, as restaurant.numGuests = undefined, and therefore falsy, so it will then return the truthy value, and store it in the variable

console.log('--------AND--------');
// And works in the exact opposite way
// Returns the first falsy value
console.log(0 && 'Jonas'); // 0
console.log('' && null); // ''
console.log('Jonas' && undefined); // undefined
console.log([] && null); // null
console.log(undefined && 0 && '' && 'Hello' && 23 && undefined); // undefined

// practical
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// if it doesn't exist, then don't do anything, but if it does, then return the method
restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'spinach');
*/
///////////////////////////////////
/// NULLISH COALESCING OPERATOR ///
///////////////////////////////////
/*
// Returns non-nullish values: null and undefined (Not 0 or '')

// Set to a falsy value, but there is an amount specified of 0
restaurant.numGuests = 0;
// ?? will return the correct number, even though it is falsy
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
*/
///////////////////////////////////
/// LOGICAL ASSIGNMENT OPERATOR ///
///////////////////////////////////
/*
const rest1 = {
  name: 'Caprice',
  numGuests: 20,
  rooms: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// set a default number of guests if they don't have it
rest2.numGuests = rest2.numGuests || 10;
console.log(rest2.numGuests); // 10, as it does not have the property
rest1.numGuests = rest1.numGuests || 10;
console.log(rest1.numGuests); // 20, as it already has the property

// rest1.numGuests ||= 10; // 10
// rest2.numGuests ||= 10; // 20

// If the value is falsy, it will also be overwritten
rest1.rooms ??= 10; // 0, as the value has been assigned
console.log(rest1);

// returns first falsy or last option
// rest1.owner = rest1.owner && 'ANNONYMOUS'; // undefined as it does not exist
// rest2.owner = rest2.owner && 'ANNONYMOUS'; // ANNONYMOUS
rest1.owner ??= 'ANNONYMOUS';
rest2.owner ??= 'ANNONYMOUS';

console.table(rest1);
console.table(rest2);
*/
///////////////////
/// CHALLENGE 1 ///
///////////////////
/*
// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// GOOD LUCK 😀
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);
// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);
// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
// 5
const { team1, x: draw, team2 } = game.odds;
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
console.log(team1);
console.log(draw);
console.log(team2);
// 6
const printGoals = function (...players) {
  console.log(`${players.length} goals scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
// 7
team1 < team2 && console.log('Team 1 is more likely to win');
*/
