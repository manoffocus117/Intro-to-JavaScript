// 12 inch = 1 feet

function inch_to_feet (inch) {
      // console.log(number);
      let feet = inch / 12;
      return feet;
}

// inch_to_feet(23);

let output = inch_to_feet(65);
// console.log("feet is", output.toFixed(2)); // toFixed() convert number into a string


// extra method
function feet_and_inch (inch) {
      let feet_fraction = inch / 12;
      let feet_number = parseInt(feet_fraction);

      let inch_remaining = inch % 12;
      // console.log(feet_number, inch_remaining);
      let result = feet_number + " ft " + inch_remaining + " inch";
      return result;
}

// feet_to_inch_2(75);

let result = feet_and_inch(75);
console.log(result);


