let button = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

button.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete");

  item.append(delBtn);
  ul.appendChild(item);
  console.log(inp.value);
  inp.value = "";
});

ul.addEventListener('click', function(event){
    if(event.target.nodeName == "BUTTON"){
        let listitem = event.target.parentElement;
        // console.log(listitem);
        listitem.remove();
        console.log("Deleted")
    }
    else{
        console.log("dond't Delete");
    };

})

