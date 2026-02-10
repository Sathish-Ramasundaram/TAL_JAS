
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
try { x.y } 
catch(e) { console.log("Error caught"); }
```

---

# ✅ 4️⃣ finally (Optional Cleanup)

**What:** Runs whether error happens or not.
**Why:** Good for cleanup actions.

```javascript
try { run() }
catch {}
finally { console.log("Always runs"); }
```

---

# ✅ 5️⃣ Unit Testing

**What:** Test small pieces of code automatically.
**Why:** Ensures functions work correctly.

Example: 

try {
  let x = y + 1;   // y not defined → error
} catch (err) {
  console.log("Error caught:", err.message);
}

console.log("App still running");


Output: 
Error caught: y is not defined
App still running


-----------------

try…catch…finally
finally runs always — error or not.

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

