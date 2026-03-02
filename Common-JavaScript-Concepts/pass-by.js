// primitive types are pass by value

let num_1 = 55;
let num_2 = 7;

function multiply (num_1, num_2) {
      num_1 = 34;
      console.log(num_1 * num_2);
}

console.log(num_1);

multiply(num_1, num_2);

// non-primitive object and array are pass by reference
