// console.log("this is template string");

let first_name = "habul";
let last_name = "khan";

let greet = "welcome to the world of JavaScript";
// console.log(greet);

let full_name = first_name + " " + last_name + " " + greet;
// console.log(full_name);

let num_1 = 120;
let num_2 = 135;

let result = "sum of the numbers is " + (num_1 + num_2);
// console.log(result);

let email = "hello sir \n" + "this is a email";

// console.log(email);

let temp = `the result of numbers is ${num_1 + num_2}`;
// console.log(temp);

let multiline = `hello amar nam hablu khan,
ami thaki andor kella, bandor bon.
ami tomar sathe football korbo na. `;

// console.log(multiline);

let numbers = [12, 34, 4, 65, 90, 69];
console.log(numbers);

let person = {
      name : "john ochena",
      age : 16,
      address : "andor kella, bandorbon"
}

let new_string = `the first element of the array is ${numbers[0]} 
and age of the person is ${person.age}`;

console.log(new_string);
