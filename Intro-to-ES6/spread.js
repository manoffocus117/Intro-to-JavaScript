let max = Math.max(23, 55, 63, 32, 90);
// console.log(max);

let numbers = [11, 23, 54, 66, 89, 69, 73];
// console.log(numbers);

// console.log(...numbers);

let array_max = Math.max(...numbers);
// console.log(array_max);

// use spread operator to copy
let nums = [1, 2, 3, 4, 5, 6];

let copy_nums = nums;

copy_nums.push (90);

// console.log(copy_nums);
// console.log(nums);

let more_nums = [...nums];
more_nums.push(23);

// console.log(nums);
// console.log(more_nums);


let more_and_more_nums = [...nums, 54]; // add extra element while copy
// console.log(more_and_more_nums);

let middle = [1,2, ...nums, 4,6,8]; // copy in middle
console.log(middle);


