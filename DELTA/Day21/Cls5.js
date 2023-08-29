let num = [1, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 12, 15, 78];

// Method to find max in array

// let max = 0;

// for(let i=0; i < num.length; i++){
//     if(max < num[i]){
//         max = num[i];
//     }
// }

// console.log(max);

let max = num.reduce((max, el) => {
  if (max < el) {
    return el;
  } else {
    return max;
  }
});

console.log(max);

