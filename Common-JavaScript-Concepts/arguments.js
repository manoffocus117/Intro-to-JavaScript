function sum(a, b) {
      const result = a + b; // a and b called parameter
      console.log(result);
      
      // console.log(arguments); // only accessible inside a function
      // arguments.push(90); // arguments is a array like object
      // let args = [...arguments];
      // console.log(args);
}

sum(23, 22, 243, 55, 32, 12); // passed values called arguments

console.log(sum.length);
