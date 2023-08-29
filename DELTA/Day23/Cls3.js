let btns = document.querySelectorAll('button');


for (btn of btns){
//    btn.addEventListener('click', sayHello)
//    btn.addEventListener('click', sayName)
   btn.addEventListener('dblclick', sayWelcome)

}

function sayHello (){
    alert('Hello!');
}

function sayName (){
    alert('Yash!');
}

function sayWelcome (){
    alert('Welcome Yash!');
}