let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   setTimeout(() => {
//     h1.style.color = color;
//   }, delay);
// }

function changeColor(color, delay, nextColor) {
  setTimeout(() => {
    h1.style.color = color;
    nextColor();
  }, delay);
}

changeColor("red", 1000, () => {
  changeColor("blue", 1000, () => {
    changeColor("aqua", 1000, () => {
      changeColor("yellow", 1000, () => {
        changeColor("orange", 1000, () => {
          changeColor("skyblue", 1000, () => {
            changeColor("#05fa8a", 1000, () => {
              changeColor("#b4fa80", 1000, () => {
                changeColor("#f5098e", 1000, () => {
                  changeColor("#b30af5", 1000, () => {
                    changeColor("#0a94f5", 1000, () => {
                      changeColor("#04f1fb", 1000, () => {
                        changeColor("#9efa05", 1000, () => {
                          changeColor("green", 1000);
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});

// These Callback nestings are called  CALLBACK HELL  (CallBAck Nesting = CallBack Hell) 


// changeColor("red", 1000);
// changeColor("orange", 2000);
// changeColor("green", 3000);
// changeColor("blue", 4000);
// changeColor("yellow", 5000);

// setTimeout(() => {
//   h1.style.color = "aqua";
// }, 2000);

// setTimeout(() => {
//   h1.style.backgroundColor = "orange";
// }, 3000);

// setTimeout(() => {
//   h1.style.color = "red";
// }, 4000);
