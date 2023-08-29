function saveDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("Data saved Successfully");
        } else {
            reject("Data saving Rejected");
        }
    });
}

let request = saveDb("Yash"); //req = promise object
// console.log(request);
request.then(() => {
    console.log("Promise was resolved");
    console.log(request);
})
.catch( () => {
    console.log("Promise was rejected");
    console.log(request);
})