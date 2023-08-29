// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();


  
// });



// let user = document.querySelector("#user");


// user.addEventListener("change", function () {
//   console.log("change event");
//   console.log("final value = ", this.value);
// });


// user.addEventListener("input", function () {
//   console.log("input event");
//   console.log("final value = ", this.value);
// });




// For class 10.5 
// For class 10.5 
// For class 10.5 

let inp = document.querySelector('#text')
let p = document.querySelector('p')


inp.addEventListener('input', function(){
    console.log(inp.value);
    p.innerText = inp.value;
})


