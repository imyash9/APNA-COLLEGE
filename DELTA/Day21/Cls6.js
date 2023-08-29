// Check if all numbers in our array are multiples of 10 or not

let num = [10, 40, 60, 30, 50, 60];
let res = num.every((el) => el % 10 == 0);
console.log(res);

let num1 = [10, 40, 60, 30, 56, 60];
let res1 = num1.every((el) => el % 10 == 0);
console.log(res1);

// Create a functin to find the min. number in an array

let num2 = [5, 6, 10, 40, 60, 30, 50, 60];
let min = num2.reduce((min, el) => {
  if (min < el) {
    return min;
  } else {
    return el;
  }
});

// let min = Math.min(...num2);

console.log(min);
