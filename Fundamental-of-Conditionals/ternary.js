/** ternary conditional statement in javascript
 * 
 * syntax => 
 *    condition ? operation1 : operation2 
 */

// regular if-else statement
let age = 20;

if (age >= 18) {
      // console.log("you can vote");
} else {
      // console.log("tui katha murhi diye ghuma");
}


// ternary operator

age >= 18 ? console.log("vote dio") : console.log("ghumai thako");

let price = 500;
let is_leader = true;

if (is_leader === true) {
      price = 0;
} else {
      price += 100;
}
console.log(price);


price = is_leader === true ? 0 : price += 100;

console.log(price);
