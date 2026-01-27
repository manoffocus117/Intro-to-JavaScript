// different ways to use loop in javascript

// even number 
for (let index = 0; index <= 20; index++) {
      if (index % 2 === 0) {
            console.log(index);
      }
}

for (let index = 0; index <= 20; index++) {
      if (index % 2 !== 1) {
            console.log(index);
      }
}

for (let index = 0; index <= 20; index+=2) {
      console.log(index);
}

// odd number
for (let index = 0; index <= 20; index++) {
      if (index % 2 === 1) {
            console.log(index);
      }
}

for (let index = 0; index <= 20; index++) {
      if (index % 2 !== 0) {
            console.log(index);
      }
}

for (let index = 1; index <= 20; index+=2) {
      console.log(index);
}


// give me the numbers between 1 to 20 divisible by 5
for (let i = 0; i <= 20; i+=5) {
      console.log(i);
}

for (let i = 1; i <= 20; i++) {
      if (i % 5 === 0) {
            console.log(i);
      }
}

for (let i = 0; i <= 20; i+=3) {
      console.log(i);
}

for (let i = 1; i <= 20; i++) {
      if (i % 3 === 0) {
            console.log(i);
      }
}

for (let i = 1; i <= 30; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
            console.log(i);
      }
}

for (let i = 1; i <= 30; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
            console.log(i);
      }
}

// give me the sum of numbers that are divisible by 3
let sum = 0;
for (let i = 0; i <= 20; i++) {
      if (i % 3 === 0) {
            sum = sum + i;
            console.log("number is", i);
            console.log("sum is", sum);
      }
}
console.log(sum);


