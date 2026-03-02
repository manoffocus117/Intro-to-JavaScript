/** 8 ways to get undefined
 * 1. variable that is not initialized will give undefined
 * 2. function with no return
 * 3. parameter that is not passed will be undefined
 * 4. if return nothing has on the right side will return undefined
 * 5. property that dose'nt exists on an object will return undefined
 * 6. accessing array element outside of the index range will return undefined
 * 7. deleting an element inside an array will return undefined
 * 8. set a value directly to undefined 
 */

let a; // return undefined
// console.log(a);

function add(a, b) {
      let total = a + b;
}
// let result = second();
// console.log(result);

function second(a, b) {
      console.log(a, b);
}
// second();

function no_negative(a, b) {
      if (a < 0 || b < 0) {
            return;
      }
      return a + b;
}

let something = no_negative(-12, 23);
// console.log(something);

let person = {
      name: "kuddus ali",
      address: "kumar khali",
};

// console.log(person.id);

let numbers = [1, 3, 4, 6, 8, 9];
// console.log(numbers[2], numbers[4], numbers[6]);

delete numbers[4]; // you should not do it. instead use splice
// console.log(numbers[2], numbers[4], numbers[6]);

// console.log(numbers);

let nothing = undefined;
// console.log(nothing);

const data = {result : [], updated : null}

console.log(typeof undefined);



console.log(typeof null);