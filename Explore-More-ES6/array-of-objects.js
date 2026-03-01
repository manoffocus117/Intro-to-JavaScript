const products = [
      { id: 1, name: "hp laptop", price: 35000 },
      { id: 2, name: "samsung galaxy s26", price: 175000 },
      { id: 3, name: "google pixel watch", price: 25000 },
      { id: 4, name: "iPhone", price: 135000 },
      { id: 5, name: "dell laptop", price: 45000 },
];

// map
const names = products.map((product) => product.name);
// console.log(names);

const prices = products.map((product) => product.price);
// console.log(prices);

// forEach
// products.forEach((product) => console.log(product.id));

// filter
const expensive_product = products.filter((product) => product.price > 50000);
// console.log(expensive_product);

// const affordable_product = products.find((product) => product.price < 50000);
// console.log(affordable_product);

// find
const affordable_product = products.find((product) => product.price < 50000);
console.log(affordable_product);

// reduce
const total = products.reduce((accumulator, current) => accumulator + current.price, 0);
console.log(total);
