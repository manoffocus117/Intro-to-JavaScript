/**
 * const num = 0;
const obj = new String("0");
const str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false
const num = 0;
const big = 0n;
const str = "0";
const obj = new String("0");

console.log(num == str); // true
console.log(big == num); // true
console.log(str == big); // true

console.log(num == obj); // true
console.log(big == obj); // true
console.log(str == obj); // true
 */

// type coercion / type conversion / type casting
// equal comparison don'nt work for non-primitive data type
// always use === 

const first = 1;
// const second = true;

// const first = 2;
const second = true;

if (first == second) {
      console.log("values are equal");
} else {
      console.log("values are not equal");
}


