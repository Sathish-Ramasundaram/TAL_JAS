const myP = new Promise((resolve, reject) => {
  const status = false;

  if (status) {
    resolve("Task Completed");
  } else {
    reject("Task Failed");
  }
});

myP.then(result => console.log("Success:", result))
  .catch(error => console.log("Error:", error));
