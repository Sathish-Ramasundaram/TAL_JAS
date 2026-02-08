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

// Step 1: Create Promise
const p = new Promise(function (resolve) { 
resolve("Hello"); 
}); 

// Step 2: Use the result with .then()
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

const myPromise = new Promise((resolve, reject) => {
  const success = false;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});

myPromise
  .then(result => console.log("Success:", result))
  .catch(error => console.log("Error:", error));

-------------------------------------

5. Async/Await — Same Flow Example

async/await = “Wait for the result, then continue.”

Real-Life Example — Making Tea 
You start boiling water — it takes time.
You wait — then make tea.


👉 async/await does NOT replace Promise
👉 async/await USES Promise internally
👉 No Promise → no await


Tiny Example: 

async function run() {
  await new Promise(r => setTimeout(r, 2000));
  console.log("Done");
}

run();

----------------------

```

function createTaskPromise() {
  console.log("1️⃣ Create Promise");

  return new Promise(function (resolve, reject) {
    console.log("2️⃣ Async work starts");

    setTimeout(function () {
      console.log("4️⃣ resolve(value)");
      resolve("✅ Task Result Ready");
    }, 2000);
  });
}


async function runTask() {
  console.log("3️⃣ JS continues running (inside async function)");

  const result = await createTaskPromise();

  console.log("5️⃣ await receives value:", result);
}

runTask();

```
6. Expected output: 

3️⃣ JS continues running (inside async function)
1️⃣ Create Promise
2️⃣ Async work starts
(2 sec pause)
4️⃣ resolve(value)
5️⃣ await receives value: ✅ Task Result Ready


7. Old style:
promise.then(result => ...)

New style:
const result = await promise
Cleaner. Linear. Easier to read.
That’s why React code uses:

const data = await fetch(...)

✅ One Line Rule
await = “pause this function until Promise finishes”
Only pauses inside that async function — not whole JS.

8. Another example: 

Modern Style: async / await

Same Promise — cleaner syntax.

Paste:

function wait() {
  return new Promise(r => setTimeout(() => r("OK"), 2000));
}

async function run() {
  console.log("Before");
  const result = await wait();
  console.log("After:", result);
}

run();

✅ Output
Before
(after 2 sec)
After: OK 
