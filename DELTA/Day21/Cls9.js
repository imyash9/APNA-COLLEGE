let data = {
  name: "Yash",
  email: "chaurasiyayash20a@gmail.com",
  password: "asdf",
};

let dataCopy = {
  ...data,
  id: 1234,
};

console.log(data);
console.log(dataCopy);

let arr = [1,3,4,5,6,7,"Hey", "Yash"];
let obj = {...arr}
console.log(arr);
console.log(obj);