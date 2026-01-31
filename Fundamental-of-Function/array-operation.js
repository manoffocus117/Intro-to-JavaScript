// write a function to give me the sum of all numbers in an array
/**
 * step 1. declare a function 
 * step 2. check the function
 * sep 3. set a parameter(s) or argument(s)
 * step 4. check the parameter(s), check whether parameter(s) is passed in a proper format
 * step 5. do the function task (step-by-step)
 * 
 */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sum_of_numbers (arr) {
      // console.log(arr);
      let sum = 0;
      for (let num of arr) {
            // console.log(num);
            sum = sum + num;
      }
      // console.log(sum);
      return sum;
}

// sum_of_numbers(numbers);
let result = sum_of_numbers(numbers);
console.log("sum of numbers is", result);












