/**
 * truthy :
 *    1. true
 *    2. any number (negative or positive) will be truthy other than 0 (zero)
 *    3. any string is a truthy value other than empty string
 *    4. "0" zero as a string will be a truthy value
 *    5. "false" as string will be a truthy value
 *    6. {} empty object is a truthy value
 *    7. [] empty array is a truthy value
 *
 *
 * falsy :
 *    1. false
 *    2. zero ( 0 ) is a false value
 *    3. empty string is a falsy value
 *    4. undefined is a falsy value
 *    5. null is a falsy value
 */

let x = [];
// console.log(x);

if (x) {
      console.log("the value of x is true");
} else {
      console.log("the value of x is false");
}

// optional
// check falsy
const y = 0;
if (!y) {
      console.log("value of y is falsy");
} else {
}

// check truthy
const z = "habul";
if (!!z) {
      console.log("the value of z is truthy");
} else {
      console.log("the value od z is falsy");
}
