function multipleGreet(func, count) {
  //Higher Order function
  for (let i = 1; i <= count; i++) {
    func();
  }
}

let greet = function () {
  console.log("Hello");
};

multipleGreet(function () {console.log("Namaste"); }, 10);
multipleGreet(greet, 20);


