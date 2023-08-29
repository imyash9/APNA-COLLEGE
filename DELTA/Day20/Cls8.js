// const square = (n) => {
//   return n ** 2;
// };

const square = (n) => n ** 2;

//  let greet = "Hello World";
// for (let i = 0; i <= 5; i++) {
//   let greet = setInterval((i) => {
//     console.log(`${i} Hello World`);
//   }, 2000);
// }

let greet = setInterval(() => {
  console.log(` Hello World`);
}, 2000);

setTimeout(() => {
  clearInterval(greet);
  console.log("clear interval ran");
}, 10000);
