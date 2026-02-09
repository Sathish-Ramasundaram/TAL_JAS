Synchronous = runs line by line, waits
Asynchronous = starts work → continues → result comes later

1. update: 

setTimeout(function() {
    console.log("Print after 4 sec");
}, 4000);


console.log("Start");

setTimeout(function () {
  console.log("Task finished after 5 seconds");
}, 5000);

console.log("End");

setTimeout(() => {
  console.log("Print after 4 sec. This arrow function");
}, 4000);


2. Test: 

Start
End
Print after 4 sec
Print after 4 sec. This arrow function
Task finished after 5 seconds

Because setTimeout is async — it runs later.


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


4. update code: 

simple one: 

const p = new Promise(function (resolve) { 
resolve("Hello"); 
}); 

p.then(function (value) { 
console.log(value); 
});



// Normally Promises are used with async work: Using Arrow function
const p2 = new Promise((resolve) => {
  setTimeout(() => resolve("Hello"), 2000);
});

p2.then((value) => {
    console.log(value);
});


----------------------------------

console.log("1️⃣ Create Promise");

const myPromise = new Promise(function (resolve, reject) {

  console.log("2️⃣ Async work starts");

  setTimeout(function () {
    console.log("4️⃣ resolve(value)");
    resolve("✅ Task Result Ready");
  }, 5000);

});

console.log("3️⃣ JS continues running");

myPromise.then(function (result) {
  console.log("5️⃣ .then receives value:", result);
});

Expected Output: 
1️⃣ Create Promise
2️⃣ Async work starts
3️⃣ JS continues running
(5 second pause)
4️⃣ resolve(value)
5️⃣ .then receives value: ✅ Task Result Ready

---------------------------------------

Using Reject:
simple version: 
const ok = false;

new Promise((resolve, reject) => {
  if (ok) resolve("Good");
  else reject("Bad");
})
.then(v => console.log("SUCCESS:", v))
.catch(e => console.log("ERROR:", e));

---------------------------------------------------------------------

const status = false;

function getTask() {
  return new Promise((resolve, reject) => {
    if (status) {
      resolve("Task completed");
    } else {
      reject("Task failed");
    }
  });
}

getTask()
  .then(result => console.log("SUCCESS:", result))
  .catch(error => console.log("ERROR:", error));

-------------------------------------

Promises are used to handle async operations

Old style
Promise + then/catch pattern

New style
Promise + async/await pattern


5. Async/Await — Same Flow Example

async/await = “Wait for the result, then continue.”

Real-Life Example — Making Tea 
You start boiling water — it takes time.
You wait — then make tea.


👉 async/await does NOT replace Promise
👉 async/await USES Promise internally
👉 No Promise → no await

-----------------

const ok = false;

function getResult() {
  return new Promise((resolve, reject) => {
    if (ok) resolve("Good");
    else reject("Bad");
  });
}

async function run() {
  try {
    const v = await getResult();
    console.log("SUCCESS:", v);
  } catch (e) {
    console.log("ERROR:", e);
  }
}

run();


-----------------

with setTimeout: 
Step 1: 

console.log("Start");

setTimeout(() => {
  console.log("Timer finished");
}, 2000);

console.log("End");


Step 2: 

function wait2Sec() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Done waiting"), 2000);
  });
}

wait2Sec().then(v => console.log(v));

step 3: 

function wait2Sec() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Done waiting"), 2000);
  });
}

async function run() {
  console.log("Before wait");

  const msg = await wait2Sec();

  console.log("After wait:", msg);
}

run();

console.log("Outside function");

----------------

then/catch = chain style
async/await = straight-line style

