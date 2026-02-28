const person = {
      name: "babul khan",
      age: 16,
      address: "kochubon",
      profession: "carpenter",
};

// console.log(person);

// let name = person.name;
// let age = person.age;
// let address = person.address;

// console.log(name);
// console.log(age);
// console.log(address);

// if right side is an object, left side destructuring will be object as well
let { name, age: boyosh, address } = person;

// console.log(name);
// console.log(age);
// console.log(address);

// console.log(boyosh);

// array destructuring

let friends = ["hamid", "famid", "rasel", "sakib"];

let [first, second, third, last] = friends;

// console.log(first);
// console.log(second);
// console.log(third);
// console.log(last);

function double_them(first, second) {
      return [first * 2, second * 2];
}
let [first_value, second_value] = double_them(23, 21);

console.log(first_value);
console.log(second_value);
