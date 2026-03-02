// javascript is a dynamic typed programming language

// primitive type value (A primitive type value doesn't save the memory reference)
const a = 45;
const b = "abdul halim";
const c = true;

// non primitive type value (A non-primitive type value save the reference)
const ages = [23, 45, 67, 22, 21, 15];
const student = {
      id: 1,
      name: "samsu",
      age: 12,
};

// console.log(typeof a, typeof b, typeof c, typeof ages, typeof student);

let x = 5;
let y = x;

// console.log(x , y);
y = 7;

// console.log(x, y);


let p = {name : "abdul kashem"}
let q = p;

q = {job : "farmer"}
console.log(p, q);

