// console.log(1);
// console.log(2);
// console.log(3);

// setTimeout(() => {
//       console.log(4);
// }, 4000);

// console.log(5);
// console.log(6);
// setTimeout(() => {
//       console.log(7);
// }, 4000);

// setInterval(() => {
//       console.log(10);
// }, 5000);

let num = 0;

const interval_id = setInterval(() => {
      num++;
      console.log(num);

      if (num >= 10) {
            clearInterval(interval_id);
      }
}, 1000);
