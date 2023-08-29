let p = document.querySelector("p");

p.addEventListener("click", function () {
  console.log("Para was Clicked");
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function () {
  console.log("Mouse is entered in the Box");
});
