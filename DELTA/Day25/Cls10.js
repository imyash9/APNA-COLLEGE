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


saveDb("Apna college")
.then((result) => {
    console.log("result:", result);
    console.log("Data 1 saved");
    return saveDb("Hello");
})

.then((result) => {
    console.log("result:", result);
    console.log("Data 2 saved");
    return saveDb("yash");
})

.then((result) => {
    console.log("result:", result);
    console.log("Data 3 saved");
})

.catch((error) => {
    console.log("error:", error);
    console.log("Some promise rejected");
})