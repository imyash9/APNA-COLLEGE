// let btn = document.querySelector("button");

// console.dir(btn);

// btn.onclick = function () {
//   alert("Hello Everyone");
//   console.log("Button was Clicked");
// };



let btns = document.querySelectorAll('button');


for (btn of btns){
    btn.onclick = sayHello;
    btn.onmouseenter = function () {
        console.log('You entered a button');
    }
    console.dir(btn)

}

function sayHello(){
    alert("Hello!");
}

btn.onclick = sayHello;
