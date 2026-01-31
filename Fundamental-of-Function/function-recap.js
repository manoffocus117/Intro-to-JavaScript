/** how to declare a function 
 * step 1. use function keyword
 * step 2. give it a name with round bracket like: my_number()
 * step 3. you can give a single or multiple parameter or argument inside the round bracket like: my_number(num)
 *    the params or arguments should be separated with comma ( , )
 * step 4. you can console it or do some task with the params or argument and return it
 *    like: let result = num * 2;
 *          return result;
 * step 5. initialize a variable and call the function with params or argument like: my_number(334)
 *    you can use any variable as a parameter or argument
 *    (note: if you are using return keyword, without a variable you can not see or get the result)
 * step 6. console the variable
 */


function big_number () {
      console.log("this is a function");
}

big_number();


function double_it (number) {
      let result = number * 2;
      console.log(result);
}

double_it(336);


function remain (num_1, num_2) {
      let remain = num_1 - num_2;

      return remain;
}

// remain(33, 22);

let result = remain(457, 223);
console.log(result);

function add (num_1, num_2) {
      let total = num_1 + num_2;
      return total;
}

let num_1 = 220;
let num_2 = 443;

let output = add(num_1, num_2);
console.log(output);


function add_2 (price_1, price_2) {
      // return price_1 + price_2;
      return (price_1 + price_2);
}

let price_1 = 447;
let price_2 = 66;

let output_2 = add_2(price_1, price_2);
console.log(output_2);

console.log(add_2(price_1, price_2));



