// console.log("this is a new text");


let sentence = "i am a good-bad chele";

let reverse = "";

for (const letter of sentence) {
      // console.log(letter);
      reverse = letter + reverse;
}
// console.log(reverse);

for (let index = 0; index <= sentence.length; index++) {
      // console.log(index);

      // console.log(sentence[index]);

      let letter = sentence[index];
      
      reverse = letter + reverse;
}

// console.log(reverse);

// shortcut technique 
let reversed = sentence.split("").reverse().join("");

console.log(reversed);


