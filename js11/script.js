

const status = true;

function wait(stepName, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve(stepName + " done");
      } else {
        reject(stepName + " failed");
      }
    }, delay);
  });
}

// ✅ async → always returns a Promise

async function goLive() {
  console.log("Preparing to go live...");

  try {
    // ✅ await only valid inside async
    const step1 = await wait("Server check", 1000);
    console.log(step1);

    // ✅ multiple awaits → sequential execution
    const step2 = await wait("Database connect", 2000);
    console.log(step2);

    console.log("🚀 We are live now.");

    return "Launch success"; // auto wrapped in Promise
  } catch (err) {
    console.log("ERROR:", err);
    throw err; // still keeps promise rejected
  }
}

// proving async returns Promise
goLive()
  .then(msg => console.log("FINAL:", msg))
  .catch(err => console.log("FINAL ERROR:", err));
