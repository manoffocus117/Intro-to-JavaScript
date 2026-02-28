// double parameter
const subtraction = (a, b) => a - b;

let result = subtraction(993, 78);
// console.log(result);

// single parameter
const get_num = (numbers) => numbers[2];
let third = get_num([12, 1, 3, 69]);

// console.log(third);

const double_it = num => num * 2;

let double = double_it(23);
// console.log(double);

// no parameter 
const get_pi = () => Math.PI;
// console.log(get_pi());

// large parameter 
const do_math = (num) => {
      let double = num * 2;

      let add = double + num;

      let subtract = add - 10;

      let divide = subtract / 2;

      return divide;
}

let output = do_math(33);
console.log(output);
