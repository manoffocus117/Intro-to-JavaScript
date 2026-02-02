/**
 * array has some duplicate elements
 * 
 * 
 * 
 */


let numbers = [1, 1, 33, 4, 55, 2, 4, 33];

function remove_duplicate (arr) {
      let no_duplicate = [];
      for (let item of arr) {
            if (no_duplicate.includes(item) === false){
                  no_duplicate.push(item);
            }
      }
      return no_duplicate;
}

let output = remove_duplicate(numbers);
// console.log(output);


let biryanikhor = ["hablu", "bablu", "abul", "hablu", "bablu", "kabul"];

function remove_duplicate_polapans (array) {
      let no_duplicate_polapans = [];
      for (let item of array) {
            if (no_duplicate_polapans.includes(item) === false) {
                  no_duplicate_polapans.push(item);
            }
      }
      return no_duplicate_polapans;
}

let final_polapans = remove_duplicate_polapans(biryanikhor);
console.log(final_polapans);




