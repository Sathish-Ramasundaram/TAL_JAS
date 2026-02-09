
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
**Why:** See variable values while code runs.

```javascript
let a = 5;
let b = a + 2; // set breakpoint here
```

👉 DevTools → Sources → click line number.

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

```javascript
expect(add(2,3)).toBe(5);
```

(Example style from Jest)

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

