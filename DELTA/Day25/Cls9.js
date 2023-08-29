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

// let request = saveDb("Yash"); //req = promise object
// // console.log(request);
// request.then(() => {
//     console.log("Promise was resolved, data 1 saved");
//     saveDb("hello") .then( () => {
//         console.log("Data 2 saved");
//     })
// })
// .catch( () => {
//     console.log("Promise was rejected");
//     console.log(request);
// })

saveDb("Yash") //req = promise object
.then(() => {
    console.log("data 1 saved");
    return saveDb("hello");
})
.then (() => {
    console.log("data 2 saved");
    return saveDb("Yash");
})
.then (() => {
    console.log("data 3 saved");
    // return saveDb("Yash");
})
.catch( () => {
    console.log("Promise was rejected");
})