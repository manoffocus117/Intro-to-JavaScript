const glass = {
      color: "golden",
      capacity: 500,
      price: 243,
};

console.log(glass);

// Object.keys : return all the properties name of the object
let keys = Object.keys(glass);
// console.log(keys);

// Object.values : return all the properties value of the object 
let values = Object.values(glass);
// console.log(values);

// Object.entries : return property and values with pair
let entries = Object.entries(glass);
// console.log(entries);

// output : array of array or two dimensional
// [
//       ["color", "golden"],
//       ["capacity", 500],
//       ["price", 243],
// ];


// delete 
// delete glass.price;
// console.log(glass);

// const {price, ...rest} = glass;
// console.log(rest);

// Object.freeze
// Object.freeze(glass);

// Object.seal
Object.seal(glass)
glass.made_in = "china";
glass.price = 500;
delete glass.price;

console.log(glass);

// Object.seal

