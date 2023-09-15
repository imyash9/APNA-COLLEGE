// let obj = {
//   a : undefined
// }


let jsonData = 
'{"fact": "The richest cat is Blackie who was left £15 million by his owner, Ben Rea.","length": 74}';

console.log(jsonData);

let validRes = JSON.parse(jsonData);
console.log(validRes);
console.log(validRes.fact);


let student = {
    name: "yash",
    id : 234,
}