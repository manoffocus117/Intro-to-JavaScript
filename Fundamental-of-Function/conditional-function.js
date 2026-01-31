function is_even (number) {
      if (number % 2 === 0) {
            return ("even number");
      } else {
            return ("odd number");
      }
}

let result = is_even(33);
// console.log(result);

function is_odd (number) {
      if (number % 2 === 1) {
            return true;
      }
      return false;
}
console.log(is_odd(32));
console.log(is_odd(35));


