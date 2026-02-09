
let numbers = [12, 23, 55, 67, 90, 99, 4, 11];

// for (let i = 0; i < numbers.length; i++) {
//       let number = numbers[i];
//       console.log(number);
// }

// for (let number of numbers) {
//       console.log(number);
// }

// how to find a product 

// step 1 declare a array of object
let products = [
      {
            id : 1,
            name : "i phone",
            price : 125000,
            color : "orange",
      },
      {
            id : 2,
            name : "nokia phone",
            price : 1000,
            color : "gray",
      },
      {
            id : 3,
            name : "oneplus phone",
            price : 25000,
            color : "blue",
      },
      {
            id : 4,
            name : "HTC phone",
            price : 25000,
            color : "black",
      },
      {
            id : 5,
            name : "samsung phone",
            price : 90000,
            color : "black",
      },
      {
            id : 6,
            name : "Lenovo laptop",
            price : 55000,
      },
      {
            id : 7,
            name : "memorable water bottle",
            price : 350,
            color : "transparent",
            capacity : 500,
            is_clean : true,
      },
      {
            id : 8,
            name : "dell laptop",
            price : 35000,
      },
      {
            id : 9,
            name : "hp laptop",
            price : 45000,
      },
      {
            id : 10,
            name : "asus laptop",
            price : 45000,
      },
]

// for (let product of products) {
//       console.log(product);
// }


// console.log(products);

// step 2. declare a function with two parameters or arguments
function matched_products (products, search) {
      // step 5 declare a empty array to store all searched products
      let matched = [];
      // step 4 loop through the products parameter to get single product
      for (let product of products) {
            // step 6 compare the products with name and convert the name to small case using toLowerCase() method
           if (product.name.toLowerCase().includes(search.toLowerCase())) {
                  // step 7 push all searched products to the empty array
                  matched.push(product)
           } 
      }
      // step 8 return the array to see the result
      return matched;
}

// step 3 initial a variable and call the function with two parameter 
let output = matched_products (products, "oneplus")

// step 9 console the output variable
console.log(output);