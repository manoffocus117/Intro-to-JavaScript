// console.log("this is js variables");
/**
1. var : no reason to use anymore 
2. let : allow it to reassign the value
3. const : do not allow it to change value
 */

const money = 34;
// console.log(money);

// money = 50;
// console.log(money);

const rich = money + 25;
// console.log(rich);

let age = 21;
// console.log(age);

age = 23;
// console.log(age);

let count = 0;
count = count + 10;

// console.log(count);

// array
const numbers = [12, 1, 44, 5, 78, 9];
// numbers = [22, 3, 5, 66, 74]; it give error, because const dont give access to reassign

// console.log(numbers);

numbers.push(21);
// console.log(numbers);

numbers[1] = 50;
// console.log(numbers);
// but we can change or modify the value of array

// object
const person = {
      name: "habul khan",
      age: 29,
      address: "andor kella, bandor bon",
};

// console.log(person);

person["age"] = 30;
person.address = "basher kella";
// console.log(person);

// we can not reassign const object, but we can change the property and values

// loop
const sum = 0;
for (let i = 0; i < 10; i++) {
      console.log(i);
      const num = i;
      console.log(num);
      // sum = sum + i;
      sum = sum + num;
}
console.log(sum);
