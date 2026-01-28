/**
 * common ways to reverse a array 
 * 1. using array.reverse() method (array.reverse() change the original array)
 * 2. using spread operator with array.reversed method
 * 3. using array.unshift() method
 * 4. using for loop with decrement method { for (let i = array.length - 1; i >= 0; i--) { console.log(i) } }
 */


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers.reverse());

// let reversed = numbers.reverse();
// console.log(reversed);

// array looping using for loop
let reversed_number = [];

for (let num of numbers) {
      // console.log(num);
      // reversed_number.unshift(num)
}

console.log(reversed_number);

// with for loop 
let new_reverse = [];
for (let i = numbers.length - 1; i >= 0; i--) {
      let num = numbers[i];
      // console.log(num);
      new_reverse.push(num)
} 

console.log(new_reverse);



