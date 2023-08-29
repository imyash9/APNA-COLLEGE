let links = document.querySelectorAll(".box a");

for (link of links){
    link.style.color = "purple";
}



let box = document.querySelector(".box");

let img = document.querySelector("img");
console.dir(img);
console.dir(img.classList);


console.dir(img.classList.contains("peter"));


let heading = document.querySelector('h1')
heading.classList.add("green");