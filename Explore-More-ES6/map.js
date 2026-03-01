const numbers = [1, 2, 4, 5, 6, 7, 8, 9];
// console.log(numbers);

let doubled = [];

for (const num of numbers) {
      // console.log(num);
      let double = num * 2;
      doubled.push(double);
}

// console.log(doubled);

// map => loop through each element of the array and do the operation that you passed in the callback function and hold the result from each operation in an array and finally return the array
function double_it(num) {
      return num * 2;
}

let result = numbers.map(double_it);

let doub = num => num * 2;
// let output = numbers.map(doub);
// console.log(output);

let output = numbers.map((num) => num * 2);
console.log(output);
