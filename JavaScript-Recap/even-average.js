// average of the even numbers 

function even_average(numbers) {
      let even_numbers = [];
      for (let number of numbers) {
            if (number % 2 === 0) {
                  even_numbers.push(number);
            }
      }

      let sum = 0;      
      for (let number of even_numbers) {
            sum = sum + number;
      }
      console.log("sum of the even numbers is", sum);

      let length = even_numbers.length;
      let avg = sum / length;

      return avg;
}

let numbers = [1, 2, 44, 21, 24, 56, 77, 90];

let average = even_average(numbers);
console.log("average of the even numbers is", average);



