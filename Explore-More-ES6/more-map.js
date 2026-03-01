let numbers = [1, 2, 3, 4, 5];

let double = numbers.map((num) => num * 2);
// console.log(double);

let add_five = numbers.map((num) => num + 5);
// console.log(add_five);

let subtract = numbers.map((num) => num - 1);
// console.log(subtract);

let square = numbers.map((num) => num * num);
// console.log(square);

let friends = ["john", "shawn", "hobby", "mike"];

let length = friends.map((friend) => friend.length);
// console.log(length);

let first_char = friends.map((friend) => friend[0]);
console.log(first_char);
