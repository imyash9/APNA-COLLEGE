// let fruits = [["Mango", "Apple", "Litchi", "BAnana"],[ "Orange", "Grapes", "Guava", "Papaya"]];

// for(let i=0; i<fruits.length; i++){
//     console.log(i, fruits[i], fruits[i].length);

//     for(let j=0; j<fruits[i].length; j++){
//       console.log(`j=${j}, ${fruits[i][j]}`);
//     }
// }

let students = [["Yash", 90],["Rajan", 80],["Sanjeev", 85],["Indu", 95]];

for(let i=0; i<students.length; i++){
    console.log(`info of student #${i+1}`);

    for(let j=0; j<students[i].length; j++){
        console.log(students[i][j]);
    }
}