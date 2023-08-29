const student = {
    name : "karan",
    class: 9,
    age: 14,
    subjects: ["english", "hindi", "maths", "Computer", "Social Science", "Science"],
    username: "karan123",
    password: 1234,
   
};

const { username: user , password: pass , city= "Motihari" , ...others} = student;

console.log(user);
console.log(pass);
console.log(city);
console.log(others);