// average of the odd numbers 

function odd_average(numbers) {
      let odd_numbers = [];
      for (let number of numbers) {
            if (number % 2 === 1) {
                  odd_numbers.push(number);
            }
      }

      let sum = 0;
      for (let number of odd_numbers) {
            sum = number + sum;
      }

      console.log("sum of the odd numbers is", sum);

      let length = odd_numbers.length;

      let avg = sum / length;
      return avg;
}

let numbers = [1, 2, 3, 4, 11, 22, 55, 12, 69, 71];

// odd_average(numbers);

let average = odd_average(numbers);
console.log("average of the odd numbers is", average);


