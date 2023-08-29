let arr = [1, 2, 3, 4, 5, 6];

function print(el) {
  console.log(el);
}

arr.forEach(print);



// arr.forEach(function (el) {
//   console.log(el);
// });



// arr.forEach((el) => {
//   console.log(el);
// });



let arr1 = [{
    name: "Yash",
    marks: 95
}, {
    name: "Rajan",
    marks: 85
}, {
    name: "Sanjeev",
    marks: 85
}, {
    name: "Indu",
    marks: 95
}];

arr1.forEach((student) => {
      console.log(student.marks);
}
)