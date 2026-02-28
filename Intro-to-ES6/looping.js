let numbers = [2, 1, 4, 6, 8, 5, 9];

for (let i = 0; i < numbers.length; i++) {
      // console.log(numbers[i]);
}

for (const num of numbers) {
      // console.log(num);
}

let string = "halum";

for (const letter of string) {
      // console.log(letter);
}

const glass = {
      color: "golden",
      capacity: 500,
      price: 243,
};

for (const key in glass) {
      let values = glass[key];
      // console.log(key, values);
}

// optional
let keys = Object.keys(glass);

for (const key of keys) {
      let values = glass[key];
      console.log(key, values);
}
