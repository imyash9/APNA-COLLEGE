const calculator = {
    num: 55,
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }

};

console.log(calculator);
console.log(calculator.add(5, 8));
console.log(calculator.sub(6, 8));
console.log(calculator.mul(9, 6));
