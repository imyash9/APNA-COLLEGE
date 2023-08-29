let sum = 456; //Global scope

function calSum (a, b){
    let sum = a+b; //function scope
    console.log(sum);
}

calSum(3, 7);


// specificity   Function scope > Global scope
// We can use global scope variable if function scope variable is not available  But we can't use function scope variable in global scope