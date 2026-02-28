// default => if value id not provided, take this as a default value

// default with number
function add (num_1, num_2 = 0) {
      const result = num_1 + num_2;
      // console.log(num_1, num_2 , result);
      return result;
}

let result = add (12, 45);
// let result = add (12);
// let result = add ();
// console.log(result);

// default with string
function full_name (first = "", last = "") {
      const full = first + " " + last;
      return full;
}

// default with array
function friends (arr = []) {
      console.log(arr);
}

// default with object 
function person (obj = {}) {
      console.log(obj);
}
