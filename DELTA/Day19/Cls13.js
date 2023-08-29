let greet = "Hello";  //Global Scope

function changeGreet(){
    let greet = "Namaste";
    console.log(greet);   //Function Scope
    function innerGreet(){
        console.log(greet);  //Lexica Scope
    }
}

console.log(greet);
changeGreet();

