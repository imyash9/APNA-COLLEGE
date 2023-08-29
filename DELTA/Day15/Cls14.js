let str = "a good string";
if ( (str[0] == "a") && (str.length > 3)) {
    console.log("This is a good string");
}

else {
    console.log("This is not a good string");
}






let num = 12;
if((num%3 === 0) && ( (num+1 == 15) || (num-1 == 11) ) ) {
    console.log("safe");
}
else {
    console.log("unsafe");
}