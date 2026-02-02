// check leap year 
/**
 * 1. Divisible by 4 → leap year
 * 2. BUT if divisible by 100 → ❌ not a leap year
 * 3. UNLESS divisible by 400 → ✅ leap year again 
 */

// simple way
function check_leap_year(year) {
      // console.log(year);
      if (year % 4 === 0) {
            return true;
      } else {
            return false;
      }
}

// check_leap_year(2002);
let output = check_leap_year(2000);
// console.log(output);


// another way
function is_leap_year(year) {
      if (year % 100 !== 0 ||
            year % 400 === 0 &&
            year % 4 === 0
      ) {
            return true;
      } else {
            return false;
      }
}

let year = is_leap_year(2052);
console.log(year);

