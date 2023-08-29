let num = [2, 5, 6, 7, 8];

let num1 = num.map(function (el) {
  return el * 2;
});

let students = [
  {
    name: "Yash",
    marks: 95,
  },
  {
    name: "Rajan",
    marks: 85,
  },
  {
    name: "Sanjeev",
    marks: 85,
  },
  {
    name: "Indu",
    marks: 95,
  },
];

let gpa = students.map((el) => {
  return el.marks / 10;
});

let nums = [1, 4, 3, 6, 5, 2, 8, 7, 9, 45, 23, 12, 78];

let even = nums.filter((num) => {
  return num % 2 == 0;
});

let odd = nums.filter((num) => {
  return num % 2 != 0;
});

let less5 = nums.filter((num) => {
  return num <= 5;
});
