/**
 * array looping technique
 * 1. for loop
 * 2. while loop
 * 3. do while loop
 * 4. for of loop => use in array
 * 5. for in loop => use in object 
*/

// step - initial loop => array[index]

let friends = ["hablu", "bablu", "habul", "bablu"];
// console.log(friends);

// array looping with for of loop
for (const friend of friends) {
      // console.log(friend);
}

// array looping with for loop
for (let index = 0; index < friends.length; index++) {
      // console.log(index);
      // console.log(friends[index]);
}

// array looping with while loop
let numbers = [22, 65, 77, 90, 96, 69, 12, 34, 55, 76, 99, 100];

let initial = 0;
while (initial < numbers.length) {
      // console.log(numbers[initial]);
      initial++;
}

for (let i = 0; i < numbers.length; i++) {
      console.log(numbers[i]);
}



