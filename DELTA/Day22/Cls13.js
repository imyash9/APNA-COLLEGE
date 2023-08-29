let h4 = document.querySelector('h4');


let box = document.querySelector('.box');

let img = document.querySelector('img');

let newp = document.createElement('p');

let body = document.querySelector('body');

// body.appendChild(newp);

newp.innerText = 'lote lore lorem lorem lirem lorem lorem lorem loreem lorem lorem';
'lote lore lorem lorem lirem lorem lorem lorem loreem lorem lorem';

// Append Child 

box.appendChild(newp);

let btn = document.createElement('button');

btn.innerText = "Click Me";

box.appendChild(btn);


btn.style.backgroundColor = 'red';
btn.style.color = 'aqua';

console.dir(btn);

// Append Elements

newp.append('lorem ipsum dolar sit emmet and many more.')

newp.append(btn);


// Prepend Elements

box.prepend(newp);


// InsertAdjacent 

let p = document.querySelector('p'); 

// p.insertAdjacentElement('beforebegin', btn);
// p.insertAdjacentElement('afterbegin', btn);

// p.insertAdjacentElement('beforeend', btn);
p.insertAdjacentElement('afterend', btn);