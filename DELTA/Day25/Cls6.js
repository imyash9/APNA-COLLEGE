function saveDb(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 4) {
    success();
  } else {
    failure();
  }
}

// success();
saveDb(
  "Apna College",
  () => {
    console.log("Success1: data1 was saved");
    saveDb(
      "Hello world",
      () => {
        console.log("Success2: Data2 saved");
        saveDb(
          "Yash",
          () => {
            console.log("Success3 : data 3 saved");
          },
          () => {
            console.log("Failure3: Weak connection");
          }
        );
      },
      () => {
        console.log("Failure2: Weak Connection");
      }
    );
  },
  () => {
    console.log("Failure1: Your Connection is week data was not saved");
  }
);
