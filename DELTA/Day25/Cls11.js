let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("Color changed")
    }, delay);
  });
}

changeColor("red", 1000)
.then(() => {
    console.log("red color was completed");
    return changeColor("blue", 1000);
})
.then(()=> {
    console.log("Blue color was completed");
    return changeColor("green", 1000);
})
.then(() => {
    console.log("green color was completed");
    return changeColor("yellow", 1000);
})
.then(()=> {
    console.log("yellow color was completed");
    return changeColor("aqua", 1000);
})
.then(() => {
    console.log("aqua color was completed");
    return changeColor("orange", 1000);
})
.then(()=> {
    console.log("orenge color was completed");
    return changeColor("pink", 1000);
})
.catch(() => {
    console.log("Color change failed");
})


// changeColor("red", 1000, () => {
//   changeColor("blue", 1000, () => {
//     changeColor("aqua", 1000, () => {
//       changeColor("yellow", 1000, () => {
//         changeColor("orange", 1000, () => {
//           changeColor("skyblue", 1000, () => {
//             changeColor("#05fa8a", 1000, () => {
//               changeColor("#b4fa80", 1000, () => {
//                 changeColor("#f5098e", 1000, () => {
//                   changeColor("#b30af5", 1000, () => {
//                     changeColor("#0a94f5", 1000, () => {
//                       changeColor("#04f1fb", 1000, () => {
//                         changeColor("#9efa05", 1000, () => {
//                           changeColor("green", 1000);
//                         });
//                       });
//                     });
//                   });
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });
