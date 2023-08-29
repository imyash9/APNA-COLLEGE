let num = [1,3,5,7,9,6,4,2,8];
let min = Math.min(...num);
console.log(min);

console.log(...num);
console.log(..."YashChaurasiya");

let arr = [1,3,4,2,5,7,6,8,9];
let newArr = [...arr];
console.log(arr);
console.log(newArr);


let chars = [..."Hello! Yash"];
console.log(chars);


let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];
let all = [...odd, ...even];
console.log(odd);
console.log(even);
console.log(all);