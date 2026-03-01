/**
1. var, let and const 
2. default parameter 
3. template string
4. arrow function 
5. destructuring and spread operator 
6. Object.keys 
7. Object.values
8. Object.entries
9. for of loop : for array and string
10. for in loop : for object
*/

let number = 54;

let person = {
      name: "ononto jolil",
      age: 36,
};

let string = `person name is ${person.name} and age is ${person.age}, money is ${number}`;

const square = (x) => x * x;

const add = (num_1, num_2) => {
      return num_1 + num_2;
};

let numbers = [1, 2, 3, 5, 6, 7];

let [first, second, ...rest] = numbers;

let keys = Object.keys(person);

let values = Object.values;

console.log(keys, values);

let entries = Object.entries(person);
console.log(entries);

