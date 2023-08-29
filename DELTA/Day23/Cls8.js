// let form = document.querySelector('form')

// form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     console.log('Form submitted')
//     alert('Form submitted')
// })

// Class 9
// Class 9
// Class 9

// let form = document.querySelector('form')

// form.addEventListener('submit', function (event) {
//     event.preventDefault();

//     let input = document.querySelector('input');
//     console.dir(input);
//     console.log(input.value);

// })




// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   let user = document.querySelector("#user");
//   let pass = document.querySelector("#pass");

//   console.log(user.value);
//   console.log(pass.value);



//   alert(`Hi! ${user.value} Your Password set to ${pass.value}, You are Registered. \n WELCOME!`)
// });



// Onother way to print this 
// Onother way to print this 
// Onother way to print this 

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.dir(form);

  let user = this.elements[0];
  let pass = this.elements[1];

  console.log(user.value);
  console.log(pass.value);



  alert(`Hi! ${user.value} Your Password set to ${pass.value}, You are Registered. \n WELCOME!`)
});