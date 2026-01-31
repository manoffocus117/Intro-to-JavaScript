// create a function that will return only the even numbers 
// return the sum of even numbers

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function even_numbers_only (numbers) {
      let even_number = [];
      for ( let number of numbers) {
            // console.log(number);
            if (number % 2 === 0) {
                  // console.log(number);
                  even_number.push(number);
            }
      }
      return even_number; // return always return a single number, string, boolean, etc
}
// even_numbers_only(numbers);

// let result = even_numbers_only(numbers);
// console.log("even numbers are", result);


function sum_of_even_numbers ( number ) {
      // console.log(number);
      let sum = 0;
      for (let number of numbers) {
            // console.log(number);
            if (number % 2 === 0) {
                  sum = sum + number;
            }
      }
      return sum;
}
// console.log(sum_of_even_numbers(numbers));

let result = sum_of_even_numbers(numbers);
console.log("sum of even numbers is", result);



