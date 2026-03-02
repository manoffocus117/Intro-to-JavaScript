// in simple word, callback function is a function that is passed as a parameter 

function greeting(function_handler, name) {
      function_handler(name);
}

// let name = "halim mama";
// let number = 69;
// let numbers = [1, 2, 4, 6, 8, 9];
// let product = { name: "kidney phone", price: 120000 };

function good_morning(name) {
      console.log("good morning", name);
}

function good_evening(name) {
      console.log("good evening", name);
}

function good_night (name) {
      console.log("good night", name);
}

greeting(good_morning, "kuddus ali");

greeting(good_evening, "kodom ali");

greeting(good_night, "mokles uddin")