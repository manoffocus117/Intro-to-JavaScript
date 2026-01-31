/**
 * for a given string tell me whether it has even number of characters or not
 */

function even_sized(string) {
      let size = string.length; 
      // console.log(size);
      if (size % 2 === 0) {
            console.log("length is even");
      } else {
            console.log("length is odd");
      }
}

// even_sized("dhaka");
// even_sized("faka");

function double_or_triple (number, double) {
      if (double === true) {
            let result = number * 3;
            return result;
      } else {
            let result = number * 2;
            return result;
      }
}

// console.log(double_or_triple(20, true));
// console.log(double_or_triple(10, false));


function number_of_elements (arr) {
      // console.log(arr);
      let length = arr.length;
      return length;
}

let numbers = [1,2,3,4,5,6];

// console.log(number_of_elements(numbers));


function get_age (person) {
      let age = person.age;
      return age;
}

let person = {
      name : "hablu khan",
      age : 32,
      address : "andorkella, bandorbon"
}


console.log(get_age(person));
