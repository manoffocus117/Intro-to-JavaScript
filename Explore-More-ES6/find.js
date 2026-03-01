let height = [60, 63, 66, 70, 65, 71, 72];

// let selected = height.find((player) => player > 60);
let selected = height.find((player) => player > 75);
console.log(selected);

/**
 * 1. map : return a new array (every element will be operated and the result will 
 *    be stored in a new array)
 * 2. filter : return a new array (every element will be checked and the result will 
 *    be stored in a new array if the condition is true)
 * 3. find : return a single value (the first element that matches the condition will 
 *    be returned)
 * 4. forEach : return nothing (it will iterate through the array and perform the 
 *    operation that you passed in the callback function)
 * 5. reduce : return a single value (it will iterate through the array and perform 
 *    the operation that you passed in the callback function and return a single value)
 * 
 */
