console.log("welcome to the javascript variable");

/**
 * variable in javascript
 * what is variable?
 * => variable is a container to store data value
 * => we can use variable to store different types of data
 * 
 * types of variable in javascript 
 * => var (we can not use this anymore)
 * => let (value of let variable can be changed)
 * => const (value of const variable can not be changed)
 * 
 * syntax to declare a variable
 * => let | const variable_name = value;
 * 
 * rules to declare a variable 
 * => variable name can not be a reserved keyword
 * => variable name can not contain space
 * => variable name can not start with a number
 * => variable name can only contain letters, numbers, underscores, or dollar signs
 * => variable name are case sensitive (case sensitive means name and Name are two different variables)
 * 
*/

// declaring a let variable 
let first_variable = "hello world";
console.log(first_variable)

// changing the value od let variable 
first_variable = "hello to javascript";
console.log(first_variable)


// declaring a const variable 
const second_variable = 43;

console.log(second_variable);
// changing the value of const variable will give error
