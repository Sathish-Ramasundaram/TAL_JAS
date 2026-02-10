Synchronous = runs line by line, waits
Asynchronous = starts work → continues → result comes later

1. update: 

setTimeout(function() {
    console.log("Print after 4 sec");
}, 2000);

setTimeout(() => {
    console.log("Arrow function print after 2 seconds");
},2000);

-------------------------
console.log("Start");

setTimeout(function () {
  console.log("Task finished after 5 seconds");
}, 5000);

console.log("End");

-------------------------

2. Test: 

setTimeout is async — it runs later.


3. Promise (clean async container)
A Promise = “I will give result later”

Promise = container
resolve = put value inside
.then = take value out


Real Life Analogy

You order food online:
Order placed → Promise created
Food cooking → pending
Food delivered → resolved ✅
Restaurant closed → rejected ❌

That’s exactly how Promise works.
Come from down to top

4. Code:



const status = false;

function getTask() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      if (status) {
        resolve("Task Completed");
      } else {
        reject("Task failed");
      }
    }, 2000);

  });
}

getTask()
  .then(msg => console.log("SUCCESS:", msg))
  .catch(err => console.log("ERROR:", err));

-------------------------------------

Promise.resolve("Done")
  .then(v => console.log(v));

-----------------------------------------------------------
const status = false;

function getTask() {
  setTimeout(() => {
    if (status) {
      console.log("status true");
    } else {
      console.log("status false");
    }
  }, 2000);
}


---------------------------------------------------

function getTask() {
    setTimeout(() => {
        console.log("Just getTask function with setTimeout 2 second delay");
    }, 2000)
}

getTask();

-------------------------------------------------

function getTask() {
console.log("Just function");
}

getTask();


-----------------------------------

Convert to async / await

Rules:
await can only be used inside an async function
try/catch replaces .then/.catch

const status = false;

function getTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve("Task Completed");
      } else {
        reject("Task failed");
      }
    }, 2000);
  });
}

async function runTask() {
  try {
    const msg = await getTask();
    console.log("SUCCESS:", msg);
  } catch (err) {
    console.log("ERROR:", err);
  }
}

runTask();


____________________________________________
----------------

then/catch = chain style
async/await = straight-line style


Simple Code: 

function wait() {
  return new Promise(resolve =>
    setTimeout(() => resolve("Server Ready"), 2000)
  );
}

async function run() {
  console.log("Preparing to go live...");

  const msg = await wait();

  console.log(msg);
  console.log("We are live now.");
}

run();


Note: 
Promise → produces value
await → receives value


