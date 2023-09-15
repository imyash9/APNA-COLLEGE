async function greet() {
    // throw "some ransom error";
    // throw "weak connection";
    throw "404 Page not found";
    return "Hello"; //Returns a promise
}

greet()
.then((result) => {
    console.log("Promise was successfull");
    console.log("Result was ", result);
})

.catch ((err) => {
    console.log("Promise was rejecteed with error");
})


let demo = async () => {
    return 5;
}