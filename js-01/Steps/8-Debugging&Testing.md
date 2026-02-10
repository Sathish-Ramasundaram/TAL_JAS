
---

# ✅ 1️⃣ Browser Developer Tools (Debugging)

**What:** Built-in browser tools to inspect code, console logs, and errors.
**Why:** Helps find where and why your JS is failing.

```javascript
console.log("Value:", x);
debugger;
```

👉 Opens console + pauses execution at `debugger`.

---

# ✅ 2️⃣ Breakpoints (Step Debugging)

**What:** Pause code at a line and run step-by-step.

Why: Find bugs and understand flow
Breakpoints help you:
see variable values
track logic errors
understand execution order
debug async behavior
avoid too many console.logs

Simple Example

```

function add(a, b) {
  const result = a + b;   // ← set breakpoint here
  return result;
}

add(2, 3);

```


When execution pauses:
you can see a, b, result
step through next lines

✅ How to Set Breakpoint (Chrome / Edge DevTools)

Open page
Press F12
Go to Sources tab
Open your JS file
Click line number → blue dot appears = breakpoint
Refresh page → execution pauses there

---

# ✅ 3️⃣ try…catch (Error Handling)

**What:** Safely run risky code and catch errors.
**Why:** Prevents app crash.

```javascript
try {
  const num = "Welcome";
  console.log(num.toUpperCase()); 
} catch (error) {
  console.log(error.message);
}

```

```
try {
  const num = 12;
  console.log(num.toUpperCase()); 
} catch (error) {
  console.log(error.message);
}

```

---

# ✅ 4️⃣ finally (Optional Cleanup)

**What:** Runs whether error happens or not.
**Why:** Good for cleanup actions.

```javascript
try {
  const num = "Welcome";
  console.log(num.toUpperCase());
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Finished execution");
}

```

finally block:
👉 Runs always
whether error happens or not
whether catch runs or not
even if there is a return inside try/catch

Finally is optional.

You can write:
try + catch
try + finally
try + catch + finally
All are valid.

✅ When finally Is Useful
Use finally when you must always run cleanup code:
close DB connection
stop loader/spinner
release resource
hide modal
clear timer

Example:

try {
  startLoader();
  riskyWork();
} catch (e) {
  console.log(e);
} finally {
  stopLoader(); // must always happen
}

---

# ✅ 5️⃣ Unit Testing

**What:** Test small pieces of code automatically.
**Why:** Ensures functions work correctly.

Example: 
type nul > math.js

```

function add(a, b) {
  return a + b;
}

module.exports = { add };



```
type nul > math.test.js

```
const { add } = require("./math");

test("adds 2 + 3 to equal 5", () => {
  expect(add(2, 3)).toBe(5);
});


```
Run: 
npm test

Note: We require necessary package. 
Install
npm init -y
this create package.json

Then install Jest (if you want unit testing):
npm install jest --save-dev

Add test script inside package.json:

"scripts": {
  "test": "jest"
}


---

# ✅ 6️⃣ Test Frameworks (JS Tools)

**What:** Tools like Jest, Vitest, Mocha run tests.
**Why:** Automate checking instead of manual testing.

```javascript
test("adds", () => {
  expect(2+2).toBe(4);
});
```

---

