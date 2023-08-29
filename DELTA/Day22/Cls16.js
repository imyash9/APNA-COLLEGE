let body = document.querySelector('body');
let container = document.createElement('div');

body.insertAdjacentElement('beforebegin', container)
container.style.height = "700px";
container.style.width = "700px";
container.style.backgroundColor = 'aqua';

let redp = document.createElement('p');
container.prepend(redp);
redp.textContent = 'Hello! i am red p';
redp.style.color = 'red';
redp.style.fontSize = '2rem';

let blueh3 = document.createElement('h3');
container.append(blueh3);
blueh3.textContent = 'Hello! i am blue h3';
blueh3.style.color = 'blue';
blueh3.style.fontSize = '2rem';

let container2 = document.createElement('div');
container.append(container2);
container2.style.height = "300px";
container2.style.width = "300px";
container2.style.backgroundColor = 'pink';
container2.style.border = "2px solid black";

let divh1 = document.createElement('h1')
container2.append(divh1);
divh1.textContent = "i'm in a div";
divh1.style.color = 'red';
divh1.style.fontSize = '2rem';


let redp1 = document.createElement('p');
container2.prepend(redp1);
redp1.textContent = 'Hello! i am red p 2 ';
redp1.style.color = 'red';
redp1.style.fontSize = '2rem';