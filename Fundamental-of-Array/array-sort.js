// array sorting 
let persons = ["shamsu", "hablu", "bablu", "keblu", "halum"];

// console.log(persons);

let sorted_persons = persons.sort();
// console.log(sorted_persons);

// sorting 
// array.sort() change the original array 
// ascending => smaller to larger (1, 2, 3, 4, 5)
// descending => larger to smaller (5, 4, 3, 2, 1)

let numbers = [5, 6, 8, 9, 1, 3, 4, 7, 12, 35, 99];

// let numbers_ascending = numbers.sort(); // not working properly (see ascii table)
let numbers_ascending = [...numbers].sort(function (a, b) { return a - b }); // ( ... means spread operator. it is used to copy the original array)
// console.log(numbers_ascending);

let numbers_descending = [...numbers].sort(function (a, b) { return b - a }); 
console.log(numbers_descending);


