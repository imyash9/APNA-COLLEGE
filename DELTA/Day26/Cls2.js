// function getNum() {
//   // console.log(5);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//     //   return num;
//     console.log(num);
//     resolve();
//     }, 1000);
//   });
// }

// async function demo() {
//   await getNum();
//   await getNum();
//   await getNum();
// }

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if (num > 4) {
        reject("Promise Rejected");
      }
      h1.style.color = color;
      resolve("Color changed");
    }, delay);
  });
}

async function demo() {
  try {
    await changeColor("red", 1000);
    await changeColor("green", 1000);
    await changeColor("blue", 1000);
    await changeColor("aqua", 1000);
    await changeColor("orange", 1000);
  } catch (err) {
    console.log("error Caught");
    console.log(err);
  }

  let a = 5;
  console.log(a);
  console.log("new number", a + 3);
}
