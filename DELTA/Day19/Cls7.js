function sum(a, b){
    return a+b;
}

// let s = sum(5,sum(4, 6));
console.log(sum(5, sum(4, 6)));

function isAdult (age) {
    if(age >= 18){
        return "Adult";
    }
    else{
        return "Not Adult";
    }
}

// let adult = isAdult(13);
// console.log(adult);