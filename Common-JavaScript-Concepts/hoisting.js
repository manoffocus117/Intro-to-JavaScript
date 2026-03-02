/**
 * Hoisting in JavaScript is a behavior where declarations of functions, 
      variables, and classes are conceptually moved to the top of their 
      scope during the compilation phase, before the code is executed
      */

print_10();
print_something();

for (let i = 0; i < 5; i++) {
      console.log("inside", i);
}
// console.log("outside", i);

function print_something() {
      console.log("inside function", 5);
}

// const print_10 = () => {
//       console.log("inside print 10", 10);
// };
// ReferenceError: Cannot access 'print_10' before initialization

var print_10 = () => {
      console.log("inside print 10", 10);
};
// TypeError: print_10 is not a function