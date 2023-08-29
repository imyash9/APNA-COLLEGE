let num = [2, 4, 6, 5, 3, 1, 7, 8, 9];

let num1 = num.every((el) => el % 2 == 0);

let num2 = num.every((el) => el % 2 != 0);

let num3 = num.filter((el) => el % 2 == 0);

let num4 = num3.every((el) => el % 2 == 0);

// let num5 = num.every((num) => {
//   let num6 = num.filter(function even(el) {
//     el % 2 == 0;
//   })
//   num % 2 == 0;
// });

let test = [2, 4, 6, 8, 9, 1, 3, 5, 7];

let test2 = test.some((el) => el%2 == 0);