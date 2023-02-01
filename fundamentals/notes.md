# Javascript fundamentals

## truthy and falsy values

- falsy values are values that will return false when converting them into a boolean
- there are five falsy values
  - 0
  - ""
  - undefined
  - null
  - NaN

```js
console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('')); //false

console.log(Boolean('Darryl')); //truthy
```

```js
const money = 0;
if(money) { //0 is a falsy value, and JS will convert it to false, even though there is a money value
  console.log("Don't spend all your money)
} else {
  "You should get a job" //prints to console
}
```

```js
let height; //this is undefined, and therefore false

if (height) {
  console.log('Height is defined');
} else {
  console.log('Height is UNDEFINED'); //prints to console
}
```
