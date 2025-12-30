/**
 * types of number in javascript 
 * 
 * integer number 
 * 
 * floating number 
 * 
 */

let orange_price = 220; // integer number
console.log(orange_price);


let chocolate_price = 0.50; // floating number 
console.log(chocolate_price);


let some_jinish_price = "330"; // this is a string. because it is written inside a quote.
console.log(typeof some_jinish_price);


console.log(orange_price + chocolate_price);

console.log(orange_price + some_jinish_price);


let some_new_jinish_price = parseInt("334"); // parseInt is a way to convert any string type number into a number or an integer.
console.log(some_new_jinish_price);

let some_text = parseInt("something is better than nothing"); // this is not a number. parseInt work with number.

let some_float_number = parseFloat("22.343"); // parseFloat is used to convert number type string to a floating number.
console.log(some_float_number);

let some_fixed_number = 345.5543907667;
console.log(some_fixed_number.toFixed(2)); // toFixed is used to return number of digits after the decimal point. (toFixed returns a string)

let nonsense = 44 / 0; // return infinity (positive or negative). because it break the law
console.log(nonsense)

