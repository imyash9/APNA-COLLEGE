let names = ["tony", "Yash", "Bruce", "Peter", "Steve", "Rahul", "prakash", "Mohan"];

// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];

let [winner, runnerup, secondRunnerup, ...others] = names;

console.log(winner);
console.log(runnerup);
console.log(secondRunnerup);
console.log(others);

