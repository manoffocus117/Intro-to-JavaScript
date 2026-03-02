/**
 * A closure is the combination of a function bundled together (enclosed) with 
 * references to its surrounding state (the lexical environment). In other words, 
 * a closure gives a function access to its outer scope. In JavaScript, closures 
 * are created every time a function is created, at function creation time.
 */

function stopwatch() {
      let count = 0;

      return function () {
            count++;
            return count;
      };
}

let first_call = stopwatch();
console.log(first_call());
console.log(first_call());
console.log(first_call());
console.log(first_call());

let second_call = stopwatch();
console.log(second_call());
console.log(second_call());
console.log(second_call());
console.log(second_call());
console.log(second_call());
