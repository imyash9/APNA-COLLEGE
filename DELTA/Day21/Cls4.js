let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let num1 = nums.reduce((res, el) => {
  console.log(res);
  return res + el;
});
console.log(num1);