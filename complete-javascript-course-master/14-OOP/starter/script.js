'use strict';
/////////////////////////////
/// CONSTRUCTOR FUNCTIONS ///
/////////////////////////////
/*
const Person = function (firstName, birthYear) {
  console.log(this); // Person {}
  // instance properties available on all instances
  this.firstName = firstName;
  this.birthYear = birthYear;
  // do not create a method in a constructor function!
  // if there are 1000 instances of this constructor function, there will be 1000 instances of this function, slowing down performance
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
  // Now that there have been properties defined, the this points to the Person object, but with the properties
  console.log(this);
  // Person{firstName: 'jonas, birthYear: 1991}
};

const jonas = new Person('Jonas', 1991);
console.log(jonas); // Person{firstName: 'jonas, birthYear: 1991}

// jonas is now an instance of Person{}
console.log(jonas instanceof Person); // true

// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} is linked to prototype
// 4. Function is automatically returned

const matilda = new Person('matilda', 2017);
console.log(matilda); // Person{firstName: 'matilda, birthYear: 2017}
*/
//////////////////
/// PROTOTYPES ///
//////////////////
/*
// Each function has a property called prototype
// Every object created with a constructor function, will get access to the methods defined on the constructor's prototype property
// In this case it would be the Person prototype - Person.prototype
// We can therefore define, or "add" the calcAge() function on the Person functions prototype so that all instances that need it, can call it
// Only the copy of this function is on the prototype, and not the Person itself
// What we are doing is setting the Person "parent" with a method that its children, or instances can then use
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// Jonas now has access to it, as jonas inherited from the prototype:
// The 'this' keyword in this.birthYear will then point to jonas, as it is jonas that is calling it
jonas.calcAge();
console.log(jonas); // jonas object does not have the property calcAge() defined on it, but it merely is able to use it from the prototype

// Matilda also has access to this as it was also constructed with the Person constructor function
matilda.calcAge();
console.log('Matilda:', matilda); // still not on the object itself, but has access to the property

// Just like all arrays have access to .map(), but it is not on the array itself

// Jonas' prototype (parent blue print) is the prototype property of the Person function
console.log(jonas.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(jonas)); // true

// __proto__ is attached in step 3 ({} linked to prototype) when using the new keyword

// You can check to see if the property is inherited or is part of the object itself
console.log(jonas.hasOwnProperty('firstName')); // true
*/
///////////////////
/// CHALLENGE 1 ///
///////////////////
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car('BMW', 120);
const merc = new Car('Mercedes', 95);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

bmw.accelerate();
bmw.brake();
merc.accelerate();
merc.brake();
merc.brake();
*/
///////////////////
/// ES6 CLASSES ///
///////////////////
/*
// Implement Person using a class
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // methods go outside the constructor
  // they are stored on the prototype of the Person
  // Person.prototype.calcAge = function(){console.log(2037-this.birthYear)}
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new Person('Jessica', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === Person.prototype); // true

// can also be done manually
Person.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
// jessica now has the greet function inherited from the PersonCl
jessica.greet();

// Important information
// 1. Classes are NOT hoisted - cannot use before declared
// 2. Classes are first-classes citizens
// 3. Classes are executed in strict mode - even if the global script isn't
*/
