/**
 * data types in javascript 
 * what is data type? 
 * => data type is an classification of data which tells the interpreter or compiler how the programmer intends to use the data. (interpreter or compiler means the javascript engine which runs the javascript code)
 * 
 * => data type is an important concept because it helps to determine what kind of operations can be performed on the data.
 * 
 * types of data types in javascript 
 * => primitive data types (primitive data types mean the data which is not an object and has no methods)
 *    => string ( sequence of words )
 *    => number ( integer or floating number )
 *    => boolean ( true or false )
 *    => null
 *    => undefined
 *    => symbol
 *    => bigint
 * 
 * => non-primitive data types (non-primitive data types mean the data which is an object and has methods)
 *    => object
 *    => array
 *    => function 
 *    => date
 *    => regex
 * 
*/

// string data type 
let string_variable = "hello world";
console.log(string_variable);

let person_name = "sodor uddin";
console.log(person_name);


// number data type 
let number_variable = 42;
console.log(number_variable);

let money = 434;
console.log(money)


// boolean data type 
let boolean_variable = true;
console.log(boolean_variable);

let pocket_khali = false;
console.log(pocket_khali);


// null data type 
let null_variable = null;
console.log(null_variable);

// null variable means the variable which has no value. value can be assigned later.


// undefined data type 
let undefined_variable;
console.log(undefined_variable);

// undefined variable means the variable which has not been assigned any value yet.

undefined_variable = "now it has a value";
console.log(undefined_variable);


// symbol data type 
let symbol_variable = Symbol ("unique_identifier");
console.log(symbol_variable);


// bigint data type 
let bigint_variable = 90032456768993n;
console.log(bigint_variable)

// type of operator (type of operator is used to check the type of a value)
console.log(typeof money);
console.log(typeof person_name);
console.log(typeof pocket_khali);


