function one() {
  return 1;
}

function two() {
  return one() + one();
}

function three() {
  let ans = two() + one();
  console.log(ans);
}

// console.log(one());
// console.log(two());
// console.log(three());

three();
