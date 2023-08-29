let n = prompt("Enter a number you want to print multiplication table:");
n = parseInt(n);

for(let i=n; i<=n*10; i=i+n){
    // console.log(`This is your multiplication table for number ${n}`);
    console.log(i);
}



// Nested for loop
for(let i=1; i<=5; i++){
    console.log(`This is outer loop ${i}`);
    for(let j=1; j<=5; j++){
        console.log(j);
    }
}