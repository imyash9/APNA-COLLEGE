{
    // let a = 25; //Not defined
    // const a = 25; //Not defined
    var a = 25; //it's defined
}
console.log(a);


// Block scope is not apply on var . But var is not a good way to declare variable

for(let i=1; i<=5; i++){
     console.log(i);
}

// console.log(i);

let age = 25;
if(age >= 18){
   let str = "You can drive";
    // console.log("You can drive");
    console.log(str);
}
else{
    console.log("You can not drive");
}

