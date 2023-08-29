// function saveDb(data) {
//     return new Promise((Success, failure) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             Success("Data saved Successfully");
//         } else {
//             failure("Data saving Rejected");
//         }
//     });
// }



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

