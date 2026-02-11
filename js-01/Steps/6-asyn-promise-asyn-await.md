Asynchronous programming
Understanding concepts like callbacks, promises, and async/await, and how to handle asynchronous code execution in JavaScript.


Synchronous Functions
Code runs line by line, one step at a time.
Each task must finish before the next starts.

Example: 
console.log("Start");

function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
console.log("End");

Output: 
Start
5
End

Asynchronous Functions
Code starts a task and does not wait for it to finish.
It continues executing the next lines.

Used for slow operations like:
API calls
Timers
File reading
Database queries

Example: 
console.log("Start");

setTimeout(() => {
  console.log("Task done");
}, 2000);

console.log("End");

Output: 
Start
End
Task done


Callback: 
A callback is a function passed as an argument to another function, which is invoked (called) inside that function — either immediately or later.

Example: 
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Sam", sayBye);

Output: 
Hello Sam
Goodbye!


JavaScript actually has two main phases
✅ Phase 1 — Creation Phase (often called compilation/hoisting phase)
✅ Phase 2 — Execution Phase

JS scans the file first and registers function declarations.
Order doesn’t matter here — both functions are stored in memory.
After this phase, memory has:
greet → function stored
sayBye → function stored

Execution order: 
1️⃣ greet("Sam", sayBye)
2️⃣ console.log("Hello Sam")
3️⃣ callback() → sayBye()
4️⃣ console.log("Goodbye!")


-----------------------------------------------------

Callback with Result
Instead of just calling the callback, we pass data to it.

function add(a, b, callback) {
  const result = a + b;
  callback(result);
}

function showResult(value) {
  console.log("Result is:", value);
}

add(2, 3, showResult);



Inline callback function (most commonly used): 
We remove the separate showResult function and write it directly inside the call.

function add(a, b, callback) {
  const result = a + b;
  callback(result);
}

add(2, 3, function(value) {
  console.log("Result is:", value);
});



Async callback:

function add(a, b, callback) {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 1000); // delay 1 second
}

add(2, 3, function(value) {
  console.log("Result is:", value);
});

console.log("After calling add");


What changed: 
From: 
  const result = a + b;
  callback(result);

To: 
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 1000); // delay 1 second



-------------------------

Sync code
   ↓
Callback
   ↓
Promise   ← you are here
   ↓
async/await





1. setTimeout:
setTimeout(() => {},1000);


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

getTask();


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

--------

Perfect 👍 — here are the **exact rules used** in your async/await “go live” example — clean, short, and practical. These are the rules you actually applied (not theory overload).

---

# ✅ Async/Await Rules Used in Your Example

---

## ✅ Rule 1 — `async` function always returns a Promise

```js
async function goLive() {
  return "Launch success";
}
```

Behaves like:

```js
return Promise.resolve("Launch success");
```

That’s why this works:

```js
goLive().then(...)
```

---

## ✅ Rule 2 — `await` can be used only inside `async` functions

Valid:

```js
async function goLive() {
  const step1 = await wait(...);
}
```

Invalid:

```js
const step1 = await wait(...); ❌
```

---

## ✅ Rule 3 — `await` pauses execution inside the async function

```js
const step1 = await wait("Server", 1000);
console.log(step1);
```

Meaning:

```
wait until Promise settles → then continue
```

Only that async function pauses — JS program does not freeze.

---

## ✅ Rule 4 — Promise `resolve` → await gives value

Inside Promise:

```js
resolve("Server Ready");
```

Await receives:

```js
const msg = await wait();
console.log(msg); // "Server Ready"
```

---

## ✅ Rule 5 — Promise `reject` → await throws error

Inside Promise:

```js
reject("Server failed");
```

Await turns it into thrown error:

```js
try {
  await wait();
} catch (err) {
  console.log(err);
}
```

---

## ✅ Rule 6 — Use `try/catch` to handle async errors

```js
try {
  const step = await wait(...);
} catch (err) {
  console.log("ERROR:", err);
}
```

Async errors are NOT caught without try/catch.

---

## ✅ Rule 7 — Multiple `await` = sequential execution

```js
await wait("Server", 1000);
await wait("Database", 2000);
```

Runs in order:

```
first finishes → second starts
```

Total time = sum of delays.

---

## ✅ Rule 8 — Async function can still be chained with `.then()`

Even though you used await inside:

```js
goLive().then(msg => console.log(msg));
```

Because async → returns Promise.

---

# ✅ Rule 9 — Async code looks synchronous (main benefit)

Instead of:

```js
wait().then().then().catch()
```

You wrote:

```js
const step = await wait();
```

Cleaner + readable.

---

# 🎯 One-Screen Memory Summary

```
async → returns Promise
await → only inside async
await → pauses function, not program
resolve → await gives value
reject → await throws error
try/catch → handles async errors
multiple await → sequential
```


