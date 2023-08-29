let btn = document.querySelector("button");

// btn.addEventListener("click", function changeColor(event) {
//   console.log(event);
//   console.log("Button Clicked");
// });

btn.addEventListener("dblclick", function changeColor(event) {
  console.log(event);
  console.log("Button Clicked");
});

let input = document.querySelector("input");

input.addEventListener("keydown", function (event) {
  // console.log("Key = ", event.key);


//   console.log("code = ", event.code); //ArrowUP, ArrowDown , ArrowLeft , ArrowRight
//   if (event.code == "ArrowUp") {
//     console.log("Character Moves Forward");
//   } else if (event.code == "ArrowDown") {
//     console.log("Character Moves Backward");
//   } else if (event.code == "ArrowLeft") {
//     console.log("Character Moves Left");
//   } else if (event.code == "ArrowRight") {
//     console.log("Character Moves Right");
//   }

  console.log("Key = ", event.key); //ArrowUP(W), ArrowDown(S), ArrowLeft(A) , ArrowRight(D)
  if (event.key == "w") {
    console.log("Character Moves Forward");
  } else if (event.key == "s") {
    console.log("Character Moves Backward");
  } else if (event.key == "a") {
    console.log("Character Moves Left");
  } else if (event.key == "d") {
    console.log("Character Moves Right");
  }





  //   console.log("Key was pressed");
});

// input.addEventListener("keyup", function () {
//   console.log("Key was released");
// });
